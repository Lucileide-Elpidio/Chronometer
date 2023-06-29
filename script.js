
let sec=0
let min=0
let hours=0
let interval

function formatNumber(digit){
    if(digit<10){
    return("0"+digit)
}else{
    return(digit)
}

}


function start(){
watch()
    interval=setInterval(watch,1000)

}

function pause(){
clearInterval(interval)

}

function parar(){
clearInterval(interval)
sec=0
min=0
hours=0
document.querySelector(".watch").innerHTML="00:00:00"

}

function watch(){
sec++
if (sec==60){
    min++
    sec=0
    if(min==60){
       min=0
       hours++ 
    }
}
document.querySelector(".watch").innerHTML=formatNumber(hours)+":"+formatNumber(min)+":"+formatNumber(sec)
}