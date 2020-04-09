//객체 속성명과 value값 탐색
let person = {name:"홍길동", age:16};

for(let key in person){
    let value = person[key];
    console.log("%s: %s",key, value);
}

//객체의 멤버변수 제거
delete person.age;
console.log(person);