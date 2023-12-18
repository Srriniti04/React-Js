export default function Parent()
{
    return(
        <div>
            <h1>Parent Component</h1>
            <Child res={1000}/>
        </div>
    )
}
function Child(Props)
{
    return(
        <div>
        <h1>Child Component</h1>
        <h1>The value is {Props.res}</h1>
        </div>
    )
}