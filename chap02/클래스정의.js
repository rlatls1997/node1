class Person {
    constructor( s, i){
        this.name = s;
        this.age = i;
    }
}
//자바스크립트의 생성자의 이름은 언제나 constructor이다

let person = new Person("홍길동", 16);
console.log(person)
///////////////////////////////////////////////////////////////////
class Rectangle { 
    constructor(w,h){
        this.width = w;
        this.height = h;
    }
    area(){
        return this.width*this.height;
    }
}
let rectangle = new Rectangle(10,15);
console.log(rectangle);
console.log(rectangle.area());
//이 area는 멤버변수가 아닌 메소드이기때문에 객체를 호출해도 같이 호출되지않는다

//static메소드 구현
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(point1,point2){
        let dx = point1.x - point2.x;
        let dy = point1.y - point2.y;
        return Math.hypot(dx,dy);
    }
}
let p2 = new Point(25,40);
let p1 = new Point(10,15);
console.log(Point.distance(p1,p2));

/////////////////////////////////////////////////////////////////////
