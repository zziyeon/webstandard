{
    //Array.prototype.forEach().,,,> (인스턴스 메소드)
    //콜백함수내에서 배열을 순회하면서 요소 하나에 대한 수행처리 반환 값 undefined 없다.

    let fruits = ['사과', '바나나', '딸기'];
    const findedIdx = fruits.indexOf('바나나');
    console.log(findedIdx);
    const deletedElement = fruits.splice(findedIdx, 1);
    console.log(deletedElement[0]);

    fruits.forEach(ele => console.log(ele)); 
}

{   //스프레드 문범[,,,배열]
    let fruits = ['사과', '바나나', '딸기'];
    let fruits2 = ['수박', '참외'];

    //배열 복사
    let fruits3 = fruits;
    let fruits4 = [...fruits];            //[...]은 복사했다.

    //배열 결합
    let fruits5=[...fruits,...fruits2,'오렌지'];        //fruits와 fruits2 합치기+ 오렌지 추가
    console.log(fruits5);
}

