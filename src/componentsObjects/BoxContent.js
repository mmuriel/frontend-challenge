import React from "react";
import ProgramBox from "./ProgramBox"
import DL from "./GetData"


class BoxContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){

        let boxList = DL.GetProgramsByChannelId(this.props.ChannelID)

        boxList = boxList.filter((idx)=>{return DL.isToday(new Date(idx.begin))})

        let List = []
        for(let i=0; i<boxList.length;i++){
            List.push(<ProgramBox titulo={boxList[i].title} hora={boxList[i].begin} contenido={boxList[i].sinop} id={boxList[i].id} active={DL.IsProgramCurrent(boxList[i].begin, boxList[i].duration)}/>);
        }

        return(
            <div className="BoxContent">
                {List}
            </div>
        )
    };
}

export default BoxContent;
