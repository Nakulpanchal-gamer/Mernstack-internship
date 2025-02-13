import React from 'react'

export const ArrayDemo3 = () => {
    var employees = [
        {
            id: 123,
            name: "aryan",
            age: 25,
            salary: 10000,
            gender: "male"
        },
        {
            id: 124,
            name: "tesla",
            age: 30,
            salary: 100000,
            gender: "female"
        },
        {
            id: 125,
            name: "aryani",
            age: 20,
            salary: 1000,
            gender: "male"
        },
        {
            id: 126,
            name: "arya",
            age: 22,
            salary: 20000,
           gender: "female"
        }        
    ];

  return (
    <>
    <div style={{alignContent: "center"}}>ArrayDemo3</div>
    <h1>Employee Table</h1>
        <table class="table table-dark">
            <thead>
                <tr>
                <td>id</td>
                <td>name</td>
                <td>age</td>
                <td>salary</td>
                <td>gender</td>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp) => {
                        return(
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.gender}</td>
                            </tr>
                    )
                    })
                }
            </tbody>
        </table>
    </>
  )
}
