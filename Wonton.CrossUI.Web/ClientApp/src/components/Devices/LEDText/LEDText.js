import React, { Component } from 'react';
import { manager } from '../../Service/FPGAManager';
import { LEDTextCore } from './LEDTextCore';

export class LEDText extends Component {
    static defaultProps = {
        name: 'LED文字显示',
        input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ports: ['DB0', 'DB1', 'DB2', 'DB3', 'DB4', 'DB5', 'DB6', 'DB7', 'RS', 'RW', 'EN', 'RST'],
        portsDirs: ['输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入']
    }

    state = {
        addr: 0,
        data: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        en: 0
    }

    componentDidMount() {
        let ins = this.props.instance;
        let that = this;

        manager.Subscribe(ins, this.props.ports, (inputs) => {
            let n_db = inputs.slice(0, 8).reverse().reduce((prev, curr) => prev * 2 + curr);
            let n_rs = inputs[8];
            let n_rw = inputs[9];
            let n_en = inputs[10];
            let n_rst = inputs[11];

            console.log("now data: " + n_db);
            console.log("now en: " + n_en);
            console.log("now rst: " + n_rst);

            let t_addr = 0;
            let t_data = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];

            let l_addr = this.state.addr;
            let l_data = this.state.data;
            let l_en = this.state.en;

            console.log("last addr: " + l_addr);
            console.log("last en: " + l_en);
            console.log("last data: " + l_data);

            if (n_rst) {
                that.setState({
                    addr: t_addr,
                    data: t_data,
                    en: n_en
                });
            }
            else {
                if (l_en === 1) {
                    t_data = l_data;
                    t_data[Math.floor(l_addr / 16)][l_addr % 16] = n_db;
                    console.log("temp data: " + t_data);
                    that.setState({
                        data: t_data
                    });
                }
                if (l_en === 1 && n_en === 0) {
                    t_addr = l_addr + 1;
                    if (t_addr === 32) t_addr = 0;
                    console.log("temp addr: " + t_addr);
                    that.setState({
                        addr: t_addr
                    });
                }
            }
            that.setState({
                en: n_en
            });
        });
        manager.RegisterProjectPorts(this.props.instance, this.props.input.length);
    }

    componentWillUnmount() {
        manager.UnSubscribe(this.props.instance);
        manager.UnRegisterProjectPorts(this.props.instance);
    }

    render() {
        return (
            <LEDTextCore data={this.state.data}/>
        );
    }
}
