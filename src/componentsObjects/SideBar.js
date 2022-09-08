import React from "react";

import DataLoader from "./GetData";
import BoxContent from "./BoxContent";
import DL from "./GetData";
import Channel from "./Channel"

function openNav() {
    document.getElementById("sidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
}

//console.log(DL.GetProgramsByChannelId("380"));

class SideBar extends React.Component{
    constructor(props) {
        super(props);


        this.state = {
            chnID: "380"
        }

        let channelsList = []
        for(let i = 0; i<DL.state.Channels.length; i++){
            channelsList.push(<Channel parent={this} channel={DL.state.Channels[i]}/>)
        }

        this.state.Channels = channelsList;


    }
    render(){
        return(
            <div>
                <div className="sidepanel" id="sidepanel">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>Channels   </a>
                    {this.state.Channels}
                </div>
                <button href="javascript:void(0)" className="openbtn" onClick={openNav}>☰ {DL.GetChannelById(this.state.chnID)[0].name}</button>
                <BoxContent ChannelID={this.state.chnID}/>
            </div>
        )
    }
    SetChannel(id){
        return ()=>{
            this.setState((state, props)=>{
                return {chnID: id}
            })
        }
    }

}

export default SideBar




