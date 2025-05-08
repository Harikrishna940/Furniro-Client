import React, { useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

function Register() {
    const nav = useNavigate()
    const [err,seterror]= useState("")
    const [formData , setFormData] = useState({
        name:'',
        number:'',
        email:'',
        password:''
    })

  const submitData = async(e)=>{
    e.preventDefault()
    try {
      const res = await api.post("/auth/register",formData) 
        console.log(res.data.message);
        if (res.data.message==='registered sucessfully')
        {
          nav('/login')
        }
        
      } catch (error) {
        
        const er = error.response.data.message || "error occured" 
        seterror(er)
        
    }
  }


  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col space-y-4 p-6 border rounded-lg shadow-md w-80" onSubmit={(e)=>submitData(e)}>
        <h2 className="text-xl font-bold text-center">Log In</h2>

        <label htmlFor="name">Name</label>
        <input id="name" name='name' onChange={(e)=> setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))} type="text" className="border px-2 py-1 rounded" />

        <label htmlFor="email">Email</label>
        <input id="email" name='email' onChange={(e)=> setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))} type="text"  className="border px-2 py-1 rounded" />

        <label htmlFor="name">Number</label>
        <input id="number" name='number' onChange={(e)=> setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))} type="text" className="border px-2 py-1 rounded" />

        <label htmlFor="password">Password</label>
        <input id="password" name='password' onChange={(e)=> setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))} type="password" className="border px-2 py-1 rounded"/>

        <button type="submit"  className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Log In
        </button>
        {err && <p className='text-red-600 text-center '>{err}</p> }
      </form>
    </div>
  );
}

export default Register;
