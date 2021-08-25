import React, { Component } from 'react';

import "./LEDMatrix16t16.css"

export class LEDMatrix16t16Core extends Component {
    
    static defaultProps = {
        name: "LED阵列16x16",
        ClassName: "LEDMatrix16t16",
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

    render() {
        return (      
            <div className="LEDMatrix16t16">
                <div id="panel"></div>
                <span id="dot0_0" className={this.props.onOff[0][0] ? "on" : ""} />
                <span id="dot0_1" className={this.props.onOff[0][1] ? "on" : ""} />
                <span id="dot0_2" className={this.props.onOff[0][2] ? "on" : ""} />
                <span id="dot0_3" className={this.props.onOff[0][3] ? "on" : ""} />
                <span id="dot0_4" className={this.props.onOff[0][4] ? "on" : ""} />
                <span id="dot0_5" className={this.props.onOff[0][5] ? "on" : ""} />
                <span id="dot0_6" className={this.props.onOff[0][6] ? "on" : ""} />
                <span id="dot0_7" className={this.props.onOff[0][7] ? "on" : ""} />
                <span id="dot0_8" className={this.props.onOff[0][8] ? "on" : ""} />
                <span id="dot0_9" className={this.props.onOff[0][9] ? "on" : ""} />
                <span id="dot0_10" className={this.props.onOff[0][10] ? "on" : ""} />
                <span id="dot0_11" className={this.props.onOff[0][11] ? "on" : ""} />
                <span id="dot0_12" className={this.props.onOff[0][12] ? "on" : ""} />
                <span id="dot0_13" className={this.props.onOff[0][13] ? "on" : ""} />
                <span id="dot0_14" className={this.props.onOff[0][14] ? "on" : ""} />
                <span id="dot0_15" className={this.props.onOff[0][15] ? "on" : ""} />
                <span id="dot1_0" className={this.props.onOff[1][0] ? "on" : ""} />
                <span id="dot1_1" className={this.props.onOff[1][1] ? "on" : ""} />
                <span id="dot1_2" className={this.props.onOff[1][2] ? "on" : ""} />
                <span id="dot1_3" className={this.props.onOff[1][3] ? "on" : ""} />
                <span id="dot1_4" className={this.props.onOff[1][4] ? "on" : ""} />
                <span id="dot1_5" className={this.props.onOff[1][5] ? "on" : ""} />
                <span id="dot1_6" className={this.props.onOff[1][6] ? "on" : ""} />
                <span id="dot1_7" className={this.props.onOff[1][7] ? "on" : ""} />
                <span id="dot1_8" className={this.props.onOff[1][8] ? "on" : ""} />
                <span id="dot1_9" className={this.props.onOff[1][9] ? "on" : ""} />
                <span id="dot1_10" className={this.props.onOff[1][10] ? "on" : ""} />
                <span id="dot1_11" className={this.props.onOff[1][11] ? "on" : ""} />
                <span id="dot1_12" className={this.props.onOff[1][12] ? "on" : ""} />
                <span id="dot1_13" className={this.props.onOff[1][13] ? "on" : ""} />
                <span id="dot1_14" className={this.props.onOff[1][14] ? "on" : ""} />
                <span id="dot1_15" className={this.props.onOff[1][15] ? "on" : ""} />
                <span id="dot2_0" className={this.props.onOff[2][0] ? "on" : ""} />
                <span id="dot2_1" className={this.props.onOff[2][1] ? "on" : ""} />
                <span id="dot2_2" className={this.props.onOff[2][2] ? "on" : ""} />
                <span id="dot2_3" className={this.props.onOff[2][3] ? "on" : ""} />
                <span id="dot2_4" className={this.props.onOff[2][4] ? "on" : ""} />
                <span id="dot2_5" className={this.props.onOff[2][5] ? "on" : ""} />
                <span id="dot2_6" className={this.props.onOff[2][6] ? "on" : ""} />
                <span id="dot2_7" className={this.props.onOff[2][7] ? "on" : ""} />
                <span id="dot2_8" className={this.props.onOff[2][8] ? "on" : ""} />
                <span id="dot2_9" className={this.props.onOff[2][9] ? "on" : ""} />
                <span id="dot2_10" className={this.props.onOff[2][10] ? "on" : ""} />
                <span id="dot2_11" className={this.props.onOff[2][11] ? "on" : ""} />
                <span id="dot2_12" className={this.props.onOff[2][12] ? "on" : ""} />
                <span id="dot2_13" className={this.props.onOff[2][13] ? "on" : ""} />
                <span id="dot2_14" className={this.props.onOff[2][14] ? "on" : ""} />
                <span id="dot2_15" className={this.props.onOff[2][15] ? "on" : ""} />
                <span id="dot3_0" className={this.props.onOff[3][0] ? "on" : ""} />
                <span id="dot3_1" className={this.props.onOff[3][1] ? "on" : ""} />
                <span id="dot3_2" className={this.props.onOff[3][2] ? "on" : ""} />
                <span id="dot3_3" className={this.props.onOff[3][3] ? "on" : ""} />
                <span id="dot3_4" className={this.props.onOff[3][4] ? "on" : ""} />
                <span id="dot3_5" className={this.props.onOff[3][5] ? "on" : ""} />
                <span id="dot3_6" className={this.props.onOff[3][6] ? "on" : ""} />
                <span id="dot3_7" className={this.props.onOff[3][7] ? "on" : ""} />
                <span id="dot3_8" className={this.props.onOff[3][8] ? "on" : ""} />
                <span id="dot3_9" className={this.props.onOff[3][9] ? "on" : ""} />
                <span id="dot3_10" className={this.props.onOff[3][10] ? "on" : ""} />
                <span id="dot3_11" className={this.props.onOff[3][11] ? "on" : ""} />
                <span id="dot3_12" className={this.props.onOff[3][12] ? "on" : ""} />
                <span id="dot3_13" className={this.props.onOff[3][13] ? "on" : ""} />
                <span id="dot3_14" className={this.props.onOff[3][14] ? "on" : ""} />
                <span id="dot3_15" className={this.props.onOff[3][15] ? "on" : ""} />
                <span id="dot4_0" className={this.props.onOff[4][0] ? "on" : ""} />
                <span id="dot4_1" className={this.props.onOff[4][1] ? "on" : ""} />
                <span id="dot4_2" className={this.props.onOff[4][2] ? "on" : ""} />
                <span id="dot4_3" className={this.props.onOff[4][3] ? "on" : ""} />
                <span id="dot4_4" className={this.props.onOff[4][4] ? "on" : ""} />
                <span id="dot4_5" className={this.props.onOff[4][5] ? "on" : ""} />
                <span id="dot4_6" className={this.props.onOff[4][6] ? "on" : ""} />
                <span id="dot4_7" className={this.props.onOff[4][7] ? "on" : ""} />
                <span id="dot4_8" className={this.props.onOff[4][8] ? "on" : ""} />
                <span id="dot4_9" className={this.props.onOff[4][9] ? "on" : ""} />
                <span id="dot4_10" className={this.props.onOff[4][10] ? "on" : ""} />
                <span id="dot4_11" className={this.props.onOff[4][11] ? "on" : ""} />
                <span id="dot4_12" className={this.props.onOff[4][12] ? "on" : ""} />
                <span id="dot4_13" className={this.props.onOff[4][13] ? "on" : ""} />
                <span id="dot4_14" className={this.props.onOff[4][14] ? "on" : ""} />
                <span id="dot4_15" className={this.props.onOff[4][15] ? "on" : ""} />
                <span id="dot5_0" className={this.props.onOff[5][0] ? "on" : ""} />
                <span id="dot5_1" className={this.props.onOff[5][1] ? "on" : ""} />
                <span id="dot5_2" className={this.props.onOff[5][2] ? "on" : ""} />
                <span id="dot5_3" className={this.props.onOff[5][3] ? "on" : ""} />
                <span id="dot5_4" className={this.props.onOff[5][4] ? "on" : ""} />
                <span id="dot5_5" className={this.props.onOff[5][5] ? "on" : ""} />
                <span id="dot5_6" className={this.props.onOff[5][6] ? "on" : ""} />
                <span id="dot5_7" className={this.props.onOff[5][7] ? "on" : ""} />
                <span id="dot5_8" className={this.props.onOff[5][8] ? "on" : ""} />
                <span id="dot5_9" className={this.props.onOff[5][9] ? "on" : ""} />
                <span id="dot5_10" className={this.props.onOff[5][10] ? "on" : ""} />
                <span id="dot5_11" className={this.props.onOff[5][11] ? "on" : ""} />
                <span id="dot5_12" className={this.props.onOff[5][12] ? "on" : ""} />
                <span id="dot5_13" className={this.props.onOff[5][13] ? "on" : ""} />
                <span id="dot5_14" className={this.props.onOff[5][14] ? "on" : ""} />
                <span id="dot5_15" className={this.props.onOff[5][15] ? "on" : ""} />
                <span id="dot6_0" className={this.props.onOff[6][0] ? "on" : ""} />
                <span id="dot6_1" className={this.props.onOff[6][1] ? "on" : ""} />
                <span id="dot6_2" className={this.props.onOff[6][2] ? "on" : ""} />
                <span id="dot6_3" className={this.props.onOff[6][3] ? "on" : ""} />
                <span id="dot6_4" className={this.props.onOff[6][4] ? "on" : ""} />
                <span id="dot6_5" className={this.props.onOff[6][5] ? "on" : ""} />
                <span id="dot6_6" className={this.props.onOff[6][6] ? "on" : ""} />
                <span id="dot6_7" className={this.props.onOff[6][7] ? "on" : ""} />
                <span id="dot6_8" className={this.props.onOff[6][8] ? "on" : ""} />
                <span id="dot6_9" className={this.props.onOff[6][9] ? "on" : ""} />
                <span id="dot6_10" className={this.props.onOff[6][10] ? "on" : ""} />
                <span id="dot6_11" className={this.props.onOff[6][11] ? "on" : ""} />
                <span id="dot6_12" className={this.props.onOff[6][12] ? "on" : ""} />
                <span id="dot6_13" className={this.props.onOff[6][13] ? "on" : ""} />
                <span id="dot6_14" className={this.props.onOff[6][14] ? "on" : ""} />
                <span id="dot6_15" className={this.props.onOff[6][15] ? "on" : ""} />
                <span id="dot7_0" className={this.props.onOff[7][0] ? "on" : ""} />
                <span id="dot7_1" className={this.props.onOff[7][1] ? "on" : ""} />
                <span id="dot7_2" className={this.props.onOff[7][2] ? "on" : ""} />
                <span id="dot7_3" className={this.props.onOff[7][3] ? "on" : ""} />
                <span id="dot7_4" className={this.props.onOff[7][4] ? "on" : ""} />
                <span id="dot7_5" className={this.props.onOff[7][5] ? "on" : ""} />
                <span id="dot7_6" className={this.props.onOff[7][6] ? "on" : ""} />
                <span id="dot7_7" className={this.props.onOff[7][7] ? "on" : ""} />
                <span id="dot7_8" className={this.props.onOff[7][8] ? "on" : ""} />
                <span id="dot7_9" className={this.props.onOff[7][9] ? "on" : ""} />
                <span id="dot7_10" className={this.props.onOff[7][10] ? "on" : ""} />
                <span id="dot7_11" className={this.props.onOff[7][11] ? "on" : ""} />
                <span id="dot7_12" className={this.props.onOff[7][12] ? "on" : ""} />
                <span id="dot7_13" className={this.props.onOff[7][13] ? "on" : ""} />
                <span id="dot7_14" className={this.props.onOff[7][14] ? "on" : ""} />
                <span id="dot7_15" className={this.props.onOff[7][15] ? "on" : ""} />
                <span id="dot8_0" className={this.props.onOff[8][0] ? "on" : ""} />
                <span id="dot8_1" className={this.props.onOff[8][1] ? "on" : ""} />
                <span id="dot8_2" className={this.props.onOff[8][2] ? "on" : ""} />
                <span id="dot8_3" className={this.props.onOff[8][3] ? "on" : ""} />
                <span id="dot8_4" className={this.props.onOff[8][4] ? "on" : ""} />
                <span id="dot8_5" className={this.props.onOff[8][5] ? "on" : ""} />
                <span id="dot8_6" className={this.props.onOff[8][6] ? "on" : ""} />
                <span id="dot8_7" className={this.props.onOff[8][7] ? "on" : ""} />
                <span id="dot8_8" className={this.props.onOff[8][8] ? "on" : ""} />
                <span id="dot8_9" className={this.props.onOff[8][9] ? "on" : ""} />
                <span id="dot8_10" className={this.props.onOff[8][10] ? "on" : ""} />
                <span id="dot8_11" className={this.props.onOff[8][11] ? "on" : ""} />
                <span id="dot8_12" className={this.props.onOff[8][12] ? "on" : ""} />
                <span id="dot8_13" className={this.props.onOff[8][13] ? "on" : ""} />
                <span id="dot8_14" className={this.props.onOff[8][14] ? "on" : ""} />
                <span id="dot8_15" className={this.props.onOff[8][15] ? "on" : ""} />
                <span id="dot9_0" className={this.props.onOff[9][0] ? "on" : ""} />
                <span id="dot9_1" className={this.props.onOff[9][1] ? "on" : ""} />
                <span id="dot9_2" className={this.props.onOff[9][2] ? "on" : ""} />
                <span id="dot9_3" className={this.props.onOff[9][3] ? "on" : ""} />
                <span id="dot9_4" className={this.props.onOff[9][4] ? "on" : ""} />
                <span id="dot9_5" className={this.props.onOff[9][5] ? "on" : ""} />
                <span id="dot9_6" className={this.props.onOff[9][6] ? "on" : ""} />
                <span id="dot9_7" className={this.props.onOff[9][7] ? "on" : ""} />
                <span id="dot9_8" className={this.props.onOff[9][8] ? "on" : ""} />
                <span id="dot9_9" className={this.props.onOff[9][9] ? "on" : ""} />
                <span id="dot9_10" className={this.props.onOff[9][10] ? "on" : ""} />
                <span id="dot9_11" className={this.props.onOff[9][11] ? "on" : ""} />
                <span id="dot9_12" className={this.props.onOff[9][12] ? "on" : ""} />
                <span id="dot9_13" className={this.props.onOff[9][13] ? "on" : ""} />
                <span id="dot9_14" className={this.props.onOff[9][14] ? "on" : ""} />
                <span id="dot9_15" className={this.props.onOff[9][15] ? "on" : ""} />
                <span id="dot10_0" className={this.props.onOff[10][0] ? "on" : ""} />
                <span id="dot10_1" className={this.props.onOff[10][1] ? "on" : ""} />
                <span id="dot10_2" className={this.props.onOff[10][2] ? "on" : ""} />
                <span id="dot10_3" className={this.props.onOff[10][3] ? "on" : ""} />
                <span id="dot10_4" className={this.props.onOff[10][4] ? "on" : ""} />
                <span id="dot10_5" className={this.props.onOff[10][5] ? "on" : ""} />
                <span id="dot10_6" className={this.props.onOff[10][6] ? "on" : ""} />
                <span id="dot10_7" className={this.props.onOff[10][7] ? "on" : ""} />
                <span id="dot10_8" className={this.props.onOff[10][8] ? "on" : ""} />
                <span id="dot10_9" className={this.props.onOff[10][9] ? "on" : ""} />
                <span id="dot10_10" className={this.props.onOff[10][10] ? "on" : ""} />
                <span id="dot10_11" className={this.props.onOff[10][11] ? "on" : ""} />
                <span id="dot10_12" className={this.props.onOff[10][12] ? "on" : ""} />
                <span id="dot10_13" className={this.props.onOff[10][13] ? "on" : ""} />
                <span id="dot10_14" className={this.props.onOff[10][14] ? "on" : ""} />
                <span id="dot10_15" className={this.props.onOff[10][15] ? "on" : ""} />
                <span id="dot11_0" className={this.props.onOff[11][0] ? "on" : ""} />
                <span id="dot11_1" className={this.props.onOff[11][1] ? "on" : ""} />
                <span id="dot11_2" className={this.props.onOff[11][2] ? "on" : ""} />
                <span id="dot11_3" className={this.props.onOff[11][3] ? "on" : ""} />
                <span id="dot11_4" className={this.props.onOff[11][4] ? "on" : ""} />
                <span id="dot11_5" className={this.props.onOff[11][5] ? "on" : ""} />
                <span id="dot11_6" className={this.props.onOff[11][6] ? "on" : ""} />
                <span id="dot11_7" className={this.props.onOff[11][7] ? "on" : ""} />
                <span id="dot11_8" className={this.props.onOff[11][8] ? "on" : ""} />
                <span id="dot11_9" className={this.props.onOff[11][9] ? "on" : ""} />
                <span id="dot11_10" className={this.props.onOff[11][10] ? "on" : ""} />
                <span id="dot11_11" className={this.props.onOff[11][11] ? "on" : ""} />
                <span id="dot11_12" className={this.props.onOff[11][12] ? "on" : ""} />
                <span id="dot11_13" className={this.props.onOff[11][13] ? "on" : ""} />
                <span id="dot11_14" className={this.props.onOff[11][14] ? "on" : ""} />
                <span id="dot11_15" className={this.props.onOff[11][15] ? "on" : ""} />
                <span id="dot12_0" className={this.props.onOff[12][0] ? "on" : ""} />
                <span id="dot12_1" className={this.props.onOff[12][1] ? "on" : ""} />
                <span id="dot12_2" className={this.props.onOff[12][2] ? "on" : ""} />
                <span id="dot12_3" className={this.props.onOff[12][3] ? "on" : ""} />
                <span id="dot12_4" className={this.props.onOff[12][4] ? "on" : ""} />
                <span id="dot12_5" className={this.props.onOff[12][5] ? "on" : ""} />
                <span id="dot12_6" className={this.props.onOff[12][6] ? "on" : ""} />
                <span id="dot12_7" className={this.props.onOff[12][7] ? "on" : ""} />
                <span id="dot12_8" className={this.props.onOff[12][8] ? "on" : ""} />
                <span id="dot12_9" className={this.props.onOff[12][9] ? "on" : ""} />
                <span id="dot12_10" className={this.props.onOff[12][10] ? "on" : ""} />
                <span id="dot12_11" className={this.props.onOff[12][11] ? "on" : ""} />
                <span id="dot12_12" className={this.props.onOff[12][12] ? "on" : ""} />
                <span id="dot12_13" className={this.props.onOff[12][13] ? "on" : ""} />
                <span id="dot12_14" className={this.props.onOff[12][14] ? "on" : ""} />
                <span id="dot12_15" className={this.props.onOff[12][15] ? "on" : ""} />
                <span id="dot13_0" className={this.props.onOff[13][0] ? "on" : ""} />
                <span id="dot13_1" className={this.props.onOff[13][1] ? "on" : ""} />
                <span id="dot13_2" className={this.props.onOff[13][2] ? "on" : ""} />
                <span id="dot13_3" className={this.props.onOff[13][3] ? "on" : ""} />
                <span id="dot13_4" className={this.props.onOff[13][4] ? "on" : ""} />
                <span id="dot13_5" className={this.props.onOff[13][5] ? "on" : ""} />
                <span id="dot13_6" className={this.props.onOff[13][6] ? "on" : ""} />
                <span id="dot13_7" className={this.props.onOff[13][7] ? "on" : ""} />
                <span id="dot13_8" className={this.props.onOff[13][8] ? "on" : ""} />
                <span id="dot13_9" className={this.props.onOff[13][9] ? "on" : ""} />
                <span id="dot13_10" className={this.props.onOff[13][10] ? "on" : ""} />
                <span id="dot13_11" className={this.props.onOff[13][11] ? "on" : ""} />
                <span id="dot13_12" className={this.props.onOff[13][12] ? "on" : ""} />
                <span id="dot13_13" className={this.props.onOff[13][13] ? "on" : ""} />
                <span id="dot13_14" className={this.props.onOff[13][14] ? "on" : ""} />
                <span id="dot13_15" className={this.props.onOff[13][15] ? "on" : ""} />
                <span id="dot14_0" className={this.props.onOff[14][0] ? "on" : ""} />
                <span id="dot14_1" className={this.props.onOff[14][1] ? "on" : ""} />
                <span id="dot14_2" className={this.props.onOff[14][2] ? "on" : ""} />
                <span id="dot14_3" className={this.props.onOff[14][3] ? "on" : ""} />
                <span id="dot14_4" className={this.props.onOff[14][4] ? "on" : ""} />
                <span id="dot14_5" className={this.props.onOff[14][5] ? "on" : ""} />
                <span id="dot14_6" className={this.props.onOff[14][6] ? "on" : ""} />
                <span id="dot14_7" className={this.props.onOff[14][7] ? "on" : ""} />
                <span id="dot14_8" className={this.props.onOff[14][8] ? "on" : ""} />
                <span id="dot14_9" className={this.props.onOff[14][9] ? "on" : ""} />
                <span id="dot14_10" className={this.props.onOff[14][10] ? "on" : ""} />
                <span id="dot14_11" className={this.props.onOff[14][11] ? "on" : ""} />
                <span id="dot14_12" className={this.props.onOff[14][12] ? "on" : ""} />
                <span id="dot14_13" className={this.props.onOff[14][13] ? "on" : ""} />
                <span id="dot14_14" className={this.props.onOff[14][14] ? "on" : ""} />
                <span id="dot14_15" className={this.props.onOff[14][15] ? "on" : ""} />
                <span id="dot15_0" className={this.props.onOff[15][0] ? "on" : ""} />
                <span id="dot15_1" className={this.props.onOff[15][1] ? "on" : ""} />
                <span id="dot15_2" className={this.props.onOff[15][2] ? "on" : ""} />
                <span id="dot15_3" className={this.props.onOff[15][3] ? "on" : ""} />
                <span id="dot15_4" className={this.props.onOff[15][4] ? "on" : ""} />
                <span id="dot15_5" className={this.props.onOff[15][5] ? "on" : ""} />
                <span id="dot15_6" className={this.props.onOff[15][6] ? "on" : ""} />
                <span id="dot15_7" className={this.props.onOff[15][7] ? "on" : ""} />
                <span id="dot15_8" className={this.props.onOff[15][8] ? "on" : ""} />
                <span id="dot15_9" className={this.props.onOff[15][9] ? "on" : ""} />
                <span id="dot15_10" className={this.props.onOff[15][10] ? "on" : ""} />
                <span id="dot15_11" className={this.props.onOff[15][11] ? "on" : ""} />
                <span id="dot15_12" className={this.props.onOff[15][12] ? "on" : ""} />
                <span id="dot15_13" className={this.props.onOff[15][13] ? "on" : ""} />
                <span id="dot15_14" className={this.props.onOff[15][14] ? "on" : ""} />
                <span id="dot15_15" className={this.props.onOff[15][15] ? "on" : ""} />
            </div>
        );
    }
}