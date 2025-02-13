import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const [isLoading, setisLoading] = useState(true)
    const [Count, setCount] = useState(0)
    const {Name, setName} = useState("")
    const [Users, setUsers] = useState([])
    
    const stopLoader = () => {5
        setisLoading(false)
    }

    return (
    <div style={{textAlign: 'center'}}>
        <h1>use state demo 2</h1>
        {
            isLoading == true ? "loaading.."  : ""
        }
        <button onClick={() => {stopLoader()}}>Stop</button>
    </div>
  )
}
