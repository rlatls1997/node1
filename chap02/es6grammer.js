//가변 파라미터, 파라미터개수가 가변적

function sum(msg, ...a){ //spread syntax 문법.es6
    console.log(msg); 
    let result = 0;
    for(let i = 0; i<a.length; ++i)
        result += a[i];
    return result;
}
console.log(sum(1,2,3,4));
console.log(sum(1,2));

function sum1(){    //가변 파라미터 옛날문법
    let result = 0;
    for(let i = 0; i<arguments.length; i++) //arguments 키워드. 해당 함수에 전달된 파라미터
        result += arguments[i];             //목록의 배열
        return result;
}
console.log(sum1(1,2,3,4));
//spread syntax문법이 더 나은 이유는 고정변수파라미터를 또 받아서 활용이 가능하기때문