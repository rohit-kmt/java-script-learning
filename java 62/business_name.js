function random (min,max)
{
    let r = Math.floor((Math.random() * (max - min + 1))+ min);
    return r;
}

const adj=
{
    1:"crazy ",
    2:"Amazing ",
    3:"Fire "
}
const names=
{
    1:"Enigine ",
    2:"food ",
    3:"Garments "   
}
const end=
{
    1:"bros ",
    2:"ltd ",
    3:"hub "
    
}

let a=random(1,3);
let b=random(1,3);
let c=random(1,3);

console.log(a);
console.log(b);
console.log(c);
console.log(`Business Name Genareted : ${adj[a]} ${names[b]} ${end[c]}`);