import React, { Component } from 'react';
import { manager } from '../../Service/FPGAManager';
import { ROMCore } from './ROMCore'

import './ROM.css'
import { result } from 'lodash';

export class ROM extends Component {

    constructor(props) {
        super(props);
        this.state = {
            outputs: [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
            ],
            curoutput: "0".repeat(32),
        }
    }
    outputPorts = [
        '输出0', '输出1', '输出2', '输出3', '输出4', '输出5', '输出6', '输出7',
        '输出8', '输出9', '输出10', '输出11', '输出12', '输出13', '输出14', '输出15',
        '输出16', '输出17', '输出18', '输出19', '输出20', '输出21', '输出22' , '输出23' ,
        '输出24' , '输出25' , '输出26' , '输出27' , '输出28' , '输出29' , '输出30' , '输出31' ,
         ]

    static defaultProps = {
        name: 'ROM',
        ports: [
            '输出0', '输出1', '输出2', '输出3', '输出4', '输出5', '输出6', '输出7',
            '输出8', '输出9', '输出10', '输出11', '输出12', '输出13', '输出14', '输出15',
            '输出16', '输出17', '输出18', '输出19', '输出20', '输出21', '输出22', '输出23',
            '输出24', '输出25', '输出26', '输出27', '输出28', '输出29', '输出30', '输出31',
            ],
        portsDirs: [
            '输出', '输出', '输出', '输出', '输出', '输出', '输出', '输出',
            '输出', '输出', '输出', '输出', '输出', '输出', '输出', '输出',
            '输出', '输出', '输出', '输出', '输出', '输出', '输出', '输出',
            '输出', '输出', '输出', '输出', '输出', '输出', '输出', '输出',
        ]
    }

    componentDidMount() {
        manager.Register(this.props.instance, this.state.outputs.length);
        manager.RegisterProjectPorts(this.props.instance, this.state.outputs.length);
    }

    componentWillUnmount() {
        manager.UnRegister(this.props.instance);
        manager.UnRegisterProjectPorts(this.props.instance);
    }

    setcuroutput = (result_data) => {
        this.setState({
            curoutput: result_data,
        })
        let next_output=result_data.split('').map((item) => {
            return parseInt(item);
        })
        manager.UpdateInput(this.props.instance, next_output);
        console.log("Rom data: " + this.props.instance + ": " + next_output)
    }

    render() {
        return (
            <ROMCore curoutput={this.state.curoutput} setcuroutput={this.setcuroutput} />
        );
    }
}