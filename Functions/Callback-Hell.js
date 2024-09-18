

function first(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('first function executed');
            resolve()
        },1000)

    })
}

function secound(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('first function executed');
            resolve()
        },1000)

    })
}

function Third(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('first function executed');
            resolve()
        },1000)

    })
}

function fourth(callback){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('first function executed');
            resolve()
        },1000)

    })
}

first()
.then(secound)
.then(Third)
.then(fourth)
.then(()=>{
    console.log('callback work completed');
    
})