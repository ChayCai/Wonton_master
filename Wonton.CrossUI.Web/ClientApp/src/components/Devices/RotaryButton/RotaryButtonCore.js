import React, { Component } from 'react';
import { Button } from 'reactstrap'
import './RotaryButton.css';

export class RotaryButtonCore extends Component {

    static defaultProps = {
        name: "旋钮",
        ClassName: "RotaryButton"
    }

    render() {
        return (
            <div>
                <Button id="display" color="primary" disabled>{this.props.value}</Button>
                <Button id="button1" onClick={() => { this.props.onCheckClick("+") }}>+</Button>
                <Button id="button2" onClick={() => { this.props.onCheckClick("-") }}>-</Button>
            </div>
        );
    }
}
