import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import './ROM.css';

export class ROMCore extends Component {

    constructor(props) {
        super(props);
        this.handlesetupsubmit = this. handlesetupsubmit.bind(this);
        this.state = {
            setupdrop: false,
        }
    }

    static defaultProps = {
        name: "ROM",
        ClassName: "ROM",
        size: [3, 3, 3, 3]
    }

    handleClicksetupdrop = () => {
        this.setState({
            setupdrop: !this.state.setupdrop,
        })
    }

    handlesetupsubmit = (event) => {
        let reader = new FileReader();
        reader.readAsText(event.target.files[0]);
        reader.onload = () => {
            let origin_data = reader.result;
            let result_data = handletxt(origin_data);
            this.props.setcuroutput(result_data);
        }
    }

    display = (result_data) => {
        let len_space = "   ";
        return result_data.slice(0,4) + len_space + result_data.slice(4,8) + len_space + result_data.slice(8,12) + len_space + result_data.slice(12,16);
    }

    render() {
        return (
            <div>
                <Button id="setupbutton" onClick={this.handleClicksetupdrop}>setup</Button>
                <Modal isOpen={this.state.setupdrop}>
                    <ModalHeader>setup</ModalHeader>
                    <ModalBody>
                        <form>
                            <input type="file" accept="text/plain" onChange={this.handlesetupsubmit} />
                            <br /><br />
                            <Button disabled id="display_output">{this.display(this.props.curoutput.slice(0,16))}</Button>
                            <br /><br />
                            <Button disabled id="display_output">{this.display(this.props.curoutput.slice(16,32))}</Button>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                         <Button color="info" onClick={this.handleClicksetupdrop}>确认</Button>
                    </ModalFooter>
                </Modal>
            </div>
                    );
                    }
}

function handletxt(origin_data) {
    let temp_data = origin_data.replace(/\s/g, "");
    if (temp_data[0] === "'") {
        if (!((temp_data[1] === "b") || (temp_data[1] === "d") || (temp_data[1] === "h"))) {
            return "请输入正确的格式:第二位用 b/d/h 表示进制";
        }
        else {
            let temp_num_data = temp_data.slice(2);
            if (!(/^\d+$/.test(temp_num_data))) {
                return "请输入正确的格式:除前两位外只允许输入数字";
            }
            else {
                switch (temp_data[1]) {
                    case "b": {
                        temp_num_data = temp_num_data;
                        break;
                    }
                    case "d": {
                        temp_num_data = parseInt(temp_num_data).toString(2);
                        break;
                    }
                    case "h": {
                        temp_num_data = hex_to_bin(temp_num_data);
                        break;
                    }
                }
                let data_length = temp_num_data.length;
                if (data_length > 32) {
                    return "请输入正确的格式:数据不超过32位2进制数";
                }
                else {
                    return "0".repeat(32 - data_length) + temp_num_data;
                }
            }
        }
    }
    else {
        return "请输入正确的格式:以 ' 开头";
    }
}


function hex_to_bin(str) {
    let hex_array = [{ key: 0, val: "0000" }, { key: 1, val: "0001" }, { key: 2, val: "0010" }, { key: 3, val: "0011" }, { key: 4, val: "0100" }, { key: 5, val: "0101" }, { key: 6, val: "0110" }, { key: 7, val: "0111" },
    { key: 8, val: "1000" }, { key: 9, val: "1001" }, { key: 'a', val: "1010" }, { key: 'b', val: "1011" }, { key: 'c', val: "1100" }, { key: 'd', val: "1101" }, { key: 'e', val: "1110" }, { key: 'f', val: "1111" }]

    let value = ""
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < hex_array.length; j++) {
            if (str.charAt(i).toLowerCase() == hex_array[j].key) {
                value = value.concat(hex_array[j].val)
                break
            }
        }
    }
    console.log(value)
    return value
}