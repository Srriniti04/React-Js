import React from "react"
export default function DynamicRendering()
{
    return(
     x>10? <p>The value is greater tham 10 </p>:
     <p>The value is less than 10</p>
    )
}