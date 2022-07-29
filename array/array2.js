{
    //문제: 배열 [1,2,3]을 map 사용하지 않고  [3,6,9]를 만드시오
    const arr=[1,2,3];
    const arr2=[];
    arr.forEach(ele=>arr2.push(ele*3));
    console.log(arr2);
}

{
    //문제: 위 문제를 map함수를 사용하시오.
    //Array.prototype.map();
    //콜백함수의 반환값들로 구성된 새로운 배열을 반환
    const arr=[1,2,3];
    const arr2=arr.map(x=>x*3);
    console.log(arr2);
}

{
    //문제: 배열 [1,2,3]으로 3,6,9 출력하시오.
    const arr=[1,2,3];
    arr.map(ele=>ele*3).forEach(ele=>console.log(ele));
}
{
    //문제: 1~10까지 배열중 짝수만 출력하시오.
    const arr=[1,2,3,4,5,6,7,8,9,10];
    const arr2=[];
    arr.forEach(ele=>{
        if(ele%2==0)   arr2.push(ele);
    });
    console.log(arr2);


}