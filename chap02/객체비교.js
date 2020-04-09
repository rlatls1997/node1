let person1 = {name:"홍길동", age:16}
let person2 = {name:"홍길동", age:16}
let p = person1;

//참조. 주소를 비교한다
console.log(person1 == person2); //서로 가리키는 주소가 다르므로 false
console.log(person1 == p); //서로 가리키는 주소가 같으므로 true

//객체의 주소가 아니라 객체의 내용을 비교할 때
function equals(p1,p2){
    return p1.name == p2.name &&
    p1.age == p2.age;
}   //자바스크립트는 같은 이름의 함수를 한개밖에 만들지 못한다
console.log(equals(person1, person2));

