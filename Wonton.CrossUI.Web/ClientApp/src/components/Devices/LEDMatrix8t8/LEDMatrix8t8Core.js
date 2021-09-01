import React, { Component } from 'react';

import "./LEDMatrix8t8.css"

export class LEDMatrix8t8Core extends Component {
    
    static defaultProps = {
        name: "LED阵列8x8",
        ClassName: "LEDMatrix8t8",
        size: [6, 8, 6, 8],
        onOff: [
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false]
        ]
    }

    render() {
        return (      
            <div className="LEDMatrix8t8">
                <div id="panel"></div>
                <span id="dot0_0" className={this.props.onOff[0][0] ? "on" : ""} />
                <span id="dot0_1" className={this.props.onOff[0][1] ? "on" : ""} />
                <span id="dot0_2" className={this.props.onOff[0][2] ? "on" : ""} />
                <span id="dot0_3" className={this.props.onOff[0][3] ? "on" : ""} />
                <span id="dot0_4" className={this.props.onOff[0][4] ? "on" : ""} />
                <span id="dot0_5" className={this.props.onOff[0][5] ? "on" : ""} />
                <span id="dot0_6" className={this.props.onOff[0][6] ? "on" : ""} />
                <span id="dot0_7" className={this.props.onOff[0][7] ? "on" : ""} />
                <span id="dot1_0" className={this.props.onOff[1][0] ? "on" : ""} />
                <span id="dot1_1" className={this.props.onOff[1][1] ? "on" : ""} />
                <span id="dot1_2" className={this.props.onOff[1][2] ? "on" : ""} />
                <span id="dot1_3" className={this.props.onOff[1][3] ? "on" : ""} />
                <span id="dot1_4" className={this.props.onOff[1][4] ? "on" : ""} />
                <span id="dot1_5" className={this.props.onOff[1][5] ? "on" : ""} />
                <span id="dot1_6" className={this.props.onOff[1][6] ? "on" : ""} />
                <span id="dot1_7" className={this.props.onOff[1][7] ? "on" : ""} />
                <span id="dot2_0" className={this.props.onOff[2][0] ? "on" : ""} />
                <span id="dot2_1" className={this.props.onOff[2][1] ? "on" : ""} />
                <span id="dot2_2" className={this.props.onOff[2][2] ? "on" : ""} />
                <span id="dot2_3" className={this.props.onOff[2][3] ? "on" : ""} />
                <span id="dot2_4" className={this.props.onOff[2][4] ? "on" : ""} />
                <span id="dot2_5" className={this.props.onOff[2][5] ? "on" : ""} />
                <span id="dot2_6" className={this.props.onOff[2][6] ? "on" : ""} />
                <span id="dot2_7" className={this.props.onOff[2][7] ? "on" : ""} />
                <span id="dot3_0" className={this.props.onOff[3][0] ? "on" : ""} />
                <span id="dot3_1" className={this.props.onOff[3][1] ? "on" : ""} />
                <span id="dot3_2" className={this.props.onOff[3][2] ? "on" : ""} />
                <span id="dot3_3" className={this.props.onOff[3][3] ? "on" : ""} />
                <span id="dot3_4" className={this.props.onOff[3][4] ? "on" : ""} />
                <span id="dot3_5" className={this.props.onOff[3][5] ? "on" : ""} />
                <span id="dot3_6" className={this.props.onOff[3][6] ? "on" : ""} />
                <span id="dot3_7" className={this.props.onOff[3][7] ? "on" : ""} />
                <span id="dot4_0" className={this.props.onOff[4][0] ? "on" : ""} />
                <span id="dot4_1" className={this.props.onOff[4][1] ? "on" : ""} />
                <span id="dot4_2" className={this.props.onOff[4][2] ? "on" : ""} />
                <span id="dot4_3" className={this.props.onOff[4][3] ? "on" : ""} />
                <span id="dot4_4" className={this.props.onOff[4][4] ? "on" : ""} />
                <span id="dot4_5" className={this.props.onOff[4][5] ? "on" : ""} />
                <span id="dot4_6" className={this.props.onOff[4][6] ? "on" : ""} />
                <span id="dot4_7" className={this.props.onOff[4][7] ? "on" : ""} />
                <span id="dot5_0" className={this.props.onOff[5][0] ? "on" : ""} />
                <span id="dot5_1" className={this.props.onOff[5][1] ? "on" : ""} />
                <span id="dot5_2" className={this.props.onOff[5][2] ? "on" : ""} />
                <span id="dot5_3" className={this.props.onOff[5][3] ? "on" : ""} />
                <span id="dot5_4" className={this.props.onOff[5][4] ? "on" : ""} />
                <span id="dot5_5" className={this.props.onOff[5][5] ? "on" : ""} />
                <span id="dot5_6" className={this.props.onOff[5][6] ? "on" : ""} />
                <span id="dot5_7" className={this.props.onOff[5][7] ? "on" : ""} />
                <span id="dot6_0" className={this.props.onOff[6][0] ? "on" : ""} />
                <span id="dot6_1" className={this.props.onOff[6][1] ? "on" : ""} />
                <span id="dot6_2" className={this.props.onOff[6][2] ? "on" : ""} />
                <span id="dot6_3" className={this.props.onOff[6][3] ? "on" : ""} />
                <span id="dot6_4" className={this.props.onOff[6][4] ? "on" : ""} />
                <span id="dot6_5" className={this.props.onOff[6][5] ? "on" : ""} />
                <span id="dot6_6" className={this.props.onOff[6][6] ? "on" : ""} />
                <span id="dot6_7" className={this.props.onOff[6][7] ? "on" : ""} />
                <span id="dot7_0" className={this.props.onOff[7][0] ? "on" : ""} />
                <span id="dot7_1" className={this.props.onOff[7][1] ? "on" : ""} />
                <span id="dot7_2" className={this.props.onOff[7][2] ? "on" : ""} />
                <span id="dot7_3" className={this.props.onOff[7][3] ? "on" : ""} />
                <span id="dot7_4" className={this.props.onOff[7][4] ? "on" : ""} />
                <span id="dot7_5" className={this.props.onOff[7][5] ? "on" : ""} />
                <span id="dot7_6" className={this.props.onOff[7][6] ? "on" : ""} />
                <span id="dot7_7" className={this.props.onOff[7][7] ? "on" : ""} />
            </div>
        );
    }
}