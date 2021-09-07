import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { DeviceItem } from './DeviceItem';
import { Button, ButtonGroup } from 'reactstrap'

import './Gallery.css';
import { DataGenDeviceMap, InputDeviceMap, OutputDeviceMap } from "../Devices/Devices";

class GalleryMenu extends Component {
    render() {
        return (
            <ButtonGroup>
                <Button onClick={this.props.onClickINPUT}>INPUT</Button>
                <Button onClick={this.props.onClickOUTPUT}>OUTPUT</Button>
                <Button onClick={this.props.onClickDATAGEN}>DATAGEN</Button>
            </ButtonGroup >
        );
    };
}

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurPage: "INPUT",
        };
    }

    handleClickINPUT = () => {
        if (this.state.CurPage === "INPUT")
            return
        this.setState({
            CurPage: "INPUT"
        });
    }

    handleClickOUTPUT = () => {
        if (this.state.CurPage === "OUTPUT")
            return
        this.setState({
            CurPage: "OUTPUT"
        });
    }

    handleClickDATAGEN = () => {
        if (this.state.CurPage === "DATAGEN")
            return
        this.setState({
            CurPage: "DATAGEN"
        });
    }

    OnAdd = (event, name, size) => {
        this.props.OnAdd(event, name, size);
    }

    GenDevices = (inputDeviceMap, outputDeviceMap, datagenDeviceMap, curPage) => {
        let funcpage = (curPage) => {
            switch (curPage) {
                case "INPUT":
                    return new Map([...inputDeviceMap]);
                case "OUTPUT":
                    return new Map([...outputDeviceMap]);
                case "DATAGEN":
                    return new Map([...datagenDeviceMap]);
            }
        }
        let deviceMap = funcpage(curPage);
        let devs = []
        for (let [k, v] of deviceMap) {
            // let core  = getDeviceCore(k)
            let core = React.createElement(v[1]);
            devs.push(
                <DeviceItem OnAdd={this.OnAdd} key={k}>
                    {core}
                </DeviceItem>
            )
        }
        return devs;
    }

    render() {
        return (
            <Menu pageWrapId={"panel-content"} outerContainerId={"outer-container"} noOverlay isOpen={this.props.isOpen} onStateChange={(s) => this.props.onGalleryStateChange(s)}>
                <GalleryMenu onClickINPUT={this.handleClickINPUT} onClickOUTPUT={this.handleClickOUTPUT} onClickDATAGEN={this.handleClickDATAGEN}></GalleryMenu>
                {this.GenDevices(InputDeviceMap, OutputDeviceMap, DataGenDeviceMap, this.state.CurPage)}
            </Menu>
        );
    }
}