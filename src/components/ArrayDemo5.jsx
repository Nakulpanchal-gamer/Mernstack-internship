import React from 'react'

export const ArrayDemo5 = () => {
    var employees = [
        {
            id: 123,
            cityname: "aryan",
            populate: 25,
            aqi: 10000,
        },
        {
            id: 124,
            cityname: "tesla",
            populate: 30,
            aqi: 100,
        },
        {
            id: 125,
            cityname: "aryani",
            populate: 20,
            aqi: 1000,
        },
        {
            id: 126,
            cityname: "arya",
            populate: 22,
            aqi: 20000,
        }        
    ];

  return (
    <>
    <div style={{textAlign: "center"}}>ArrayDemo5</div>
    <h1>Employee Table</h1>
        <table class="table table-dark">
            <thead>
                <tr>
                <td>id</td>
                <td>cityname</td>
                <td>populate</td>
                <td>aqi</td>
                
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp) => {
                        return(
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.cityname}</td>
                                <td>
                                    <span style={{color: emp.populate==25 ? "green":"blue"}}>{emp.populate}
                                    </span>
                                </td>
                                <td style={{backgroundColor: emp.aqi>=10000 ? "red":"green"}}>{emp.aqi}</td>
                                
                            </tr>
                    )
                    })
                }
            </tbody>
        </table>
    </>
  )
}
