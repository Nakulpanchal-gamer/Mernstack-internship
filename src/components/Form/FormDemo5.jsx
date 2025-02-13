import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const {register,handleSubmit}=useForm();

    const submitHandler=(data)=>{
        console.log(data)
    }
  return (
    <div>
        <h1>Youtube Subscription</h1>
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
                <label >Validity:</label> 
                1 week<input type="radio" value='1week' name='validity' {...register('validity')} />
                1 month <input type="radio" value='1month' name='validity' {...register('validity')} />
                3 month<input type="radio"value='3month' name='validity' {...register('validity')} />
                6 month<input type="radio"value='6month' name='validity' {...register('validity')} />
                1 Year<input type="radio"value='1year' name='validity' {...register('validity')} />
            </div>
            <div>
                Clearity:
                HD <input type="radio" value='Hd' name='clearity' {...register('clearity')}/>
                SD <input type="radio" value='Sd' name='clearity' {...register('clearity')}/>

            </div>
            <div>
                    <input type='submit' value="book ticket"></input>
                </div>
        </form>
    </div>
  )
}