// function CalcultrCardproce(num1) {
//     return num1;
// }

// console.log(CalcultrCardproce(2));


//rest oprator 
function CalcultrCardproce(...num1) {
    return num1;
}

console.log(CalcultrCardproce(2,4,6,7,8));

const user={
    username:"shoiab",
    price:199
}

function handelobject(anyobject){
    console.log(`Usernaem is  ${anyobject.username} and price is ${anyobject.price}`);
}
handelobject(user)

handelobject({
    username: "sambro",
    price:390
})