import { useState } from "react";
export default function StateFunction()
{
    const[carName,setCarName]=useState("BMW");
    const changeCarName=()=>setCarName("AUDI")
    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)
    return(
        <div>
        <h1>My car is {carName}</h1>
        <button onClick={changeCarName}>Click Me!</button>
        <h1>Count {count}</h1>
        <button onClick={changeCount}>Increment</button>
        <button onClick={decrCount}>Decrement</button>
        </div>
    )
}