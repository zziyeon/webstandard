//iife(Immediately Invoked Function Expression)

const f = (x, y) => x + y;
const r = f(10, 20);
console.log(r);

const r2 = (
    (x,y) => x+y
)(10,20);       //이름 없는 함수를 바로 호출
console.log(r2);