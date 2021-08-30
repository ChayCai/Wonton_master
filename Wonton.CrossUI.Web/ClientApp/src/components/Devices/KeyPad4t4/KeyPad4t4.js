import React, { Component } from 'react';
import { manager } from '../../Service/FPGAManager';
import { KeyPad4t4Core } from './KeyPad4t4Core'

import './KeyPad4t4.css'

export class KeyPad4t4 extends Component {

    outputPorts = ['行[0]', '行[1]', '行[2]', '行[3]', '列[0]', '列[1]', '列[2]', '列[3]']

    static defaultProps = {
        name: '4x4键盘',
        ports: ['行[0]', '行[1]', '行[2]', '行[3]', '列[0]', '列[1]', '列[2]', '列[3]'],
        portsDirs: ['输出', '输出', '输出', '输出', '输出', '输出', '输出', '输出']
    }

    state = {
        outputs: [0,0,0,0,0,0,0,0],
    }

    componentDidMount() {
        manager.Register(this.props.instance, this.state.outputs.length);
        manager.RegisterProjectPorts(this.props.instance, this.state.outputs.length);
    }

    componentWillUnmount() {
        manager.UnRegister(this.props.instance);
        manager.UnRegisterProjectPorts(this.props.instance);
    }

    handleMouseDown = (keynum) => {
        let keys = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        keys[keynum] = 1;
        let outputs_row0 = keys[0] || keys[1] || keys[2] || keys[3] ? 1 : 0;
        let outputs_row1 = keys[4] || keys[5] || keys[6] || keys[7] ? 1 : 0;
        let outputs_row2 = keys[8] || keys[9] || keys[10] || keys[11] ? 1 : 0;
        let outputs_row3 = keys[12] || keys[13] || keys[14] || keys[15] ? 1 : 0;
        let outputs_col0 = keys[0] || keys[4] || keys[8] || keys[12] ? 1 : 0;
        let outputs_col1 = keys[1] || keys[5] || keys[9] || keys[13] ? 1 : 0;
        let outputs_col2 = keys[2] || keys[6] || keys[10] || keys[14] ? 1 : 0;
        let outputs_col3 = keys[3] || keys[7] || keys[11] || keys[15] ? 1 : 0;

        let next_output = [outputs_row0, outputs_row1, outputs_row2, outputs_row3, outputs_col0, outputs_col1, outputs_col2, outputs_col3];

        console.log("Mouse Down " + this.props.instance + ": " + next_output)

        this.setState((state) => {
            return { outputs: next_output }
        });

        manager.UpdateInput(this.props.instance, next_output);

    }

    handleMouseUp = (keynum) => {
        let next_output = [0, 0, 0, 0, 0, 0, 0, 0]
        this.setState((state) => {
            return { outputs:  next_output}
        });

        manager.UpdateInput(this.props.instance, next_output);

    }

    render() {
        return (
            <KeyPad4t4Core active={this.state.keypressed} onCheckMouseDown={this.handleMouseDown} onCheckMouseUp={this.handleMouseUp}/>
        );
    }
}