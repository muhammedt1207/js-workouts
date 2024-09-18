let arr=[1,2,3,4,5,6,7,8]

function printOddAndEven(arr){
    
    if(arr.length==1){
        return 
    }
    if(arr[0]%2==0){
        console.log("odd",arr[0]);
    }else{
        console.log('even',arr[0]);
    }
    arr.splice(0,1)
    return printOddAndEven(arr)
}
printOddAndEven(arr)