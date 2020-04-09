let f = function(msg){
    console.log(msg);
}
f("hello");

(function(msg){
    console.log(msg)
})("hello") //anonymous함수. 함수를 한번만 쓸 때 사용


function factory(){ //자바스크립트의 함수는 리턴이 가능하다
    return function(msg){
        console.log(msg)
    }
}
let l = factory()
l("hello") //function("hello")