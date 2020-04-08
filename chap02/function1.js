function add(a,b){
    return a+b;
}
/*let add = function(a,b){
    return a+b;
}
이 함수는 위 함수와 동일함
*/

let a = add(3,4);
console.log(a);

let f = add;            //변수에 함수를 대입할 수 있다
console.log(typeof f);

let b = f(3,4);     //함수가 삽입된 변수는 같은 기능의 함수처럼 사용가능
console.log(b);