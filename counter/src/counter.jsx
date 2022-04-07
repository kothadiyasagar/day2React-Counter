import { useState } from "react";
function Button() {
    const [count,setCount]=useState(0);
    const Inc=()=>{
        setCount(count+1)
    }
    const Dec=()=>{
        setCount(count-1)
    }
    const Bouble=()=>{
        setCount(count*2)
    }
    return (
        <>   <h1>{count}</h1>
            <button onClick={()=>Inc()}>Increament</button>
            <button onClick={()=>Dec()}>Dicreament</button>
            <button onClick={()=>Bouble()}>multiplied by 2</button>
        </>

    )
}
export default Button