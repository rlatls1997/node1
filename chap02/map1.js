let a1 = [1,2,3,4,5];
let a2 = a1.map((value) => value*2);
console.log(a2.join());     //join()메소드: 배열원소를 하나의 스트링으로 리턴

function callback(a,b){
    console.log(a+","+b);
    return a+b;
}

let a3 = [10,20,30,40,50];
let sum = a3.reduce(callback)
console.log(sum);
sum = a3.reduce((a,b) => a>b? a:b)
console.log(sum); 