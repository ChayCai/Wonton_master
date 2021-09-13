import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

import "./LEDMatrix16t16.css"

export class LEDMatrix16t16Core extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setonoff: false,
        }
    }

    static defaultProps = {
        name: "LED阵列16x16",
        ClassName: "LEDMatrix16t16",
        size: [9, 12, 9, 12],
        onOff: [
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        ]
    }

    handlesetonoff = () => {
        this.setState({
            setonoff: !this.state.setonoff,
        })
    }

    render() {
        return (      
            <div className="LEDMatrix16t16">
                <Button id="setbutton" size="sm" onClick={this.handlesetonoff} color={ this.props.deltaonoff==="ON"?"success":"secondary"}>{this.props.deltaonoff}</Button>
                <Modal isOpen={this.state.setonoff} toggle={this.handlesetonoff}>
                    <ModalHeader toggle={this.handlesetonoff}>模拟视觉残留现象</ModalHeader>
                    <ModalBody>
                        <Button color="success" onClick={() => this.props.onsetchange("ON")}>ON</Button>
                        <Button color="secondary" onClick={() => this.props.onsetchange("OFF")}>OFF</Button>
                    </ModalBody>
                </Modal>
                <div id="panel"></div>
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_0" myonoff={this.props.onOff[0][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_1" myonoff={this.props.onOff[0][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_2" myonoff={this.props.onOff[0][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_3" myonoff={this.props.onOff[0][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_4" myonoff={this.props.onOff[0][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_5" myonoff={this.props.onOff[0][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_6" myonoff={this.props.onOff[0][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_7" myonoff={this.props.onOff[0][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_8" myonoff={this.props.onOff[0][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_9" myonoff={this.props.onOff[0][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_10" myonoff={this.props.onOff[0][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_11" myonoff={this.props.onOff[0][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_12" myonoff={this.props.onOff[0][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_13" myonoff={this.props.onOff[0][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_14" myonoff={this.props.onOff[0][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot0_15" myonoff={this.props.onOff[0][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_0" myonoff={this.props.onOff[1][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_1" myonoff={this.props.onOff[1][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_2" myonoff={this.props.onOff[1][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_3" myonoff={this.props.onOff[1][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_4" myonoff={this.props.onOff[1][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_5" myonoff={this.props.onOff[1][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_6" myonoff={this.props.onOff[1][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_7" myonoff={this.props.onOff[1][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_8" myonoff={this.props.onOff[1][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_9" myonoff={this.props.onOff[1][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_10" myonoff={this.props.onOff[1][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_11" myonoff={this.props.onOff[1][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_12" myonoff={this.props.onOff[1][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_13" myonoff={this.props.onOff[1][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_14" myonoff={this.props.onOff[1][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot1_15" myonoff={this.props.onOff[1][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_0" myonoff={this.props.onOff[2][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_1" myonoff={this.props.onOff[2][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_2" myonoff={this.props.onOff[2][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_3" myonoff={this.props.onOff[2][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_4" myonoff={this.props.onOff[2][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_5" myonoff={this.props.onOff[2][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_6" myonoff={this.props.onOff[2][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_7" myonoff={this.props.onOff[2][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_8" myonoff={this.props.onOff[2][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_9" myonoff={this.props.onOff[2][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_10" myonoff={this.props.onOff[2][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_11" myonoff={this.props.onOff[2][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_12" myonoff={this.props.onOff[2][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_13" myonoff={this.props.onOff[2][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_14" myonoff={this.props.onOff[2][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot2_15" myonoff={this.props.onOff[2][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_0" myonoff={this.props.onOff[3][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_1" myonoff={this.props.onOff[3][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_2" myonoff={this.props.onOff[3][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_3" myonoff={this.props.onOff[3][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_4" myonoff={this.props.onOff[3][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_5" myonoff={this.props.onOff[3][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_6" myonoff={this.props.onOff[3][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_7" myonoff={this.props.onOff[3][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_8" myonoff={this.props.onOff[3][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_9" myonoff={this.props.onOff[3][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_10" myonoff={this.props.onOff[3][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_11" myonoff={this.props.onOff[3][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_12" myonoff={this.props.onOff[3][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_13" myonoff={this.props.onOff[3][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_14" myonoff={this.props.onOff[3][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot3_15" myonoff={this.props.onOff[3][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_0" myonoff={this.props.onOff[4][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_1" myonoff={this.props.onOff[4][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_2" myonoff={this.props.onOff[4][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_3" myonoff={this.props.onOff[4][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_4" myonoff={this.props.onOff[4][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_5" myonoff={this.props.onOff[4][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_6" myonoff={this.props.onOff[4][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_7" myonoff={this.props.onOff[4][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_8" myonoff={this.props.onOff[4][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_9" myonoff={this.props.onOff[4][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_10" myonoff={this.props.onOff[4][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_11" myonoff={this.props.onOff[4][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_12" myonoff={this.props.onOff[4][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_13" myonoff={this.props.onOff[4][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_14" myonoff={this.props.onOff[4][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot4_15" myonoff={this.props.onOff[4][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_0" myonoff={this.props.onOff[5][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_1" myonoff={this.props.onOff[5][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_2" myonoff={this.props.onOff[5][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_3" myonoff={this.props.onOff[5][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_4" myonoff={this.props.onOff[5][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_5" myonoff={this.props.onOff[5][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_6" myonoff={this.props.onOff[5][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_7" myonoff={this.props.onOff[5][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_8" myonoff={this.props.onOff[5][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_9" myonoff={this.props.onOff[5][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_10" myonoff={this.props.onOff[5][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_11" myonoff={this.props.onOff[5][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_12" myonoff={this.props.onOff[5][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_13" myonoff={this.props.onOff[5][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_14" myonoff={this.props.onOff[5][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot5_15" myonoff={this.props.onOff[5][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_0" myonoff={this.props.onOff[6][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_1" myonoff={this.props.onOff[6][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_2" myonoff={this.props.onOff[6][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_3" myonoff={this.props.onOff[6][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_4" myonoff={this.props.onOff[6][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_5" myonoff={this.props.onOff[6][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_6" myonoff={this.props.onOff[6][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_7" myonoff={this.props.onOff[6][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_8" myonoff={this.props.onOff[6][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_9" myonoff={this.props.onOff[6][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_10" myonoff={this.props.onOff[6][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_11" myonoff={this.props.onOff[6][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_12" myonoff={this.props.onOff[6][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_13" myonoff={this.props.onOff[6][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_14" myonoff={this.props.onOff[6][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot6_15" myonoff={this.props.onOff[6][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_0" myonoff={this.props.onOff[7][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_1" myonoff={this.props.onOff[7][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_2" myonoff={this.props.onOff[7][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_3" myonoff={this.props.onOff[7][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_4" myonoff={this.props.onOff[7][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_5" myonoff={this.props.onOff[7][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_6" myonoff={this.props.onOff[7][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_7" myonoff={this.props.onOff[7][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_8" myonoff={this.props.onOff[7][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_9" myonoff={this.props.onOff[7][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_10" myonoff={this.props.onOff[7][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_11" myonoff={this.props.onOff[7][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_12" myonoff={this.props.onOff[7][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_13" myonoff={this.props.onOff[7][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_14" myonoff={this.props.onOff[7][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot7_15" myonoff={this.props.onOff[7][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_0" myonoff={this.props.onOff[8][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_1" myonoff={this.props.onOff[8][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_2" myonoff={this.props.onOff[8][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_3" myonoff={this.props.onOff[8][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_4" myonoff={this.props.onOff[8][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_5" myonoff={this.props.onOff[8][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_6" myonoff={this.props.onOff[8][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_7" myonoff={this.props.onOff[8][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_8" myonoff={this.props.onOff[8][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_9" myonoff={this.props.onOff[8][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_10" myonoff={this.props.onOff[8][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_11" myonoff={this.props.onOff[8][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_12" myonoff={this.props.onOff[8][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_13" myonoff={this.props.onOff[8][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_14" myonoff={this.props.onOff[8][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot8_15" myonoff={this.props.onOff[8][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_0" myonoff={this.props.onOff[9][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_1" myonoff={this.props.onOff[9][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_2" myonoff={this.props.onOff[9][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_3" myonoff={this.props.onOff[9][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_4" myonoff={this.props.onOff[9][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_5" myonoff={this.props.onOff[9][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_6" myonoff={this.props.onOff[9][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_7" myonoff={this.props.onOff[9][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_8" myonoff={this.props.onOff[9][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_9" myonoff={this.props.onOff[9][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_10" myonoff={this.props.onOff[9][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_11" myonoff={this.props.onOff[9][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_12" myonoff={this.props.onOff[9][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_13" myonoff={this.props.onOff[9][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_14" myonoff={this.props.onOff[9][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot9_15" myonoff={this.props.onOff[9][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_0" myonoff={this.props.onOff[10][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_1" myonoff={this.props.onOff[10][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_2" myonoff={this.props.onOff[10][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_3" myonoff={this.props.onOff[10][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_4" myonoff={this.props.onOff[10][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_5" myonoff={this.props.onOff[10][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_6" myonoff={this.props.onOff[10][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_7" myonoff={this.props.onOff[10][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_8" myonoff={this.props.onOff[10][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_9" myonoff={this.props.onOff[10][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_10" myonoff={this.props.onOff[10][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_11" myonoff={this.props.onOff[10][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_12" myonoff={this.props.onOff[10][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_13" myonoff={this.props.onOff[10][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_14" myonoff={this.props.onOff[10][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot10_15" myonoff={this.props.onOff[10][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_0" myonoff={this.props.onOff[11][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_1" myonoff={this.props.onOff[11][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_2" myonoff={this.props.onOff[11][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_3" myonoff={this.props.onOff[11][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_4" myonoff={this.props.onOff[11][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_5" myonoff={this.props.onOff[11][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_6" myonoff={this.props.onOff[11][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_7" myonoff={this.props.onOff[11][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_8" myonoff={this.props.onOff[11][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_9" myonoff={this.props.onOff[11][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_10" myonoff={this.props.onOff[11][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_11" myonoff={this.props.onOff[11][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_12" myonoff={this.props.onOff[11][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_13" myonoff={this.props.onOff[11][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_14" myonoff={this.props.onOff[11][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot11_15" myonoff={this.props.onOff[11][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_0" myonoff={this.props.onOff[12][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_1" myonoff={this.props.onOff[12][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_2" myonoff={this.props.onOff[12][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_3" myonoff={this.props.onOff[12][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_4" myonoff={this.props.onOff[12][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_5" myonoff={this.props.onOff[12][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_6" myonoff={this.props.onOff[12][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_7" myonoff={this.props.onOff[12][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_8" myonoff={this.props.onOff[12][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_9" myonoff={this.props.onOff[12][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_10" myonoff={this.props.onOff[12][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_11" myonoff={this.props.onOff[12][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_12" myonoff={this.props.onOff[12][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_13" myonoff={this.props.onOff[12][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_14" myonoff={this.props.onOff[12][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot12_15" myonoff={this.props.onOff[12][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_0" myonoff={this.props.onOff[13][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_1" myonoff={this.props.onOff[13][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_2" myonoff={this.props.onOff[13][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_3" myonoff={this.props.onOff[13][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_4" myonoff={this.props.onOff[13][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_5" myonoff={this.props.onOff[13][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_6" myonoff={this.props.onOff[13][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_7" myonoff={this.props.onOff[13][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_8" myonoff={this.props.onOff[13][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_9" myonoff={this.props.onOff[13][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_10" myonoff={this.props.onOff[13][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_11" myonoff={this.props.onOff[13][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_12" myonoff={this.props.onOff[13][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_13" myonoff={this.props.onOff[13][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_14" myonoff={this.props.onOff[13][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot13_15" myonoff={this.props.onOff[13][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_0" myonoff={this.props.onOff[14][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_1" myonoff={this.props.onOff[14][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_2" myonoff={this.props.onOff[14][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_3" myonoff={this.props.onOff[14][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_4" myonoff={this.props.onOff[14][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_5" myonoff={this.props.onOff[14][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_6" myonoff={this.props.onOff[14][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_7" myonoff={this.props.onOff[14][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_8" myonoff={this.props.onOff[14][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_9" myonoff={this.props.onOff[14][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_10" myonoff={this.props.onOff[14][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_11" myonoff={this.props.onOff[14][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_12" myonoff={this.props.onOff[14][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_13" myonoff={this.props.onOff[14][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_14" myonoff={this.props.onOff[14][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot14_15" myonoff={this.props.onOff[14][15] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_0" myonoff={this.props.onOff[15][0] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_1" myonoff={this.props.onOff[15][1] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_2" myonoff={this.props.onOff[15][2] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_3" myonoff={this.props.onOff[15][3] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_4" myonoff={this.props.onOff[15][4] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_5" myonoff={this.props.onOff[15][5] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_6" myonoff={this.props.onOff[15][6] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_7" myonoff={this.props.onOff[15][7] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_8" myonoff={this.props.onOff[15][8] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_9" myonoff={this.props.onOff[15][9] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_10" myonoff={this.props.onOff[15][10] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_11" myonoff={this.props.onOff[15][11] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_12" myonoff={this.props.onOff[15][12] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_13" myonoff={this.props.onOff[15][13] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_14" myonoff={this.props.onOff[15][14] } />
                <Myspan deltastate={this.props.deltaonoff==="ON"? true:false } myid="dot15_15" myonoff={this.props.onOff[15][15] } />
            </div>
        );
    }
}

class Myspan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deltaonoff: false,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.deltastate) {
            if (prevProps.myonoff !== this.props.myonoff) {
                if (this.props.myonoff) {
                    clearTimeout(this.timeId)
                    this.setState({
                        deltaonoff: this.props.myonoff,
                    })
                }
                else {
                    this.timeId = setTimeout(
                        () => {
                            this.setState({
                                deltaonoff: this.props.myonoff,
                            })
                        },
                        500
                    )
                }
            }
        }
        else {
            if (this.state.deltaonoff) {
                this.setState({
                    deltaonoff: false,
                })
            }
        }
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <span id={this.props.myid} className={this.props.myonoff || this.state.deltaonoff ? "on" : ""}></span>

            )
    }
}