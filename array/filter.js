{
    //filter: 배열에서 원하는 요소만 걸러 새로운 배열을 만든다.
    const arr = [1,2,3,4,5,6,7,8,9,10];

    arr.filter(ele=>ele%2==0).forEach(ele=>console.log(ele));
}