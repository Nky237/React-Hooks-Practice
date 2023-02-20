import React from 'react'
import { useEffect, useState } from 'react'


const useQuery = (request) => {
    const [form, setForm] = useState([])
    useEffect(()=>{
      request.then((fetchResponse) => {console.log(fetchResponse)
        setForm(fetchResponse.data)
      })       
  })
    return (

     {form}

  )
}

export default useQuery