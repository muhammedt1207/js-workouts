import React from 'react'

const Hoc = (WrapperComponent) => {
    return function(props){
            const toUpperCase={
                ...props,
            text:props.text.toUpperCase()
            }
        return <WrapperComponent {...toUpperCase}/>
        }
}

const WrapperComponent=({text})=>{
    return(
        <div className='text-2xl text-blue-900'>{text}</div>
    )
}
export const UpperCase= Hoc(WrapperComponent)
