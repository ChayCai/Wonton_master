import React, { Component } from 'react';
import { Button } from 'reactstrap'

import './KeyPad4t4.css';

export class KeyPad4t4Core extends Component {

    static defaultProps = {
        name: "4x4键盘",
        ClassName: "KeyPad4t4",
        size: [9, 12, 9, 12]
    }

    render() {
        return (
            <div className="KeyPad4t4">
                <div id="panel">
                    <Button id="button_1" onMouseDown={() => this.props.onCheckMouseDown(0)} onMouseUp={() => this.props.onCheckMouseUp(0)}>1</Button>
                    <Button id="button_2" onMouseDown={() => this.props.onCheckMouseDown(1)} onMouseUp={() => this.props.onCheckMouseUp(1)}>2</Button>
                    <Button id="button_3" onMouseDown={() => this.props.onCheckMouseDown(2)} onMouseUp={() => this.props.onCheckMouseUp(2)}>3</Button>
                    <Button id="button_4" onMouseDown={() => this.props.onCheckMouseDown(3)} onMouseUp={() => this.props.onCheckMouseUp(3)}>4</Button>
                    <Button id="button_5" onMouseDown={() => this.props.onCheckMouseDown(4)} onMouseUp={() => this.props.onCheckMouseUp(4)}>5</Button>
                    <Button id="button_6" onMouseDown={() => this.props.onCheckMouseDown(5)} onMouseUp={() => this.props.onCheckMouseUp(5)}>6</Button>
                    <Button id="button_7" onMouseDown={() => this.props.onCheckMouseDown(6)} onMouseUp={() => this.props.onCheckMouseUp(6)}>7</Button>
                    <Button id="button_8" onMouseDown={() => this.props.onCheckMouseDown(7)} onMouseUp={() => this.props.onCheckMouseUp(7)}>8</Button>
                    <Button id="button_9" onMouseDown={() => this.props.onCheckMouseDown(8)} onMouseUp={() => this.props.onCheckMouseUp(8)}>9</Button>
                    <Button id="button_0" onMouseDown={() => this.props.onCheckMouseDown(9)} onMouseUp={() => this.props.onCheckMouseUp(9)}>0</Button>
                    <Button id="button_A" onMouseDown={() => this.props.onCheckMouseDown(10)} onMouseUp={() => this.props.onCheckMouseUp(10)}>A</Button>
                    <Button id="button_B" onMouseDown={() => this.props.onCheckMouseDown(11)} onMouseUp={() => this.props.onCheckMouseUp(11)}>B</Button>
                    <Button id="button_C" onMouseDown={() => this.props.onCheckMouseDown(12)} onMouseUp={() => this.props.onCheckMouseUp(12)}>C</Button>
                    <Button id="button_D" onMouseDown={() => this.props.onCheckMouseDown(13)} onMouseUp={() => this.props.onCheckMouseUp(13)}>D</Button>
                    <Button id="button_E" onMouseDown={() => this.props.onCheckMouseDown(14)} onMouseUp={() => this.props.onCheckMouseUp(14)}>E</Button>
                    <Button id="button_F" onMouseDown={() => this.props.onCheckMouseDown(15)} onMouseUp={() => this.props.onCheckMouseUp(15)}>F</Button>
                </div>
            </div>
        );
    }
}