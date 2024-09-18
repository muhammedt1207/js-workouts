// function MergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     const mid=Math.floor(arr.length/2)

//     const left=arr.slice(0,mid)
//     const right=arr.slice(mid)

//     return merge(MergeSort(left),MergeSort(right))
// }

// function merge(left,right){
//     let result=[]
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             result=result.concat(left.shift())
//         }else{
//             result=result.concat(right.shift())
//         }
//     }
//     result=result.concat(left)
//     result=result.concat(right)
//     return result;
// }

// console.log(MergeSort([3,5,1,3,7,8,47,234,667,2333,-234234,23]))




function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }

    const mid=Math.floor(arr.length/2)

    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let result=[]

    while(left.length&&right.length){
        if(left[0]<right[0]){
            result=result.concat(left.shift())

        }else{
            result=result.concat(right.shift())
        }
    }
    result=result.concat(left)
    result=result.concat(right)

    return result
}

console.log(mergeSort([3,5,234,2334,6,234,234,6,23,4,2334,6234,]))