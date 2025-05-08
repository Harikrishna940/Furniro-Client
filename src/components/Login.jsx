import React, { useContext, useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../context/context';

function Login() {
  const nav = useNavigate()
  const auth = useContext(Auth)
  const [formData,setFormData]=useState({
    name:'',
    password:''
  })

  const [err,seterror]= useState("")


  const handleInput = async(e)=>{
    const {name,value}=e.target;
    // console.log(name,value);

    setFormData((prev)=>({...prev,[name]:value}))
    
  }

  const onSubmit = async(e)=>{
    e.preventDefault()
    // console.log(formData,'submitted');

    try {
      const res =await api.post('/auth/login',formData)
      console.log(res);
      
      if(res.data.message==="login sucess"){
        nav('/')
        if (res.data.token) {
          sessionStorage.setItem('token',res.data.token)
          auth.setisAuth(true)
        }
      }

    } catch (error) {
      // console.log(error.response.data.message);
      const er = error.response.data.message||'something occured'
      seterror(er)
      
    }


    
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col space-y-4 p-6 border rounded-lg shadow-md w-80" onSubmit={(e)=>onSubmit(e)}>
        <h2 className="text-xl font-bold text-center">Log In</h2>

        <label htmlFor="name">Name</label>
        <input id="name" name='name' type="text" onChange={handleInput} className="border px-2 py-1 rounded" />

        <label htmlFor="password">Password</label>
        <input id="password" name='password' type="password" onChange={handleInput} className="border px-2 py-1 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Log In
        </button>
        {err && <p className='text-red-600 text-center '>{err}</p>}
      </form>
    </div>
  );
}

export default Login;
