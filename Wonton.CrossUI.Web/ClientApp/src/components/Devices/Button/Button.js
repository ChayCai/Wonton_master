import React, { Component } from 'react';
import { manager } from '../../Service/FPGAManager';
import { ButtonCore } from './ButtonCore'

import './Button.css'

export class Button extends Component {
    
    outputPorts = ['输出1']

    static defaultProps = {
        name: '按钮',
        ports: ['输出1'],
        portsDirs: ['输出']
    }

    state = {
        outputs: [0]
    }

    componentDidMount() {
        manager.Register(this.props.instance, this.state.outputs.length);
        manager.RegisterProjectPorts(this.props.instance, this.state.outputs.length);
    }

    componentWillUnmount() {
        manager.UnRegister(this.props.instance);
        manager.UnRegisterProjectPorts(this.props.instance);
    }

    MouseDown = (event) => {
        this.setState((prevState) => {
            let nextOutput = 1 - prevState.outputs[0];
            console.log("Button click " + this.props.instance + ": " + nextOutput)
            return {
                outputs: [nextOutput],
            }
        });
        console.log("Mouse Down Detected");
        console.log(this.state.outputs[0]);

        manager.UpdateInput(this.props.instance, [1 - this.state.outputs[0]]);
    }

    MouseUp = (event) => {
        this.setState((prevState) => {
            let nextOutput = 1 - prevState.outputs[0];
            console.log("Button click " + this.props.instance + ": " + nextOutput)
            return {
                outputs: [nextOutput],
            }
        });
        console.log("Mouse Up Detected");
        console.log(this.state.outputs[0]);

        manager.UpdateInput(this.props.instance, [1 - this.state.outputs[0]]);
    }

    render() {
        return (
            <ButtonCore onDown={this.MouseDown} onUp={this.MouseUp} active={this.state.outputs[0] === 1} />
        );
    }
}