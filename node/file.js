const fs=require('fs')
const http=require('http')
const express=require('express')
const path=require('path')

fs.writeFileSync('result.txt','hi all i am muhammed')
fs.appendFileSync('result.txt','i am mern stack developer')
fs.stat('result.txt',(err,stats)=>{
    if(err)throw err

    console.log(stats.ctime);
    
})
const data=fs.readFileSync('result.txt','utf8')
console.log(data);

