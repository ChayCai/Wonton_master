import React, { Component } from 'react';
import { manager } from '../../Service/FPGAManager';
import { LEDMatrix16t16Core } from './LEDMatrix16t16Core';


export class LEDMatrix16t16 extends Component {
    
    static defaultProps = {
        name: 'LED阵列16x16',
        input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        ports: ['行[0]', '行[1]', '行[2]', '行[3]', '行[4]', '行[5]', '行[6]', '行[7]', '行[8]', '行[9]', '行[10]', '行[11]', '行[12]', '行[13]', '行[14]', '行[15]', '列[0]', '列[1]', '列[2]', '列[3]', '列[4]', '列[5]', '列[6]', '列[7]', '列[8]', '列[9]', '列[10]', '列[11]', '列[12]', '列[13]', '列[14]', '列[15]'],
        portsDirs: ['输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入']
    }

    state = {
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
        ],
        onffDeltaTime: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    } 
    // 视觉暂留现象约0.4s

    componentDidMount() {
        let ins = this.props.instance;

        let that = this;

        manager.Subscribe(ins, this.props.ports, (inputs, deltaTime) => {
            let l_onOff = [
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
    
            let row_sel = inputs.slice(0, 16)
            let col_sel = inputs.slice(16, 32)
    
            for (let r = 0; r < row_sel.length; r++) {
                const ele = row_sel[r];
                if(ele ===  1) {
                    let new_row = col_sel.map(val => val === 1 ? true : false)
                    //let old_row = that.state.onOff[r]
                    l_onOff[r] = new_row
                }
                else {
                    let new_row = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
                    l_onOff[r] = new_row
                }
            }

            that.setState({
                onOff: l_onOff
            });
        });

        let length = this.state.onOff.map(v => v.length).reduce((prev, curr) => prev + curr);
        manager.RegisterProjectPorts(this.props.instance, length);
    }

    componentWillUnmount() {
        manager.UnSubscribe(this.props.instance);
        manager.UnRegisterProjectPorts(this.props.instance);
    }

    render() {
        return (      
            <LEDMatrix16t16Core onOff={this.state.onOff}/>
        );
    }
}