import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

import './DeviceItem.css';

export class DeviceItem extends Component {

    OnAdd = (event, name) => {
        this.props.OnAdd(event, name);
    }
    
    render() {
        return (
            <Card style={{ marginTop: '20px'}} >
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className='caption' style={{marginLeft: '10px', marginTop: '12px'}}>
                        {this.props.children.props.name}
                    </div>
                    <Button onClick={(e) => this.OnAdd(e, this.props.children.props.ClassName)} style={{marginRight: '10px', marginTop: '5px', marginBottom: '5px'}}>添加</Button>
                </div>
            </Card>
        );
    }
}