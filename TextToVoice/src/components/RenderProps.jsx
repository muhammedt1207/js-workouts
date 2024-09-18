import React from 'react'
import { useState } from 'react'

const Counder = ({children}) => {
    const [count,setCound]=useState(0)
    const increment=()=>{
        setCound(count+1)
    }
  return children({count,increment})
}


const MyComponent=()=>{
    return(
        <Counder>
            {({count,increment})=>(
                <div>
                    count:{count}
                    <button onClick={increment}>Increment</button>
                </div>
            )}            
        </Counder>
    )
}

export default MyComponent
