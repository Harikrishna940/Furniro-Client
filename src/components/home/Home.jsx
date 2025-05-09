import React, { useContext } from 'react'
import Hero from './Hero'
import Browse from './Browse'
import Products from './Products'
import { Auth } from '../../context/context'

export default function Home() {
  
  return (
    <div>
        <Hero/>
        <Browse/>
        <Products/>
    </div>
  )
}
