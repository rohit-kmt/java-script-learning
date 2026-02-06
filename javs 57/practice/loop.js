const object={
    harry :98, rohan : 70, aakash : 7 
}
let array=[ "harry","rohan","aakash"];
console.log(object[array[1]]);


for(let i=0;i< array.length;i++)
{
    const marks = object[array[i]];
    console.log("marks of "+ array[i] + " are : "+ marks);
}

// for (const key in object) {    
//     const element = object[key];
//     console.log("marks of "+ key + " are : "+element);
    
    
// }
