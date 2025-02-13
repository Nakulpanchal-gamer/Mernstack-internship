import React from 'react'
import { useForm } from 'react-hook-form'


export const FormDemo3 = () => {
    const { register, handleSubmit } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }
    return (
        <div>
            <h1>Login Your Existing Account</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text"  placeholder='Enter your Email for login' {...register('email id')}/>
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="text"  placeholder='Enter your Password' {...register('password')}/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
        </div>
    )
}