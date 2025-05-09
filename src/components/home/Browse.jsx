import React from 'react'
import Dining from '../../assets/dining.jpg'
import Living from '../../assets/living.jpg'
import Bedroom from '../../assets/bedroom.jpg'

export default function Browse() {
    return (
        <div className='bg-white'>
            <div className='pt-7'>
                <h2 className='font-bold text-3xl flex justify-center'>Browse The Range</h2>
                <p className='flex pt-4 justify-center text-xl text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='flex justify-center gap-6 pt-17'>
                    <div className='flex flex-col items-center cursor-pointer'>
                        <img src={Dining} className='shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-2xl w-100 h-120 object-cover' alt="Dining Room" />
                        <p className='mt-2 text-2xl pt-2 font-medium'>Dining</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={Living} className='shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-2xl w-100 h-120 object-cover' alt="Living Room" />
                        <p className='mt-2 text-2xl pt-2 font-medium'>Living</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={Bedroom} className='shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-2xl w-100 h-120 object-cover' alt="Bedroom" />
                        <p className='mt-2 text-2xl pt-2 font-medium'>Bedroom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
