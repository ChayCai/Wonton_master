import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup, Button } from 'reactstrap';

import ledOnG from './led_ong.svg';
import ledOnR from './led_onr.svg';
import ledOnY from './led_ony.svg';
import ledOff from './led_off.svg';

import "./LED.css"

export class LEDCore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorsetisopen: false,
        }
    }
    
    static defaultProps = {
        name: "LED",
        ClassName: "LED",
        size: [3, 3, 3, 3],
        onOff: false
    }

    handlesrcback = (onOff, color) => {
        if (!onOff) {
            return ledOff;
        }
        else {
            switch (color) {
                case "g": {
                    return ledOnG;
                    break;
                }
                case "r": {
                    return ledOnR;
                    break;
                }
                case "y": {
                    return ledOnY;
                    break;
                }
            }
        }
    }

    handleClickcolorset = () => {
        this.setState({
            colorsetisopen: !this.state.colorsetisopen,
        })
    }

    render() {
        return (      
            <div>
                <div id="colorbutton" className={this.props.color} onClick={this.handleClickcolorset}></div>
                <Modal isOpen={this.state.colorsetisopen} toggle={this.handleClickcolorset}>
                    <ModalHeader toggle={this.handleClickcolorset}>colorset</ModalHeader>
                    <ModalBody>
                        <ButtonGroup>
                            <Button color="success" onClick={()=>this.props.oncolorchange("g")}>Green</Button>
                            <Button color="danger" onClick={()=>this.props.oncolorchange("r")}>Red</Button>
                            <Button color="warning" onClick={()=>this.props.oncolorchange("y")}>Yellow</Button>
                        </ButtonGroup>
                    </ModalBody>
                </Modal>
                <img src={this.handlesrcback( this.props.onOff, this.props.color )} alt="led"></img>
            </div>
        );
    }
}