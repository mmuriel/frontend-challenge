import React from "react";

function ChangeOpenState(id){
    return ()=>{
        document.getElementById(id).classList.toggle("open")
    }
}

class ProgramBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){

        return(
            <div className="ProgramBox">
                <div className="program-header" id={"active-" + this.props.active}>
                    <h3>
                        <a>{this.props.titulo}</a>
                    </h3>
                    <h5>
                        {this.props.hora}
                    </h5>

                    <button  className="" onClick={ChangeOpenState(this.props.id)}>▼</button>
                </div>
                <div className="program-content">
                    <p id={this.props.id}>
                        {this.props.contenido}
                    </p>
                </div>
            </div>
        )
    }
}
export default ProgramBox;