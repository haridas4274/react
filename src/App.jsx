import React from "react"
import { useState } from "react"
import { useEffect } from "react"

//useEffect Hooks

//syntax 
// useEffect(function,[])
function App() {

  const[count,setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(count + 1);
    },2000);
  })

  return (
  <>
  <h1>I have Rendered with {count} times!</h1>
  </>
  )
}

export default App
