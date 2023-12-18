function Demo()
{
    return(
        <div>
            <h1>Hi world</h1>
        </div>
    )
}
function OneExport()
{
    return(
        <div>
            <Demo/>
            <h1>I will export only one component</h1>
        </div>
    )
}
export default OneExport;
