function test1(f){      //callback함수
    let result = f(3,4);
    console.log(result);
}

function add(a,b) {
    return a+b;
}

function multiply(a,b){
    return a*b;
}

test1(add);
//add함수를 parameter로 전달. f에 add를 대입하면 result = add(3,4)
test1(multiply);
//multiply함수를 test1의 parameter로 전달

