import { useState } from "react";
import './contur.css';
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
    if(count%2==0){
    return (
        <> 
        
        <h1 className="b" >{count}</h1>
            <button onClick={()=>Inc()}>Increament</button>
            <button onClick={()=>Dec()}>Dicreament</button>
            <button onClick={()=>Bouble()}>multiplied by 2</button>
        </>

    )
    }
    else{
        return (
        <> 
        
        <h1 className="a">{count}</h1>
            <button onClick={()=>Inc()}>Increament</button>
            <button onClick={()=>Dec()}>Dicreament</button>
            <button onClick={()=>Bouble()}>multiplied by 2</button>
        </>
        )
    }
}
export default Button