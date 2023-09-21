#!/usr/bin/env node 
fs=require("fs");
let input =process.argv.slice(2);
console.log(input);
let optionArr=[];
let fileArr=[];
for(let  i=0;i<input.length;i++){
    let nikchar=input[i].charAt(0);
    if(nikchar=='-'){
        optionArr.push(input[i]);
    }
    else{
        fileArr.push(input[i]);
    }
}
let isBothPresent =optionArr.includes("-b")&& optionArr.includes("-n")
if(isBothPresent){
    console.log("pls enter write ");
    return ;
}
for(let i=0;i<fileArr.length;i++){
    let ispresent=fs.existsSync(fileArr[i]);
    if (ispresent==false){
        console.log("pls enter tthr correct file name");
        return ;
    }
}




let content=""

for(let i=0;i<fileArr.length;i++){
    let a= fs.readFileSync(fileArr[i]);
    content+=a+"\r\n";

}
let  contentArr=content.split("\r\n");


let isPresent=optionArr.includes("-s");
if(isPresent==true){
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]==""&&contentArr[i-1]==""){

            contentArr[i]=null;
        }
        else if(contentArr[i]==""&&contentArr[i-1]==null){
            contentArr[i]=null;
        }

    }
    let tempArr=[];
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=null){
            tempArr.push(contentArr[i])
        }
       

    }
    contentArr=tempArr;
   




}
// console.log(contentArr.join("\n")); 
let isNPresent=optionArr.includes("-n");
if(isNPresent==true){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=`${i} ${contentArr[i]}`;







    }

}
//console.log(contentArr.join("\n"));
let isBpresent=optionArr.includes("-b");
if(isBpresent==true){
    let count=0;
    
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i]=`${count} ${contentArr[i]}`;
            count++;
        
        }
    
     







    }

}
console.log(contentArr.join("\n"));
///-s -b -n run fromm where u want to
