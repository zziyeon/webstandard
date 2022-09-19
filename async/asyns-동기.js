//  동기- 순서보장, 시간이 길어지면 block으로 기다려야함
// 실행순서: foo-> bar   _ bar는 foo가 동작 끝날때까지 대기
function sleep(func, delay){
    const delayUntil = Date.now() + delay;
    while(Date.now()<delayUntil);
    func();
}

function foo(){
    console.log('foo');
}
function bar(){
    console.log('bar');
}
sleep(foo, 3*1000);
bar();