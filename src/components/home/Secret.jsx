import React from 'react'
import { useEffect } from 'react'
import { api } from '../../api'

function Secret() {

    useEffect(()=>{

        async function fetchdata() {
            const res = await api.get("/protected")
            console.log(res);
        }

        fetchdata()

    },[])


  return (
    <div>Secret</div>
  )
}

export default Secret