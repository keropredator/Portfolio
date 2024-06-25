import { useState } from "react";

export default function MyButton(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <div>

        <button onClick={handleClick}>
            you clicked {count} times!
        </button>
        <button onClick={reset}>
            reset
        </button>
        </div>
    )
}
