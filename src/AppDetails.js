import React from "react";
import {SidePanel, OpenBtn, CloseBtn} from "./components/SideBar";
import {BoxContent} from "./components/BoxContent";
import {ProgramBox} from "./components/ProgramBox";
import "./styles/index.scss";

let list = []
for(let i=0; i<10;i++){
    list.push(<ProgramBox/>);
}

function App() {
    return (
        <div className="App">
            <SidePanel/>
            <OpenBtn/>

            <BoxContent Boxes={list}/>


        </div>
    );
}

export default App;
