function SelectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let index=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[index]){
                index=j
            }
        }
        [arr[i],arr[index]]=[arr[index],arr[i]]
    }
    return arr
}

console.log(SelectionSort([6,4,26,8,92,4,6,8,1,4,6]))