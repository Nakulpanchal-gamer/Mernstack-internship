import React from 'react'

export const ArrayDemo4 = () => {
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
    <div style={{textAlign: "center"}}>ArrayDemo4</div>
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
                                <td>
                                    <span style={{color: emp.age==25 ? "green":"blue"}}>{emp.age}
                                    </span>
                                </td>
                                <td style={{backgroundColor: emp.salary>=10000 ? "red":"green"}}>{emp.salary}</td>
                                <td style={{backgroundColor: emp.gender == "male" ? "blue":"pink"}}>{emp.gender}</td>
                            </tr>
                    )
                    })
                }
            </tbody>
        </table>
    </>
  )
}
