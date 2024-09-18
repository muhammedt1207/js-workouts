import { useEffect, useState } from "react"


function withLoading(WrappedComponent){
    return function withLoadingCompenent(props){
        const [isLoading,setisLoading]=useState(true)
        const [data,setData]=useState(null)

        useEffect(()=>{
            const timer=setTimeout(()=>{
                setisLoading(false)
                setData('loading data')
            },2000)
            return ()=>clearTimeout(timer)
        },[])

        if(isLoading){
            <div>Loading.....</div>
        }
        return <WrappedComponent data={data} {...props}/>
    }
}

export default withLoading;
