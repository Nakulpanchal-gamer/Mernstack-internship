import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const { register, handleSubmit } = useForm()
    
        const submitHandler = (data) => {
            console.log(data)
        }
  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">UserName:</label>
                <input type="text"  placeholder='Enter your Username' {...register('username')}/>
            </div>
            <div>
                <label htmlFor="">New Password:</label>
                <input type="text"  placeholder='Enter your Password' {...register('password')}/>
            </div>
            <div>
                <label htmlFor="">Correct Password:</label>
                <input type="text"  placeholder='Enter your Password' {...register('password')}/>
            </div>
            <div>
                    <input type='submit' value="book ticket"></input>
                </div>
        </form>
    </div>
  )
}