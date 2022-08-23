const str = '내 이름은 홍길동입니다';
console.log(str);

const name1 = '홍길동';
const str2='내 이름은 ' +name1 + '입니다';
console.log(str2);

//template literal
const str3 = `내 이름은 ${name1}입니다`
console.log(str3);

//taged template
const taged = (strings, exp1, exp2, exp3) => {
    console.log(strings);       //표현식을 제외한 글자들이 배열로 출력됨
    console.log(exp1, exp2, exp3);

    return `${exp1}-${exp2}`;
}

const taged2 = (strings, ...exp) => {
    console.log(strings);       //표현식을 제외한 글자들이 배열로 출력됨

    const str6 = exp.map((ele,i)=>`${ele}-${i}`).join();

    return str6;
}

const name2 = '홍길동';
const age= 30;
const blood = 'A';
const str4 = taged`내 이름은 ${name2}이고 나이는 ${age}입니다.`;
const str5 = taged2`1${name2}2${age}3${blood}4`;     //표현식을 구분자로 하여 문자열 출력됨
console.log(str4);
console.log(str5);