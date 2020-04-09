//Object.assign(to,from) from의 값을 to로 모두 복사
//같은 이름의 멤버변수가 존재하면 from의 멤버변수값으로 바뀌고
//같은 이름의 멤버변수가 없다면 해당 멤버변수가 to객체에 새로 만들어진다
let person = {name:"홍길동", age:16}
let info = {age:20, department:"소프", tear:2}

Object.assign(person,info);
console.log(person);

//객체복제
let person1 = {name:"홍길동",age:16};

let person2 = Object.assign({},person1);
console.log(person2);


//Object.entries(객체):객체의 모든 멤버변수값이 들어있는 2차원 배열을 리턴
console.log(Object.entries(person1));
//객체의 내용조회2
for(let [key,value] of Object.entries(person1))
    console.log("%s : %s",key ,value)

//Object.keys, Object.values : 멤버변수 이름과 멤버변수 내용을 배열로 리턴
console.log(Object.keys(person1))
console.log(Object.values(person1))

//Object.freeze : 객체를 수정할 수 없는 상태로 변경한다. immutable
Object.freeze(person1)
person.department = "소프"
console.log(person1)

//Object.isFrozen:객체가 freeze되었는지를 확인
console.log(Object.isFrozen(person1))