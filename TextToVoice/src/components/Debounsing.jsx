import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Debounsing = () => {
    const [text,setText]=useState('')
    const [decbounce,setBebounce]=useState(text)
    useEffect(()=>{
        const setTime=setTimeout(()=>{
            setBebounce(text)
        },1000)
        return ()=>{
            console.log('hello world');
            
            clearTimeout(setTime)
        }
    },[text])

    useEffect(()=>{
        if(decbounce){
            console.log(decbounce);
            //api call
        }
    },[decbounce])
  return (
    <div>
      <input type="text"
      placeholder='search'
      onChange={(e)=>setText(e.target.value)}
      />
      <h1>{decbounce}</h1>
    </div>
  )
}

export default Debounsing
