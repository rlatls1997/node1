function outterFunc(){
    print("hello");

    function print(msg){
        console.log(msg);
    }
}

outterFunc();
//print함수는 지역함수이기때문에 outter함수 외부에서는 호출불가
