import React, { Component } from 'react';
import { manager } from '../../Service/FPGAManager';
import { RotaryButtonCore } from './RotaryButtonCore'

import './RotaryButton.css'


export class RotaryButton extends Component {

    outputPorts = ['RPB1', 'RPB2', 'RPB3', 'RPB4', 'RPB5', 'RPB6', 'RPB7', 'RPB8', 'RPB9', 'RPBA', 'RPBB'];

    static defaultProps = {
        name: '旋钮',
        ports: ['RPB1', 'RPB2', 'RPB3', 'RPB4', 'RPB5', 'RPB6', 'RPB7', 'RPB8', 'RPB9', 'RPBA', 'RPBB'],
        portsDirs: ['输出', '输出', '输出', '输出', '输出', '输出', '输出', '输出', '输出', '输出', '输出']
    }

    state = {
        outputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        value: 0,
    }

    componentDidMount() {
        manager.Register(this.props.instance, this.state.outputs.length);
        manager.RegisterProjectPorts(this.props.instance, this.state.outputs.length);
    }

    componentWillUnmount() {
        manager.UnRegister(this.props.instance);
        manager.UnRegisterProjectPorts(this.props.instance);
    }

    handleClick = (str) => {
        let next_value = 0;
        let next_output = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if (str === "+" && this.state.value !== 11) {
            next_value = this.state.value + 1;
        }
        else if (str === "-" && this.state.value !== 0) {
            next_value = this.state.value - 1;
        }
        else {
            next_value = this.state.value;
        }
        switch (next_value) {
            case 0:  next_output = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; break;
            case 1:  next_output = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; break;
            case 2:  next_output = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]; break;
            case 3:  next_output = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]; break;
            case 4:  next_output = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]; break;
            case 5:  next_output = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]; break;
            case 6:  next_output = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]; break;
            case 7:  next_output = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]; break;
            case 8:  next_output = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]; break;
            case 9:  next_output = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]; break;
            case 10: next_output = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]; break;
            case 11: next_output = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]; break;
        }
        this.setState((state) => {
            return { value: next_value }
        });
        console.log("Button click " + this.props.instance + ": " + next_output)
        manager.UpdateInput(this.props.instance, next_output);

    }

    render() {
        return (
            <RotaryButtonCore value={this.state.value} onCheckClick={this.handleClick} />
        );
    }
}