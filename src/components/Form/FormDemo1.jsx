import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register, handleSubmit} = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }
  
    return (
    <div style={{textAlign: 'center'}}>
        <h1>Fill the Given Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type="text" placeholder='Enter name' {...register("name")}/>
            </div>
            <div>
                <label>Age</label>
                <input type="number" placeholder='Enter age' {...register("age")}/>
            </div>
            <div>
                <select name="gender" id="gender" {...register("gender")}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    </div>
  )
}
