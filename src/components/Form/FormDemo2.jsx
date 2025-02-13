import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
  
  
  const {register, handleSubmit} = useForm()

  const submitHandler = (data) => {
    console.log(data)
  }
  return (
    <div style={{textAlign: 'center'}}> 
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
                    <label>GENDER</label>
                    MALE:<input type='radio' name='gender' value="male"{...register("gender")}></input>
                    FEMALE:<input type='radio' name='gender' value="female"{...register("gender")}></input>
                </div>
                <div>
                    <input type='submit' value="book ticket"></input>
                </div>
      </form>
    </div>
  )
}
