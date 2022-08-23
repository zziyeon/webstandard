// 객체 생성 방법
{
    //1. 객체 리터럴
    const person = {
        name: '홍길동', 
        age: 30,
    
        study(){
            console.log('공부하다');
        }
    }    
    person.study();
}
{
    //2. 생성자 함수 - 객체를 만들기 위한 함수
    function Person(name, age) {
        //인스턴스 데이터 프로퍼티
        this.name = name,
        this.age = age,

        //인스턴스 메소드 프로퍼티
        this.sleep = function() {
            console.log('자다');
        }
    }    

    //프로토타입 데이터 프로퍼티
    Person.prototype.location = '울산';
    //프로토타입 메소드 프로퍼티
    Person.prototype.study = function() {
        console.log('공부하다');
    }

    //정적 프로퍼티 메소드
    Person.nation = '한국';
    //정적 프로퍼티 메소드
    Person.eat = function() {
        console.log('먹다');
    }

    const person = new Person ('홍길동', 30);
    person.study();
    person.sleep();
    console.log(person.name, person.age, person.location)
    Person.eat();
    console.log(Person.nation);
}