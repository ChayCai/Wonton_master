import React, { Component } from 'react';

import "./LEDText.css"

export class LEDTextCore extends Component {
    static defaultProps = {
        name: "LED文字显示",
        ClassName: "LEDText",
        size: [18, 6, 18, 6],
        data: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    render() {
        return (
            <div className="LEDText">
                <div id="panel" />
                <span id="char0_0" > {String.fromCharCode(this.props.data[0][0])} </span>
                <span id="char0_1" > {String.fromCharCode(this.props.data[0][1])} </span>
                <span id="char0_2" > {String.fromCharCode(this.props.data[0][2])} </span>
                <span id="char0_3" > {String.fromCharCode(this.props.data[0][3])} </span>
                <span id="char0_4" > {String.fromCharCode(this.props.data[0][4])} </span>
                <span id="char0_5" > {String.fromCharCode(this.props.data[0][5])} </span>
                <span id="char0_6" > {String.fromCharCode(this.props.data[0][6])} </span>
                <span id="char0_7" > {String.fromCharCode(this.props.data[0][7])} </span>
                <span id="char0_8" > {String.fromCharCode(this.props.data[0][8])} </span>
                <span id="char0_9" > {String.fromCharCode(this.props.data[0][9])} </span>
                <span id="char0_10" > {String.fromCharCode(this.props.data[0][10])} </span>
                <span id="char0_11" > {String.fromCharCode(this.props.data[0][11])} </span>
                <span id="char0_12" > {String.fromCharCode(this.props.data[0][12])} </span>
                <span id="char0_13" > {String.fromCharCode(this.props.data[0][13])} </span>
                <span id="char0_14" > {String.fromCharCode(this.props.data[0][14])} </span>
                <span id="char0_15" > {String.fromCharCode(this.props.data[0][15])} </span>
                <span id="char1_0" > {String.fromCharCode(this.props.data[1][0])} </span>
                <span id="char1_1" > {String.fromCharCode(this.props.data[1][1])} </span>
                <span id="char1_2" > {String.fromCharCode(this.props.data[1][2])} </span>
                <span id="char1_3" > {String.fromCharCode(this.props.data[1][3])} </span>
                <span id="char1_4" > {String.fromCharCode(this.props.data[1][4])} </span>
                <span id="char1_5" > {String.fromCharCode(this.props.data[1][5])} </span>
                <span id="char1_6" > {String.fromCharCode(this.props.data[1][6])} </span>
                <span id="char1_7" > {String.fromCharCode(this.props.data[1][7])} </span>
                <span id="char1_8" > {String.fromCharCode(this.props.data[1][8])} </span>
                <span id="char1_9" > {String.fromCharCode(this.props.data[1][9])} </span>
                <span id="char1_10" > {String.fromCharCode(this.props.data[1][10])} </span>
                <span id="char1_11" > {String.fromCharCode(this.props.data[1][11])} </span>
                <span id="char1_12" > {String.fromCharCode(this.props.data[1][12])} </span>
                <span id="char1_13" > {String.fromCharCode(this.props.data[1][13])} </span>
                <span id="char1_14" > {String.fromCharCode(this.props.data[1][14])} </span>
                <span id="char1_15" > {String.fromCharCode(this.props.data[1][15])} </span>
            </div>
        );
    }
}
