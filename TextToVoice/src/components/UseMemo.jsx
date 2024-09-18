import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const UseMemos = () => {

    const [name,setName]=useState('defualt')

    const counder=useMemo(()=>{
    let sum=0
        for(let i=0;i<100;i++){
            sum+=i
            console.log('hello world')
        }
        return sum
    },[]);
    function handleClick(){
        if(name=='ajmal'){
            setName('muhammed')
        }else{
            setName('ajmal')
        }
    }

  return (
    <div>
        <h1>{name}</h1>
    <button onClick={handleClick}>click me</button>
    <div>{counder}</div>  
    </div>
  )
}

export default UseMemos


