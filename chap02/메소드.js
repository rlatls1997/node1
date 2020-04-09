//메소드를 만드는 법
let rectangle = {
    width:5,
    heigth:7,
    area:function(){return this.width * this.heigth;}
    //자바스크립트에서는 this를 생략할 수 없다.
};

console.log(rectangle.area());

//메소드를 만드는 법2
let rectangle1 = {
    width:5,
    heigth:7,
};
rectangle1.area = function(){return this.width * this.heigth;}
console.log(rectangle1.area())