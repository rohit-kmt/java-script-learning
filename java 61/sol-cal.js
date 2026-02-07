r=Math.random();
let a=prompt("Enter a Number : ");
let op=prompt("operator");
let b=prompt("Enter another Number : ");

const operator={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"*",
}

if (r< 0.5)
{   alert("False")
    alert(`Result is : ${eval(`${a} ${operator[op]} ${b}`)}`);

}
else
{
    alert("True");
    alert(`Result is : ${eval(`${a} ${op} ${b}`)}`);

}