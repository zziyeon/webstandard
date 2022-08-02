const arr = ['a', 'p', 'p', 'l', 'e']
const arr2 = [6, 15, 27, 34, 23];

//Array.prototype.sort() 사용
//sort()는 배열요소를 문자열로 변환하여 유니코드 값에 의해 정렬. 따라서 요소가 숫자인 경우 콜백함수를 통해 정렬로직을 반영.

//1) arr 오름차순 정렬
const answer1=arr.sort();
console.log(answer1);

//2) arr 내림차순 정렬
const answer2=answer1.reverse();
console.log(answer2);

//3) arr2 오름차순 정렬
const answer3=arr2.sort((prev,next)=>prev-next);
console.log(answer3);

//4) arr2 내림차순 정렬
const comarefunc =(prev,next)=>{
    // if(prev<next){
    //     return 1;
    // }
    // if(prev>next){
    //     return -1;
    // }
    // if(prev==next){
    //     return 0;
    // }
    return next-prev;
};
const answer4=arr2.sort(comarefunc);
console.log(answer4);