import React, { PureComponent } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import { deviceMap } from "../Devices/Devices";
import { DeviceLayout } from '../Devices/DeviceLayout';
import { Modal, ModalHeader, ModalBody, Table, Input, ModalFooter, Button } from 'reactstrap';
import _ from 'lodash';

import './MainPanel.css';
import { manager } from '../Service/FPGAManager';
import { pjManager } from "../Service/ProjectManager";
import { Gallery } from './Gallery';

const ReactGridLayout = WidthProvider(RGL);

export class MainPanel extends PureComponent {

    //从Manager获取数据
    // async componentWillMount() {
    //     let data = await pjManager.GetPanelData();
    //     this.setState({
    //         layout: data.layout,
    //         instanceCounter: data.layout.length
    //     });
    // }
    layoutChangeFlag = false

    componentWillReceiveProps(nextProps) {
        let data = nextProps.panelData;
        if (data != null && this.state.layout == null) {
            this.setState({
                layout: data.layout,
                instanceCounter: data.layout.length
            }, ()=> {
                this.layoutChangeFlag = true;
                // console.log("state callback2")
            });
        }
    }

    componentDidMount() {
        //for test
        // manager.MapOutputPorts("sec_out[5]", 'i1', 0);
        // manager.MapOutputPorts("sec_out[4]", 'i2', 0);
        // manager.MapOutputPorts("sec_out[3]", 'i3', 0);
        // manager.MapOutputPorts("sec_out[2]", 'i4', 0);
        // manager.MapOutputPorts("sec_out[1]", 'i5', 0);
        // manager.MapOutputPorts("sec_out[0]", 'i6', 0);
        // manager.MapInputPorts('i7', 0, "rst_n", 0);

        // pjManager.RegisterRefreshMainPanel(this.OnRefresh);

        //for test
        // pjManager.layout = this.state.layout;
    }

    // OnRefresh = (data) => {
    //     this.setState({
    //         layout: data.layout,
    //         instanceCounter: data.layout.length
    //     });
    // }

    OnSettingClick = (event) => {
        // let connMap = this.GenerateSettingTable(event);
        // this.setState((prevState) => {
        //     return {
        //         isSettingModalOpen : !prevState.isSettingModalOpen,
        //         projectConnections : connMap
        //     }
        // });
        let insName = event.props.instance;
        let ports = event.props.ports;
        let portsDirs = event.props.portsDirs;
        let conns = manager.GetProjectInstanceMappingAll(insName);

        this.setState((prevState) => {
            return {
                isSettingModalOpen : !prevState.isSettingModalOpen,
                selectedDevice: insName,
                selectedDevicePorts: ports,
                selectedDevicePortsDirection: portsDirs,
                selectedDevicePortsConnection: conns
            }
        });
    }

    OnSettingModalToggle = (event) => {
        this.setState((prevState) => {
            return {
                isSettingModalOpen : !prevState.isSettingModalOpen,
            }
        });
    }

    OnRemoveClick = (event, instance) => {
        console.log(`Remove device: ${instance}`);

        let newLayout = _.reject(this.state.layout, {i: instance});
        //更新当前状态和PJManager中的值
        pjManager.layout = newLayout;
        this.props.onModified(true);

        this.setState({
            layout: newLayout
        });
    }

    OnPortChange = (event, index, direction, instance) =>　{
        let prevConnectionMap = this.state.projectConnections;
        let prevConnection = prevConnectionMap.get(instance);
        prevConnection[index] = event.target.value;
        prevConnectionMap.set(instance, prevConnection);

        if (direction === "输出") { //组件的输入接硬件的输出
            manager.MapInputPorts(instance, index, event.target.value, 0);
        } else {
            manager.MapOutputPorts(event.target.value, instance, index);
        }

        this.props.onModified(true);

        this.setState({
            projectConnections: prevConnectionMap
        });
        
    }

    GenPortsSelects = (instance, index, direction) => { 
        let projectPorts = direction === "输出" ? manager.GetProjectInputPorts() : manager.GetProjectOutputPorts(); //组件的输入接硬件的输出

        let selected = "";

        if (this.state.projectConnections.has(instance)) {
            selected = (this.state.projectConnections.get(instance))[index];
        } else {
            selected = manager.GetProjectInstanceMapping(instance, index);
        }

        return <Input type="select" bsSize="sm" key={index} value={selected} onChange={(e) => this.OnPortChange(e, index, direction, instance)}>
            <option>请选择</option>
            {
                projectPorts.map((value, index) => {
                    return <option key={index} >
                        {value}
                    </option>
                    
                })
            }
        </Input>
    }

    SettingTable = <Table hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>组件端口</th>
                    <th>I/O</th>
                    <th>硬件端口</th>
                </tr>
            </thead>
        </Table>

    GenerateSettingTable = (instance) => {
        let ports = instance.props.ports;
        let portsDirs = instance.props.portsDirs;

        this.SettingTable = <Table hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>组件端口</th>
                    <th>I/O</th>
                    <th>硬件端口</th>
                </tr>
            </thead>
            <tbody>
                {
                    ports.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item}</td>
                            <td>{portsDirs[index]}</td>
                            <td>{this.GenPortsSelects(instance.props.instance, index, portsDirs[index])}</td>
                        </tr>
                    })
                }

            </tbody>
        </Table>

        let insProjMap = new Map();
        insProjMap.set(instance.props.instance, manager.GetProjectInstanceMappingAll(instance.props.instance));

        return insProjMap;
    }

    OnAdd = (event, name) => {
        let insCounter = this.state.instanceCounter;
        insCounter = insCounter + 1;
        console.log(insCounter)
        let nextX = (this.state.layout.length * 3) % 24;
        let nextY = 3 * Math.floor(this.state.layout.length / 8);

        console.log(`Add instance: ${name} at (${nextX}, ${nextY})`);

        let newLayout = this.state.layout.concat({
            i: 'i' + insCounter, device: name, x: nextX, 
             y: nextY,w:3,h:3, minW:3, minH:3
        });

        // console.log(newLayout)

        //更新当前状态和PJManager中的值
        pjManager.layout = newLayout;
        this.props.onModified(true);

        this.setState({
            layout: newLayout,
            instanceCounter: insCounter
        }, () => {
            // console.log("state callback")
        })
    }

    GenLayoutDevices = (layout) => {
        // console.log(layout);
        return _.map(layout, el => {
        
            // let dev = <div></div>

            // switch (el.device) {
            //     case "LED":
            //         dev = <LED instance={el.i}/>
            //         break;
            //     case "HButton":
            //         dev = <HButton instance={el.i}/>
            //         break;
            //     default:
            //         break;
            // }
            console.log(el);
            let dev = React.createElement(deviceMap.get(el.device)[0], {instance: el.i})

            return <div key={el.i} data-grid={el} className='grid-base'>
                <DeviceLayout instance={el.i} OnSettingClick={this.OnSettingClick} OnRemoveClick={(e) => this.OnRemoveClick(e, el.i)}>
                    {dev}
                </DeviceLayout>
            </div>
        });
    }

    OnPortChange2 = (event, index, direction, instance, connections) =>　{
        connections[index] = event.target.value;

        if (direction === "输出") { //组件的输入接硬件的输出
            manager.MapInputPorts(instance, index, event.target.value, 0); //TODO 默认初始值为0
        } else {
            manager.MapOutputPorts(event.target.value, instance, index);
        }
        this.props.onModified(true);

        this.setState({
            selectedDevicePortsConnection: connections
        });

        this.forceUpdate();
    }

    GenPortsSelects2 = (instance, index, direction, connections) => { 
        let projectPorts = direction === "输出" ? manager.GetProjectInputPorts() : manager.GetProjectOutputPorts(); //组件的输入接硬件的输出

        let selected = connections[index];

        return <Input type="select" bsSize="sm" key={index} value={selected} onChange={(e) => this.OnPortChange2(e, index, direction, instance, connections)}>
            <option>请选择</option>
            {
                projectPorts.map((value, index) => {
                    return <option key={index} >
                        {value}
                    </option>
                    
                })
            }
        </Input>
    }

    GenerateSettingTable2 = (selectedDevice, selectedDevicePorts, selectedDevicePortsDirection, selectedDevicePortsConnection) => {
        return <Table hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>组件端口</th>
                    <th>I/O</th>
                    <th>硬件端口</th>
                </tr>
            </thead>
            <tbody>
                {
                    selectedDevicePorts.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item}</td>
                            <td>{selectedDevicePortsDirection[index]}</td>
                            <td>{this.GenPortsSelects2(selectedDevice, index, selectedDevicePortsDirection[index], selectedDevicePortsConnection)}</td>
                        </tr>
                    })
                }

            </tbody>
        </Table>
    }

    OnLayoutChange = (layout) => {
        // console.log(layout);
        //此处的Layout不含device信息
        pjManager.layoutNoDevice = layout;
        if (this.layoutChangeFlag) {
            this.props.onModified(true);
        }
    }

    state = {
        isSettingModalOpen: false,
        instanceCounter: 0,
        projectConnections: new Map(),
        layout: null,
        selectedDevice: "", // "i1"  被选中的Instance名称
        selectedDevicePorts: [], // [输入1,  ...] 选中Instance的所有端口
        selectedDevicePortsDirection: [], // [input, ...]
        selectedDevicePortsConnection: [] // [sec_out[0], ...]
    }
    
    render() {

        return (
            <div id="outer-container">
                <Gallery OnAdd={this.OnAdd} isOpen={this.props.isGalleryOpen} onGalleryStateChange={(sta) => this.props.onGalleryStateChange(sta)}></Gallery>
                <main id='panel-content' >
                    <ReactGridLayout cols={24} rowHeight={24} compactType={null} onLayoutChange={this.OnLayoutChange}>
                        {this.GenLayoutDevices(this.state.layout)}
                    </ReactGridLayout>
                </main>
                <Modal isOpen={this.state.isSettingModalOpen} toggle={this.OnSettingModalToggle}>
                    <ModalHeader >设置</ModalHeader>
                    <ModalBody>
                        {
                        /* {this.SettingTable} */
                        this.GenerateSettingTable2(this.state.selectedDevice, this.state.selectedDevicePorts, this.state.selectedDevicePortsDirection, this.state.selectedDevicePortsConnection)
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={this.OnSettingModalToggle} style={{width: "120px", borderRadius: "20px"}}>确定</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}