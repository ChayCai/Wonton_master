import React, { Component } from 'react';
import { Button } from 'reactstrap'
import './RotaryButton.css';

export class RotaryButtonCore extends Component {

    static defaultProps = {
        name: "旋钮",
        ClassName: "RotaryButton",
        size: [3, 6, 3, 6]
    }

    render() {
        return (
            <div>
                <Button id="display" disabled>{this.props.value}</Button>
                <Button id="button1" onClick={() => { this.props.onCheckClick("+") }}>+</Button>
                <Button id="button2" onClick={() => { this.props.onCheckClick("-") }}>-</Button>
            </div>
        );
    }
}
