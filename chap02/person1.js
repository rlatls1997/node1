let person = {name:"홍길동", age:16} //객체생성

console.log(person);
console.log(person.name);
console.log(person.age);

//참조형. 변수는 해당 객체에 대한 참조만 저장할 뿐

let person1 = {}; //비어있는 객체 생성

person1.name = "홍길동"; //name멤버변수가 없으면 해당속성을 생성한다
person1.age = 16;
console.log(person1);

let person3 = {};

person3["name"] = "홍길동"; //다른방식으로 객체저장하는 방법
person3["age"] = 16;
console.log(person3["name"])
console.log(person["age"])

////객체를 만드는 또다른 방법
function createPerson(s,i){
    return {name: s, age: i}; //매개변수로 객체를 생성해서 리턴
}
let person0 = createPerson("임꺽정",18);
console.log(person0);


//객체의 속성명과 매개변수의 이름이 같을 경우 
function createPerson1(name, age){
    return {name, age}; //따로 속성명을 지정안해주면 해당 이름으로 속성생성
}
let person10 = createPerson1("강감찬",20)
console.log(person10)