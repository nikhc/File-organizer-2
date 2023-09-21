const tnik=require("request");
const cheerio=require('cheerio');
const chalk=require("chalk")


console.log("before");
tnik('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard',cb);
console.log("After");

function cb(error,response,html){
    if(error){
        console.error('error',error);
    }
    else{
        handlehtml(html);
    }
}

function handlehtml(html){
    let seltool=cheerio.load(html);
  
 

    let data = seltool(".ds-leading-[0] a span");
    for(let i=0;i<data.length;i++){
       let h=seltool(data[i]).text();
       console.log(h);
    }
}
 
