function getMax(num){
    let max=Number.MIN_SAFE_INTEGER
    while(num){
        let div=num%10
        if(max<div){
            max=div
        }
        num=Math.floor(num/10)
    }
    return max
}

let arr=19345678
console.log(getMax(arr))