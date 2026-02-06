r=Math.random();
let a=prompt("Enter a Number : ");
let b=prompt("Enter another Number : ");
let op=prompt("add : 1 \n sub : 2 \n mul : 3 \n div : 4 ");

if (r< 0.5)
    {
    alert("false");
    if(op==1){
        alert(a-b);
    }
    else if(op==2){
        alert(a/b);
    }
    else if(op==3){
        alert(a+b);
        
    }
    else {
        alert(a*b);
    }    
    }

else{
    alert("true");
    if(op==1){
        alert(a+b);
    }
    else if(op==2){
        alert(a-b);
    }
    else if(op==3){
        alert(a*b);
        
    }
    else {
        alert(a/b);
    }

}