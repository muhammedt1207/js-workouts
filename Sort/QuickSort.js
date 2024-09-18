function QuickSort(arr){
    if(arr.length<=1){
        return arr
    }

    let pivot=arr[arr.length-1]

    const left=[]
    const right=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)]
}

console.log(QuickSort([6,4,2,4,6,1,7,8,3,4,9,0]))


