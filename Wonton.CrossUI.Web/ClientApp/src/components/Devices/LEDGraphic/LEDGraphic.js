import React, { Component } from 'react';
import { manager } from '../../Service/FPGAManager';
import { LEDGraphicCore } from './LEDGraphicCore';

import "./LEDGraphic.css"


export class LEDGraphic extends Component {

    static defaultProps = {
        name: 'LED图像显示',
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        ports: ['DB0', 'DB1', 'DB2', 'DB3', 'DB4', 'DB5', 'DB6', 'DB7', 'D/I', 'R/W', 'EN', 'CS1', 'CS2', 'RST'],
        portsDirs: ['输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入', '输入']
    }

    state = {
        mem: new Array(64).fill(0),
        onoff: new Array(16).fill(new Array(64).fill(0)),
        cur_page: 0,
        cur_address: 0,
        start_address: 0,
    }

    componentDidMount() {
        let ins = this.props.instance;
        let that = this;

        manager.Subscribe(ins, this.props.ports, (inputs) => {
            let db = inputs.slice(0, 8).reverse();
            let di = inputs[8];
            let rw = inputs[9];
            let cs1 = inputs[11];
            let cs2 = inputs[12];
            let rst = inputs[13];

            let do_nothing = true;

            if (rst) {
                console.log("rst| clear all");
                do_nothing = false;
                that.setState({
                    mem: new Array(64).fill(0),
                    onoff: new Array(16).fill(0).map(v => new Array(64).fill(0)),
                    cur_page: 0,
                    cur_address: 0,
                    start_address: 0,
                });
            }
            else {
                if (rw === 0) {
                    let cur_lr = 2;
                    if (cs1 === 1 && cs2 === 0) {
                        cur_lr = 0;
                    }
                    if (cs1 === 0 && cs2 === 1) {
                        cur_lr = 1;
                    }
                    if (di === 0) {
                        if (db[0] === 0 && db[1] === 0 && db[2] === 1 && db[3] === 1 && db[4] === 1 && db[5] === 1 && db[6] === 1) {
                            let tmp_onoff = this.state.onoff;
                            if (cur_lr != 2) {
                                do_nothing = false;
                                let cur_x = cur_lr * 8 + this.state.cur_page;
                                let cur_y = this.state.start_address;
                                if (db[7] === 0) {
                                    console.log("command| set on page:" + (cur_lr === 0 ? "L:" : "R:") + this.state.cur_page + ".cur mem and onoff are show below");
                                    for (let y = 0; y < 64; y++) {
                                        tmp_onoff[cur_x][(y + cur_y) % 64] = this.state.mem[y];
                                    }
                                    console.log(this.state.mem);
                                    console.log(this.state.onoff);
                                }
                                else {
                                    console.log("command| set off page:" + (cur_lr === 0 ? "L:" : "R:") + this.state.cur_page);
                                    tmp_onoff[cur_x] = new Array(64).fill(0);
                                }
                                that.setState({
                                    onoff: tmp_onoff,
                                })
                            }
                        }
                        else if (db[0] === 1 && db[1] === 1) {
                            let start_addres = db[2] * 32 + db[3] * 16 + db[4] * 8 + db[5] * 4 + db[6] * 2 + db[7];
                            console.log("command| set start address:" + start_addres);
                            do_nothing = false;
                            that.setState({
                                start_address: start_addres,
                            })
                        }
                        else if (db[0] === 1 && db[1] === 0 && db[2] === 1 && db[3] === 1 && db[4] === 1) {
                            let cur_page = db[5] * 4 + db[6] * 2 + db[7];
                            console.log("command| set page:" + cur_page);
                            do_nothing = false;
                            that.setState({
                                cur_page: cur_page,
                            })
                        }
                        else if (db[0] === 0 && db[1] === 1) {
                            let cur_address = db[2] * 32 + db[3] * 16 + db[4] * 8 + db[5] * 4 + db[6] * 2 + db[7];
                            console.log("command| set y address:" + cur_address);
                            do_nothing = false;
                            that.setState({
                                cur_address: cur_address,
                            })
                        }
                    }
                    else {
                        console.log("write| " + db + " to mem address:" + this.state.cur_address);
                        do_nothing = false;
                        let n_address = (this.state.cur_address >= 63 ? 0 : this.state.cur_address + 1);
                        let tmp_mem = this.state.mem;
                        tmp_mem[this.state.cur_address] = db[0] * 128 + db[1] * 64 + db[2] * 32 + db[3] * 16 + db[4] * 8 + db[5] * 4 + db[6] * 2 + db[7];
                        
                        that.setState({
                            cur_address: n_address,
                            mem: tmp_mem,
                        })
                    }
                }
            }
            if (do_nothing) {
                console.log("do nothing|");
            }
            
        });

        manager.RegisterProjectPorts(this.props.instance, this.props.input.length);
    }

    componentWillUnmount() {
        manager.UnSubscribe(this.props.instance);
        manager.UnRegisterProjectPorts(this.props.instance);
    }

    render() {
        return (
            <LEDGraphicCore onoff={this.state.onoff}></LEDGraphicCore>
        );

    }
}

