import React from 'react'
import { useState } from 'react'

const NumberList = () => {
    const [count,setCount]=useState(0)

    function increment(){
        setCount(count+1)
    }

    const numbers=Array.from(count)


  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default NumberList
