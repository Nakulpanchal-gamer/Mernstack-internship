import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const { register, handleSubmit,formState:{errors}} = useForm()
    console.log("errors.....",errors)


    const submitHandler = (data) => {
        alert('Form submitted')
        console.log(data)
    }

    const validationSchemas = {
        nameValidator:{
            required:{
                value:true,
                message:"Name is Required*"
            }
        },
        contactValidator:{
            //regex
            pattern:{
                //8
                value:/[6-9]{1}[0-9]{9}/,
                message:"contact is not valid*"
            }

        },
        //ok
        codeValidator:{
            validate:(value)=>{
                //value  == ok
                return  value == "royal" || "code must be royal"
            }
        }
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Form Demo 6</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' placeholder='enter name' {...register("name",validationSchema.nameValidator)}></input>
                <span style={{color:"red"}}>{errors.name?.message}</span>
            </div>
            <div>
                <label>Contact</label>
                <input type='text' placeholder='enter Contact' {...register("contact",validationSchema.contactValidator)}></input>
                <span style={{color:"red"}}>
                    {
                        errors.contact?.message
                    }
                </span>
            </div>
            <div>
                <label>Enter code</label>
                <input type='text' placeholder='enter code' {...register("code",validationSchema.codeValidator)}></input>
                {
                    errors.code?.message
                }
            </div>
            <div>
                <input type='submit' value="submit"></input>
            </div>
            </form>
        </div>
    )
}
