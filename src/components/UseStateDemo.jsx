import React from 'react'
import { useState } from 'react'

export const UseStateDemo = () => {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1)
    console.log("count = ",count)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Use State Demo</h1>
      <h2>Count = {count}</h2>
      <button onClick={() => {increment()}}>Increase</button>
    </div>
  )
}
