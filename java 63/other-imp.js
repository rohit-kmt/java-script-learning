let arr=[1,2,3,4,5];

// let arr1 = arr.forEach(element => {              //  !! will gives erroe !!
//     return element;
// });
// console.log(arr1);

// let arr1 = arr.map((e,index,array) =>{            // will makes an new array...
//     return e;
// })
// console.log(arr1);

// function greater(element){
//     if (element>2){
//         return true;
//     }
//     return false;
// }

// const greater = (element)=>{
//     if (element>3){
//         return true;
//     }
//     return false;
// }

// console.log(arr.filter(greater));

const sum =(a,b)=>{
    return a+b;
}

console.log(arr.reduce(sum));

