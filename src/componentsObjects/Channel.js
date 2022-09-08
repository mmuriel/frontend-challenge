import React from "react";
class Channel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="Channel">

                <a href="javascript:void(0)" onClick={this.props.parent.SetChannel(this.props.channel.id)}>
                    {this.props.channel.name}
                </a>
            </div>
        )
    }

}

export default Channel