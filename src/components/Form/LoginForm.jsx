import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
    const { register, handleSubmit,formState:{errors}} = useForm()
    console.log("errors.....",errors)


    const submitHandler = (data) => {
        alert('Form submitted')
        console.log(data)
    }

    const validationscheme = {
        nameValidator: {
            required: "name is required"
        },
        ageValidator: {
            required: {
                value: true,
                message: "age is required",
            },
            min: {
                value: 18,
                message: "age shold be greater then 18"
            },
            max: {
                value: 60,
                message: "age should be less then 61"
            }
        },
        emailValidator: {
            required: {
                value: true,
                message: "email is required"
            },
            pettern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
            }
        }
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label> Name</label>
                    <input type="text" name='name' {...register('name', validationscheme.nameValidator)} />
                    <span style={{color: "red"}}>{errors.name?.message}</span>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" name='age' {...register('age', validationscheme.ageValidator)} />
                    <span style={{color: "red"}}>{errors.age?.message}</span>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name='email' {...register('email', validationscheme.emailValidator)} />
                    <span style={{color: "red"}}>{errors.email?.message}</span>
                </div>
                <div>
                    <input type="submit" name='Submit' />
                </div>
            </form>
        </div>
    )
}
