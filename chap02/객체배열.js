//객체배열 만들기
let person1 = {name:"홍길동", age:19}
let person2 = {name:"강감찬", age:20}
let person3 = {name:"전우치", age:25}

//배열도 마찬가지로 참조형이다
//배열 변수에는 배열에 대한 참조만 저장한다
let persons = [person1, person2, person3]
console.log(persons);

//배열에 객체 직접저장도 가능
let persons1 = [
    {name:"홍길동", age:19},
    {name:"강감찬", age:20},
    {name:"전우치", age:25}
]
console.log(persons1);
for(let i = 0; i<persons1.length; i++)
    console.log(persons1[i])

persons1[2] = persons1[1] //person1의 2번째원소의 참조를 1번째원소의 참조로 변경
persons1[1].age = 23;
console.log(persons1);