function add(a,b) {
    return a+b;
}
console.log(add(3,"4"));
console.log(add(3,4));
console.log(add(3));
////////////////////////////////////////////////////////////
function add1(a,b){
    if(b==undefined) b = 0; //b값이 정의되지 않았을 때
    return a+b;
}
console.log(add1(3,4));
////////////////////////////////////////////////////////
function add3(a,b) {
    if(!b) b = 0; //!b 는 NaN, null, 0 일 경우 !b는 true가 된다
    return a+b;
}
console.log(add3(3));
//////////////////////////////////////////////////////
function add4(a,b){
    return a+(b || 0);  //b가 true에 해당하면 결과는 왼쪽항, b가 false면 결과는 오른쪽항
}
console.log(add4(4));