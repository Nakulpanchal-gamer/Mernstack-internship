import React, { useState } from 'react'

export const InputDemo = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const nameHandle = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

   return (
    <div style={{textAlign: "center"}}>
        <h1>Input Demo</h1>
        <div>
            <label>Name: </label>
            <input type="text" placeholder='Enter your name'  onChange={(event) => {nameHandle(event)}}/>
            {name}
        </div>
        <div>
            <label>Email: </label>
            <input type="text" placeholder='Enter your email'  onChange={(event) => {setEmail(event.target.value)}}/>
            {Email}
        </div>
    </div>
  )
}
