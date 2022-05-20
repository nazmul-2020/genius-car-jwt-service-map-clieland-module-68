import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
         console.log(data)
        const url=`http://localhost:5000/service`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })

        };

    return (
        <div className='w-25 mx-auto'>
            <h1>Add Service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea className='mb-3' {...register("description",)} placeholder='Description' />
                <input className='mb-3' type="number" {...register("price")} placeholder='Price' />
                <input className='mb-3' type="text" {...register("img")} placeholder='Photo URL' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;