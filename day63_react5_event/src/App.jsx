import React from 'react'
import { useState } from 'react';

const App = () => {
    // let counter=0;
    const [counter,setcounter] = useState(0)
    // const increase = () => {
    //   // counter=counter+1;
    //   console.log(counter)
    // }
    // const decrease = () => {
    //   // counter=counter-1;
    //   console.log(counter)
    // }
    
  
  return (
    <div>
      <h1>Counter={counter}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default App