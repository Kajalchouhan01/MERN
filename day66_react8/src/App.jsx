import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [counter,setCounter]=useState(100)
 useEffect(()=>{
  document.title =counter;
   console.log("Useeffect is runnig...!")


 },[counter])

 
  return (
    <div>
      <h1>
        {counter}
      </h1>
      <button onClick={()=> setCounter(counter+1)}>increace</button>
      <button  onClick={()=> setCounter(counter-1)}>decrease</button>
    </div>
  )
}

export default App