//비동기 setTimeout이 안 걸린것부터 실행
//아래있는 bar() -> setTimeout 걸린 foo 실행
function foo(){
    console.log('foo');
}
function bar(){
    console.log('bar');
}

setTimeout (foo, 3*1000);
setTimeout (foo, 0);        //지연시간이 0초라도 아래 bar()부터 실행됨
bar();