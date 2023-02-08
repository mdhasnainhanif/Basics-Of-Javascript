// Variables

var first_name = "Muhammad";
var last_name = "Hasnain";

console.log("My Fisrt Name is " + first_name + " and My second name is " + last_name);


// Object

var detail = {
    name : "Hasnain",
    name_detail:{
        fname: "Muhammad",
        lname: "Hasnain"
    },
    email: "hasnain@gmail.com",
    phone: 123123123,
    age: 20,
}

console.log("My name is " + detail.name);
console.log("My email is " + detail.email);
console.log("My phone number is " + detail.phone);
console.log("My age is " + detail.age);


console.log("First Name", detail.name_detail.fname);
console.log("Last Name", detail.name_detail.lname);






// Variables

// var first_name = "Muhammad";
// var last_name = "Hasnain";

// console.log(
//   "My Fisrt Name is " + first_name + " and My second name is " + last_name
// );

// Object

// var detail = {
//   name: "Hasnain",
//   name_detail: {
//     fname: "Muhammad",
//     lname: "Hasnain",
//   },
//   email: "hasnain@gmail.com",
//   phone: 123123123,
//   age: 20,
// };

// console.log("My name is " + detail.name);
// console.log("My email is " + detail.email);
// console.log("My phone number is " + detail.phone);
// console.log("My age is " + detail.age);

// console.log("First Name", detail.name_detail.fname);
// console.log("Last Name", detail.name_detail.lname);

// Question 1

// function foo() {
//   var date = new Date();
//   console.log(date);
// }

// foo();

// Question 2

// function name() {
//     var fname = prompt('First Name')
//     var lname = prompt('Last Name')
//     alert(`Good Morning ${fname} ${lname}`)
// }
// name();

// Question 3

// function sum(){
//     var a = +prompt('Number 1')
//     var b = +prompt('Number 2')
//     return a + b;

// }

// var result = sum();
// console.log(result);

// Question 4

// function cal(val1, val2, opt) {
//     if(opt === "+"){
//         return val1 + val2
//     }
//     else if(opt === "-"){
//         return val1 - val2
//     }

//     else if(opt === "/"){
//         return val1 / val2
//     }

//     else{
//         return "Invalid Operator"
//     }
// }

// var a = +prompt("value 1")
// var b = +prompt("value 2")
// var c = prompt("OPT")

// var result = cal(a, b ,c);
// console.log(result);

// Question 7

// var i; 

// function fun() {
//   var num1 = +prompt("Start Number");
//   var num2 = +prompt("End Number");

//     let j = [];
//     for (i = num1; i <= num2; i++) {
//       j.push(i);
//     }
//     return j;
// }

// var res = fun();
// console.log(res);



// Promises 

// setTimeout(()=>{

//   function getStudentData() {
//     return new Promise((resolve, reject) => {
//         if (false) {
//             resolve('Resolve promis');
//         } else {
//             reject('Reject Promise');
//         }
//     });
//   }
  
//   getStudentData().then( (result) => {
//     console.log(result);
//   }).catch(err =>{
//     console.log(err)
//   });

// },2000)


var arr1 = ["one", "two", "three"]


var arr2 = arr1;
console.log(arr1);
arr2.push("four")
console.log(arr2);





