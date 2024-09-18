let obj=[[{a:[1,2,3]}],[{a:[1,2,3]}],[{a:[1,2,3]}]]


for(let i=0;i<obj.length;i++){
    for(x of obj[i]){
        let odd=0
        for(let j=0;j<x.a.length;j++){
            odd+=x.a[j]
        }
        console.log(odd)
    }
}

