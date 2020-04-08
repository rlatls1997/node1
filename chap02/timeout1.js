function printTime(msg){
    console.log(msg, new Date());
}
//setTimeout함수. setTimeout(callback, delay, arg1, arg2, ...)
//delay(ms)초 후에 callback함수가 호출된다.
setTimeout(printTime, 1000, "1초 후");
setTimeout(printTime, 2000, "2초 후");
setTimeout(printTime, 3000, "3초 후");


//setInterval함수. 정한 delay만큼의 간격으로 callback함수를 계속호출
setInterval(printTime, 1000, "1초 간격");

//setInterval((msg) =>console.log(msg,new Date()),1000,"1초간격");
//화살표함수문법으로 위의 문장과 같다