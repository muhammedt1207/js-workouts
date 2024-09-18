import React from 'react'
import { useState } from 'react'

const data=[{title:'fruits',values:['Apples','Banana','Orange']},{title:'vegitables',values:['Cabage','Carrot','Tomato']}]
const DropDown = () => {
    const [selected,setSelected]=useState([])
    const [hide,setHide]=useState(false)
    function handleSelect(e){
        console.log(';;;;;;;;;;;');
            if(e.target.value=='fruits')  {
                setSelected([...data[0].values])
            }else{
                setSelected([...data[1].values])

            }        
        setHide(true)
    }
  return (
    <div>
        <h6>Select Catogory</h6>
        <select onClick={handleSelect} name="select catogory" id="">
            {
                data.map((data,i)=>(
                    <option key={i} value={data.title}>{data.title}</option>
                ))
            }
        </select>
        <h6>Selected items</h6>
        {
            hide && selected.map((data,i)=>(
                <option value={data} key={i}>{data}</option>
            ))
        }
    </div>
  )
}

export default DropDown
