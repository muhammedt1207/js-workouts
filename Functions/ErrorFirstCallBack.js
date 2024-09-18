const callBack=((error,value)=>{
    if(error){
        throw new Error(error)
    }
    console.log(value)
})

callBack('error is happened',10)