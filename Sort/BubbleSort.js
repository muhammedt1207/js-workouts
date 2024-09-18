function BubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
    }
    }
    return arr
}

console.log(BubbleSort([3,5,6,6,6,4,3,344,6,7,2,4,6,8,9,9,89,765]))