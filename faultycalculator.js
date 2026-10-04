let a =Number(prompt("Enter first number: "));
let op=prompt("Enter operator (+,-,*,/ ): ");
let b=Number (prompt("Enter the second number : "));
let random=Math.random();
let result;
if (random<0.1){
    if (op=="+"){
        result=a-b;
    }
    else if (op=="-"){
        result=a*b;
    }
    else if (op=="*"){
        result=a/b;
    }
    else if (op=="/"){
        result=a+b;
    }

}
else {
    if (op=="+"){
        result=a+b;
    }
    else if (op=="-"){
        result=a-b;
    }
    else if (op=="*"){
        result=a*b;
    }
    else if (op=="/"){
        result=a/b;
    }
    else {
        result="Invalid operator";
    }
}
console.log("Result: ",result);