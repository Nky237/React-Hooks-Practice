import React, { useState } from 'react'

const useBgColor = () => {
  const [color, setColor] = useState('')
  const bgColor = ()=>{
    setColor(Math.random().toString(16).substr(-6))
  }
    return (
    {color, bgColor}
  )
}

export default useBgColor