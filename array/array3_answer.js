const data = {
    result: 'success',        //success면 데이터 전송 성공, fail이면 데이터 전송 실패
    data: [
        { name: '이름1', gender: '남', age: 10, blood: 'A' },
        { name: '이름2', gender: '여', age: 20, blood: 'B' },
        { name: '이름3', gender: '남', age: 30, blood: 'O' },
        { name: '이름4', gender: '여', age: 40, blood: 'AB' },
        { name: '이름5', gender: '남', age: 50, blood: 'A' }
    ]
};

// //0. 회원의 수
// {
//     if (data.result == 'success') {
//         console.log(data.data.length);
//     }
// }
// //1. 회원이름 출력
// {
//     if (data.result == 'success') {
//         data.data.forEach(ele => { console.log(ele.name); });
//     }

// }
// //2. 회원 나이의 총합
// {
//     if (data.result == 'success') {
//         const result=data.data.reduce(
//             (acc,ele)=>acc+ele.age,0);
//         console.log(`회원 나이의 총합: ${result}`);
//     }
// }

// //3. 남자회원의 나이 총합 출력하기
{   //filter, reduce 사용
    if (data.result == 'success') {
            const result=data.data.filter(ele=>ele.gender=='남').reduce((acc,ele)=>acc+ele.age,0);
            console.log(`남자회원의 나이의 총합: ${result}`);
    }
}

{   //reduce만 사용
    if (data.result == 'success') {
            const result=data.data.reduce((acc,ele)=>{
                if(ele.gender=='남') 
                    return acc+ele.age;
                return acc+0;
             },0);
            console.log(`남자회원의 나이의 총합33: ${result}`);
    }
}

// // //4. 남자회원, 여자회원을 분리하여 배열에 저장
// {    //filter 사용
//     if (data.result == 'success') {
//         const $boy=data.data.filter(ele=>ele.gender=='남');
//         const $girl=data.data.filter(ele=>ele.gender=='여');
//         console.log($boy);
//         console.log($girl);
//     }
// }

{       //reduce 사용
    if (data.result == 'success') {
        const boy = data.data.reduce((acc,ele)=>{
            if(ele.gender=='남')
                acc.push(ele);
            return acc;            
        },[]);
        const girl = data.data.reduce((acc,ele)=>{
            if(ele.gender=='여')
                acc.push(ele);
            return acc;            
        },[]);
        console.log(boy);
        console.log(girl);

    }
}


// // //5. A형 회원의 나이 총합 구하기
// {    //filter, reduce 사용
//     if (data.result == 'success') {
//         const result=data.data.filter(ele=>ele.blood=='A').reduce((acc,ele)=>acc+ele.age,0);
//         console.log(`A형의 회원의 나이 총합: ${result}`);
//     }
// }

{   //reduce만 사용
    if (data.result == 'success') {
            const result=data.data.reduce((acc,ele)=>{
                if(ele.blood=='A') 
                    return acc+ele.age;
                return acc+0;
             },0);
            console.log(`A형 회원의 나이 총합: ${result}`);
    }
}

// // //6. name이 이름3인 회원의 혈액형은?
{
    if (data.result == 'success') {
        const result=data.data.filter(ele=>ele.name=='이름3');
        console.log(`이름3인 회원의 혈액형: ${result[0].blood}`);
    }
}
//7. 혈액형별 인원수 카운트
// 결과: {A: 2, B:1, O:1, AB:1}
{
    if (data.result == 'success') {
        const countOfBloodType= data.data.reduce((acc,ele)=> {
            //같은 혈액형 프로퍼티 누적
            //case1)
            // if(acc[ele.blood]){
            //     ++acc[ele.blood];
            // }else{
            //     acc[ele.blood]=1;
            // }

            //case 2)
            // acc[ele.blood]=acc[ele.blood]?++acc[ele.blood]:1;

            //case 3)
            acc[ele.blood]=(acc[ele.blood]||0)+1;
            return acc;
        },{});  //초기값을 객체로 줌.
        console.log(countOfBloodType);
    }
}

//8. 남성 회원의 평균 연령
{
    if (data.result == 'success') {

        const avgOfAge= data.data.filter(ele=>ele.gender=='남').reduce((acc,ele,idx,arr)=>{
            //누적하다 마지막 요소에서 요소갯수로 나누어 반환
            //case 1
            // if(idx==arr.length-1){
            //     return (acc+ele.age)/arr.length;
            // }
            // return acc+ele.age;

            //case 2
            return idx==arr.length-1?(acc+ele.age)/arr.length:acc+ele.age;
        },0);
        console.log(`남성 회원의 평균 연령: ${avgOfAge}`);
    }
}

// //9. 나이가 가장 많은 회원의 혈액형은?
{
    if (data.result == 'success') {
        let bloodTypeOfTheOldest=data.data.reduce((acc,ele)=>{
            //case 1)
            if(acc<ele.age) {
                acc=ele.age
            }return acc;
            //case 2)
            // if(ele.age==acc>ele.age?acc:ele.age)return ele.blood;
        },0);
        console.log(bloodTypeOfTheOldest);
    }
}

//10. 원본 데이터중 일부 데이터 (이름, 나이) 추출
{       //reduce 사용
    if (data.result == 'success') {
        const some = data.data.reduce((acc,ele)=>{
                acc.push({name:ele.name, age:ele.age});
            return acc;            
        },[]);
        
        console.log(some);
    }
}

//11. 수신된 데이터에 남자회원이 있는지 여부
{
    const isExist= data.data.some((ele,idx,arr)=>{return ele.gender=='남'});
    console.log(`남자회원이 있는지 여부: ${isExist}`);
}

//12. 수신된 데이터에 모두 남자회원인지의 여부
{
    const isExist= data.data.every((ele,idx,arr)=>{return ele.gender=='남'});
    console.log(`모두 남자회원인지  여부: ${isExist}`);
}

//13. 여성회원의 나이를 내림차순으로 정렬하기
{
    const sorted_girl=data.data.filter(ele=>ele.gender=='여').sort((e1,e2)=> e1.age-e2.age);
    console.log(sorted_girl);
}

//14. 여성이면서 혈액형이 'AB'인 첫번째 회원의 이름은?
{
    let one=data.data.filter(ele=>ele.gender=='여'&&ele.blood=='AB')[0].name;
    console.log(one);

    one =data.data.find(ele=>ele.gender=='여'&&ele.blood=='AB').name;
    console.log(one);
}