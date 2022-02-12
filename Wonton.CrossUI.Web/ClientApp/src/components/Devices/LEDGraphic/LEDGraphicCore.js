import React, { Component } from 'react';

import "./LEDGraphic.css"

export class LEDGraphicCore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorsetisopen: false,
        }
    }

    static defaultProps = {
        name: "LED图像显示",
        ClassName: "LEDGraphic",
        size: [18, 12, 18, 12],
        onOff: false
    }

    render() {

        return (
            <div className="LEDGraphic">
                <div id="LED8t64bit00"><LED8t64bit myid="00" onoff={this.props.onoff[0]}></LED8t64bit></div>
                <div id="LED8t64bit01"><LED8t64bit myid="01" onoff={this.props.onoff[1]}></LED8t64bit></div>
                <div id="LED8t64bit02"><LED8t64bit myid="02" onoff={this.props.onoff[2]}>></LED8t64bit></div>
                <div id="LED8t64bit03"><LED8t64bit myid="03" onoff={this.props.onoff[3]}>></LED8t64bit></div>
                <div id="LED8t64bit04"><LED8t64bit myid="04" onoff={this.props.onoff[4]}>></LED8t64bit></div>
                <div id="LED8t64bit05"><LED8t64bit myid="05" onoff={this.props.onoff[5]}>></LED8t64bit></div>
                <div id="LED8t64bit06"><LED8t64bit myid="06" onoff={this.props.onoff[6]}>></LED8t64bit></div>
                <div id="LED8t64bit07"><LED8t64bit myid="07" onoff={this.props.onoff[7]}>></LED8t64bit></div>
                <div id="LED8t64bit10"><LED8t64bit myid="10" onoff={this.props.onoff[8]}>></LED8t64bit></div>
                <div id="LED8t64bit11"><LED8t64bit myid="11" onoff={this.props.onoff[9]}>></LED8t64bit></div>
                <div id="LED8t64bit12"><LED8t64bit myid="12" onoff={this.props.onoff[10]}>></LED8t64bit></div>
                <div id="LED8t64bit13"><LED8t64bit myid="13" onoff={this.props.onoff[11]}>></LED8t64bit></div>
                <div id="LED8t64bit14"><LED8t64bit myid="14" onoff={this.props.onoff[12]}>></LED8t64bit></div>
                <div id="LED8t64bit15"><LED8t64bit myid="15" onoff={this.props.onoff[13]}>></LED8t64bit></div>
                <div id="LED8t64bit16"><LED8t64bit myid="16" onoff={this.props.onoff[14]}>></LED8t64bit></div>
                <div id="LED8t64bit17"><LED8t64bit myid="17" onoff={this.props.onoff[15]}>></LED8t64bit></div>
            </div>
        );
    }
}

class LED8t64bit extends Component {
    render() {

      
        return (
            <div className="LED8t64bit" id={this.props.myid} >
                <div id="LED8bit00"><LED8bit myid="LED00" onoff={this.props.onoff[0]}></LED8bit></div>
                <div id="LED8bit01"><LED8bit myid="LED01" onoff={this.props.onoff[1]}></LED8bit></div>
                <div id="LED8bit02"><LED8bit myid="LED02" onoff={this.props.onoff[2]}></LED8bit></div>
                <div id="LED8bit03"><LED8bit myid="LED03" onoff={this.props.onoff[3]}></LED8bit></div>
                <div id="LED8bit04"><LED8bit myid="LED04" onoff={this.props.onoff[4]}></LED8bit></div>
                <div id="LED8bit05"><LED8bit myid="LED05" onoff={this.props.onoff[5]}></LED8bit></div>
                <div id="LED8bit06"><LED8bit myid="LED06" onoff={this.props.onoff[6]}></LED8bit></div>
                <div id="LED8bit07"><LED8bit myid="LED07" onoff={this.props.onoff[7]}></LED8bit></div>
                <div id="LED8bit08"><LED8bit myid="LED08" onoff={this.props.onoff[8]}></LED8bit></div>
                <div id="LED8bit09"><LED8bit myid="LED09" onoff={this.props.onoff[9]}></LED8bit></div>
                <div id="LED8bit10"><LED8bit myid="LED10" onoff={this.props.onoff[10]}></LED8bit></div>
                <div id="LED8bit11"><LED8bit myid="LED11" onoff={this.props.onoff[11]}></LED8bit></div>
                <div id="LED8bit12"><LED8bit myid="LED12" onoff={this.props.onoff[12]}></LED8bit></div>
                <div id="LED8bit13"><LED8bit myid="LED13" onoff={this.props.onoff[13]}></LED8bit></div>
                <div id="LED8bit14"><LED8bit myid="LED14" onoff={this.props.onoff[14]}></LED8bit></div>
                <div id="LED8bit15"><LED8bit myid="LED15" onoff={this.props.onoff[15]}></LED8bit></div>
                <div id="LED8bit16"><LED8bit myid="LED16" onoff={this.props.onoff[16]}></LED8bit></div>
                <div id="LED8bit17"><LED8bit myid="LED17" onoff={this.props.onoff[17]}></LED8bit></div>
                <div id="LED8bit18"><LED8bit myid="LED18" onoff={this.props.onoff[18]}></LED8bit></div>
                <div id="LED8bit19"><LED8bit myid="LED19" onoff={this.props.onoff[19]}></LED8bit></div>
                <div id="LED8bit20"><LED8bit myid="LED20" onoff={this.props.onoff[20]}></LED8bit></div>
                <div id="LED8bit21"><LED8bit myid="LED21" onoff={this.props.onoff[21]}></LED8bit></div>
                <div id="LED8bit22"><LED8bit myid="LED22" onoff={this.props.onoff[22]}></LED8bit></div>
                <div id="LED8bit23"><LED8bit myid="LED23" onoff={this.props.onoff[23]}></LED8bit></div>
                <div id="LED8bit24"><LED8bit myid="LED24" onoff={this.props.onoff[24]}></LED8bit></div>
                <div id="LED8bit25"><LED8bit myid="LED25" onoff={this.props.onoff[25]}></LED8bit></div>
                <div id="LED8bit26"><LED8bit myid="LED26" onoff={this.props.onoff[26]}></LED8bit></div>
                <div id="LED8bit27"><LED8bit myid="LED27" onoff={this.props.onoff[27]}></LED8bit></div>
                <div id="LED8bit28"><LED8bit myid="LED28" onoff={this.props.onoff[28]}></LED8bit></div>
                <div id="LED8bit29"><LED8bit myid="LED29" onoff={this.props.onoff[29]}></LED8bit></div>
                <div id="LED8bit30"><LED8bit myid="LED30" onoff={this.props.onoff[30]}></LED8bit></div>
                <div id="LED8bit31"><LED8bit myid="LED31" onoff={this.props.onoff[31]}></LED8bit></div>
                <div id="LED8bit32"><LED8bit myid="LED32" onoff={this.props.onoff[32]}></LED8bit></div>
                <div id="LED8bit33"><LED8bit myid="LED33" onoff={this.props.onoff[33]}></LED8bit></div>
                <div id="LED8bit34"><LED8bit myid="LED34" onoff={this.props.onoff[34]}></LED8bit></div>
                <div id="LED8bit35"><LED8bit myid="LED35" onoff={this.props.onoff[35]}></LED8bit></div>
                <div id="LED8bit36"><LED8bit myid="LED36" onoff={this.props.onoff[36]}></LED8bit></div>
                <div id="LED8bit37"><LED8bit myid="LED37" onoff={this.props.onoff[37]}></LED8bit></div>
                <div id="LED8bit38"><LED8bit myid="LED38" onoff={this.props.onoff[38]}></LED8bit></div>
                <div id="LED8bit39"><LED8bit myid="LED39" onoff={this.props.onoff[39]}></LED8bit></div>
                <div id="LED8bit40"><LED8bit myid="LED40" onoff={this.props.onoff[40]}></LED8bit></div>
                <div id="LED8bit41"><LED8bit myid="LED41" onoff={this.props.onoff[41]}></LED8bit></div>
                <div id="LED8bit42"><LED8bit myid="LED42" onoff={this.props.onoff[42]}></LED8bit></div>
                <div id="LED8bit43"><LED8bit myid="LED43" onoff={this.props.onoff[43]}></LED8bit></div>
                <div id="LED8bit44"><LED8bit myid="LED44" onoff={this.props.onoff[44]}></LED8bit></div>
                <div id="LED8bit45"><LED8bit myid="LED45" onoff={this.props.onoff[45]}></LED8bit></div>
                <div id="LED8bit46"><LED8bit myid="LED46" onoff={this.props.onoff[46]}></LED8bit></div>
                <div id="LED8bit47"><LED8bit myid="LED47" onoff={this.props.onoff[47]}></LED8bit></div>
                <div id="LED8bit48"><LED8bit myid="LED48" onoff={this.props.onoff[48]}></LED8bit></div>
                <div id="LED8bit49"><LED8bit myid="LED49" onoff={this.props.onoff[49]}></LED8bit></div>
                <div id="LED8bit50"><LED8bit myid="LED50" onoff={this.props.onoff[50]}></LED8bit></div>
                <div id="LED8bit51"><LED8bit myid="LED51" onoff={this.props.onoff[51]}></LED8bit></div>
                <div id="LED8bit52"><LED8bit myid="LED52" onoff={this.props.onoff[52]}></LED8bit></div>
                <div id="LED8bit53"><LED8bit myid="LED53" onoff={this.props.onoff[53]}></LED8bit></div>
                <div id="LED8bit54"><LED8bit myid="LED54" onoff={this.props.onoff[54]}></LED8bit></div>
                <div id="LED8bit55"><LED8bit myid="LED55" onoff={this.props.onoff[55]}></LED8bit></div>
                <div id="LED8bit56"><LED8bit myid="LED56" onoff={this.props.onoff[56]}></LED8bit></div>
                <div id="LED8bit57"><LED8bit myid="LED57" onoff={this.props.onoff[57]}></LED8bit></div>
                <div id="LED8bit58"><LED8bit myid="LED58" onoff={this.props.onoff[58]}></LED8bit></div>
                <div id="LED8bit59"><LED8bit myid="LED59" onoff={this.props.onoff[59]}></LED8bit></div>
                <div id="LED8bit60"><LED8bit myid="LED60" onoff={this.props.onoff[60]}></LED8bit></div>
                <div id="LED8bit61"><LED8bit myid="LED61" onoff={this.props.onoff[61]}></LED8bit></div>
                <div id="LED8bit62"><LED8bit myid="LED62" onoff={this.props.onoff[62]}></LED8bit></div>
                <div id="LED8bit63"><LED8bit myid="LED63" onoff={this.props.onoff[63]}></LED8bit></div>
            </div>
        );
    }
}


class LED8bit extends Component {
    render() {

        let tmp_onoff = parseInt(this.props.onoff).toString(2);
        let onoff = new Array(8).fill(false);

        for (let x = 0; x < 8; x++) {
            if (x < 8 - tmp_onoff.length) {
                onoff[x] = false;
            }
            else {
                onoff[x] = (Number(tmp_onoff[x + tmp_onoff.length - 8]) === 1 ? true : false);
            }
        }
        return (
            <div id={this.props.myid} className="LED8bit">
                <div id="span0"><span className = {onoff[0] ? "on" : ""}></span></div>
                <div id="span1"><span className = {onoff[1] ? "on" : ""}></span></div>
                <div id="span2"><span className = {onoff[2] ? "on" : ""}></span></div>
                <div id="span3"><span className = {onoff[3] ? "on" : ""}></span></div> 
                <div id="span4"><span className = {onoff[4] ? "on" : ""}></span></div>
                <div id="span5"><span className = {onoff[5] ? "on" : ""}></span></div>
                <div id="span6"><span className = {onoff[6] ? "on" : ""}></span></div>
                <div id="span7"><span className = {onoff[7] ? "on" : ""}></span></div>
            </div>
            );
    }
}
