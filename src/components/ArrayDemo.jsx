import React from 'react'

export const ArrayDemo = () => {
    var Users = ["ram", "shyam", "mohan"];
  return (
    <>
    

        <h1 style={{textAlign: "center"}}>Array Demo 2</h1>
        {
            Users.map((user) => {
                return <li>{user}</li>
            })
        }
        </>
  )
}
