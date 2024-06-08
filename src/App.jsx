import React from "react";
import { useState } from "react";

// userState Syntax
// const [stateName,setStateName] = useState('initialState');

function App() {

  const [count,setCount] = useState(0);
  const [countBy,setCountBy] = useState(1);
  function handleCountBy(e){
    var value = e.target.value;
    console.log(value);
    value = value == ""?1:value;
     setCountBy(Number(value));
  }
  const decrementCount = ()=>{
      setCount(count - countBy);
  }
  const incrementCount = ()=>{
    setCount(count + countBy);
}

  return (
   <>
   <h1>Count value is : {count}</h1>
   <button disabled={count <= 0} onClick={decrementCount}>Decrement</button>{' '}
   <input type="number" onChange={(e)=>handleCountBy(e)} />{' '}
   <button onClick={incrementCount} disabled={count >= 20}>Increment</button>
   </>
  )
}

export default App
