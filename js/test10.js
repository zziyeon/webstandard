const arr=[1,2,3];

//case 1) 일반 for문
let sum=0;
for(let i=0;i<arr.length;i++){
    sum +=arr[i];
}
console.log(sum);

//case 2)
sum=0;
for(let ele of arr){
    sum +=ele;
}
console.log(sum);

//case 3)
sum=0;
arr.forEach(ele =>sum+=ele);
console.log(sum);