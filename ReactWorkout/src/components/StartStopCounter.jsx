import React, { useState } from 'react'

const StartStopCounter = () => {
    const [time,setTime]=useState(0)
    function startTimer(){
        const timer=setInterval(()=>{
            setTime(state+1)
        },1000)
        setTimeout(()=>{
            clearInterval(timer)
        },10000)
    }

  return (
    <div>
        <h1>{time}</h1>
      <button onClick={startTimer}>Start</button>
    </div>
  )
}

export default StartStopCounter
