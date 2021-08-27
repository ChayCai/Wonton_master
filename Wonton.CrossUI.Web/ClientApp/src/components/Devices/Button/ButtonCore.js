import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Button.css';

export class ButtonCore extends Component {
    
    static defaultProps = {
        name: "按钮",
        ClassName: "Button"
    }

    onCheckMouseDown = (e) => {
        if (this.props.onDown) {
            this.props.onDown(e);
        }
    }

    onCheckMouseUp = (e) => {
        if (this.props.onUp) {
            this.props.onUp(e);
        }
    }

    render() {
        return (
            <Button outline active={this.props.active} size='lg' className="myToggleButton" onMouseDown={e => this.onCheckMouseDown(e)} onMouseUp={e => this.onCheckMouseUp(e)}>
                <FontAwesomeIcon icon={faArrowDown} />
            </Button>
        );
    }
}