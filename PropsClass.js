import React,{Component}from 'react' 
export default class PropsClass extends Component 
{
    render()
    {
        return(
            <div>
                <h1>I an studying at {this.props.College}</h1>
            </div>
        )
    }
}