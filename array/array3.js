const data = {
    result: 'success',        //success면 데이터 전송 성공, fail이면 데이터 전송 실패
    data: [
        { name: '이름1', gender: '남', age: '10', blood: 'A' },
        { name: '이름2', gender: '여', age: '20', blood: 'B' },
        { name: '이름3', gender: '남', age: '30', blood: 'O' },
        { name: '이름4', gender: '여', age: '40', blood: 'AB' },
        { name: '이름5', gender: '남', age: '50', blood: 'A' }
    ]
};

//0. 회원의 수
{
    if (data.result == 'success') {
        console.log(data.data.length);
    }
}
//1. 회원이름 출력
{
    if (data.result == 'success') {
        data.data.forEach(ele => { console.log(ele.name); });
    }

}
//2. 회원 나이의 총합
{
    if (data.result == 'success') {
        let sum_age = 0;
        data.data.forEach(ele => {sum_age += parseInt(ele.age);});
        console.log('회원 나이의 총합: '+sum_age);
    }
}

//3. 남자회원의 나이 총합 출력하기
{       //foreach 사용 (변수 하나 추가로 사용해야함.)
    if (data.result == 'success') {
        let age = 0;
        data.data.forEach(ele => {if (ele.gender == '남') age+=parseInt(ele.age);});
        console.log('남자 회원의 나이 총합: '+age);
    }
}

//4. 남자회원, 여자회원을 분리하여 배열에 저장
{
    if (data.result == 'success') {
        let $boy=[];
        let $girl=[];
        data.data.forEach(ele => {
            if (ele.gender == '남') {$boy.push(ele);}
            else{$girl.push(ele);}
        });
        console.log($boy);
        console.log($girl);
    }
}
//5. A형 회원의 나이 총합 구하기
{
    if (data.result == 'success') {
        let $age=0;
        data.data.forEach(ele => {
            if (ele.blood == 'A') {$age+=parseInt(ele.age);}
        });
        console.log('A형 회원의 나이 총합: '+$age);
    }
}

//6. name이 이름3인 회원의 혈액형은?
{
    if (data.result == 'success') {
        data.data.forEach(ele => {
            if (ele.name == '이름3') {console.log('이름3인 회원의 혈액형: '+ele.blood);}
        });
    }
}

//7. 혈액형별 인원수 카운트
// 결과: {A: 2, B:1, O:1, AB:1}
{
    if (data.result == 'success') {
        const result= data.data.reduce((acc,ele)=> {
            // //같은 혈액형 프로퍼티 누적


            
        },{});
        console.log(`혈액형별 인원수: ${result}`);
    }
}

//8. 남성 회원의 평균 연령
{
    if (data.result == 'success') {
        let count=0;
        const avgOfAge= data.data.reduce((acc,ele,idx,arr)=>{
            if(ele.gender=='남') {
                count ++;
                return acc+parseInt(ele.age);
            }
            return acc+0;
         },0);
        console.log(`남자회원의 평균연령: ${avgOfAge/count}`);
    }
}
// //9. 나이가 가장 많은 회원의 혈액형은?
{
    if (data.result == 'success') {
        let bloodTypeOfTheOldest=data.data.reduce((acc,ele)=>{
            if(ele.age==acc>ele.age?acc:ele.age){

                return ele.blood; 
            }
        },0);
        console.log(`나이가 가장 많은 회원의 혈액형: ${bloodTypeOfTheOldest}`);
    }
}