import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoMdCart, IoMdPerson } from 'react-icons/io';
import { LuHeart } from 'react-icons/lu';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Logo from '../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Auth } from '../context/context';
import toast, { Toaster } from 'react-hot-toast';

function Nav() {

  const path = useLocation();

  const nav =useNavigate()
  const auth = useContext(Auth)
  
  if (path.pathname==='/login'||path.pathname==='/register') {
    return (
      <>
      </>
    )
  }

  return (
    <div>
      <div><Toaster position="bottom-right"/></div>
    <div className='flex w-screen  items-center p-4  bg-white  justify-between'>
    <div className='flex items-center cursor-pointer '>
    <img src={Logo} className='w-10'  alt="" />
      <h2 className='text-black p-2 text-3xl font-bold'>Furniro</h2></div>
      <div className='flex justify-center  font-semibold gap-15'>
        <button onClick={()=>toast.error("Hello World")} className='cursor-pointer' >Home</button>
        <button className='cursor-pointer'>Shop</button>
        <button className='cursor-pointer'>About</button>
        <button className='cursor-pointer'>Contact</button>
      </div>


      {auth.isAuth === true &&
      (
        <div className='flex justify-center  pr-12 font-medium gap-9'>
        <Link to={'/secret'}><button className='cursor-pointer'><MdOutlinePersonOutline size={24}/></button></Link>
          <button className='cursor-pointer'><BsSearch size={24} /></button>
          <button className='cursor-pointer'><LuHeart size={24}/></button>
          <button className='cursor-pointer'><IoMdCart size={24} /></button>
        </div>
      )}

{auth.isAuth === false && (
  <div className='pr-12 font-medium gap-9'>
    <Link to={'/register'}>
    <button>Sign Up</button>
    </Link>
    <Link to={'/login'}>
    <button>Sign In</button>
    </Link>
  </div>
)
}

      

    </div>
    </div>
  );
}

export default Nav;
