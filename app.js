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