import React from 'react'

export const ArrayDemo2 = () => {
    var students = [
        {
            name: "ram",
            age: 20
        },
        {
            name: "shyam",
            age: 21
        },
        {
            name: "mohan",
            age: 22
        }
    ];
    return (
        <>
    <h1>Array Demo 2</h1>
    {
        students.map((student) => {
            return <li>{student.name} -- {student.age}</li>
        })
    }
    </>
  )
}
