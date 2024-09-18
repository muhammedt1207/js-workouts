

// app.use(cookeiParser())



// app.use('/',routerHandler)

// app.all('/')

// router.post('/userData',(req,res,next)=>{
//   const {userID}=req.body
//   console.log(userID);

// })

// useEffect = (() => {
//   let timer
 
//    console.log()
  
//   return (() => {
//     clearInterval(timer)
//   })
// }, [state])

function check(value){
  if(isEmpty()){
    return null
  }

  let current=this.head
  while(current.next){
    if(current.value==value){
      return true
    }
    current=current.next
  }
  return false

}