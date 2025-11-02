// if(5-"10"){ //gives zero which is zero in string false as zero is falsy
//     console.log("Hey man");
// }
// else{
//     console.log("false");
// }
// ;//it will subtract but when you do + it concatinate 
//string with digit - if - subracts and if + concatinate

// if(5-"6"){ //gives -1 which is not a falsy so Hey man prints
//     console.log("Hey man");
// }
// else{
//     console.log("false");
// }
//     keep in mind values which converts to falsy are - 0 NaN undefined false Null document.all

// var str = [1,2,3,4,5,6];

// str.forEach(function(value){
//     console.log(value+2); 
// })

// var obj = {
//     name: "bhuvan",
//     age: 20,
//     city: "Narmadapuram"
// }
// for(var key in obj){
//     console.log(key,obj[key]);
// }
let a = 11, b = 22;
let sum = a + b + a++ + b++ + ++a + ++b;
console.log(sum);
console.log(Math.max(1,1.1)); 