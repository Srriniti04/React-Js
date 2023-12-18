import { Component } from "react";
class StateClassCom extends Component
{
    state={color:"Yellow",no:1321}
    handleChange=()=>{this.setState({color:"Red"})}
    render()
    {
        return(
            <div>
            <h1>The colour i have selected is {this.state.color} the number is {this.state.no}</h1>
            <button onClick={this.handleChange}>Click me!</button>
            </div>
        )
    }
}
export default StateClassCom;
