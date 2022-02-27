    JavaScript Summary


1. Data and Structure type
     undefined, Boolean, String, Number, Object, Function, null

2. Variables

    let , const , var 
    var (global scope, function scope ()=>{}) ,  let and const(global scope, block scope {} );

3. Operators

    + , - , * , / , % , == , ===, && , || , ! , . , > , <

4. Conditional Statement 
    if , else , switch , ternary

5. function 

    function myFun() {

    } 

    // Aynomous function 

    () => {

    }

    // ES6 

    let myFun  = () => {

    }

    Built-in function 

    alert();
    console.log();

6. Object 

    let bio = {
        name: "aungaung",
        age : 33,
        is_male: true,
        walk: () => {
            console.log("aung aung is walking");
        }
    }

    dot  notation 
    bio.name // aungaung
    bio.walk()// method walk

    bracket notation

    bio['name']// aungaung
    bio['walk']() // method walk


7. Array

    const ordered  = [
        "aungaung",
        12,
        "black"
    ]

    array have many function 

    console.log(ordered[0]);
    ordered.length // 3
    ordered.push()
    ordered.unshift()
    ordered.pop()

    ordered.indexOf()

8. Loop

    for Loop
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }

    for (let x = 0 ; x < array.length ; x++) {
        console.log(x);
    }

    for in loop 

    use for object 

    let myBio = {
        name : "aung",
        age : 33
    }

    for (let propertie in myBio) {
        console.log(myBio[propertie]); // 
    }

    while loop

    while(x = true) {
        console.log(smth);
        x = false;
    }



9 . Error Handling

    try...catch

    let showChatBar = () => {
        for (const i = 0 ; i < 22 ; i++) {
            console.log(i);
        }
    }
    let showMain = () => {
        console.log("show Main");
    }
    let showNew = () => {
        console.log("show New");
    }
    showChatBar();// error occur so showMain() and showNew() will not execute
    showMain();//
    showNew();//

    try{
        showChatBar();// error occur but we handle with try catch so showMain() and showNew will execute
    } catch( err) {
        console.log (err );
    }

   
    showMain();//
    showNew();//

10. Most Use built-in method and functions 

    //String 
    let str = "abc";
    str.toLowerCase();
    str.toUpperCase();
    str.length;
    str.indexOf("b");

    //Number 

    let num1 = "10";
    num1.parseInt(num1, 10); // 10 is decimal system
    num1.toString();

    // Object 

    const customer = {
        name : "aungaung",
        eamil: "aung@gmail.com",
        gender : 'male'
    }
    Object.keys(customer);
    Object.values(customer);
    customer.hasOwnProperty("age"); // false
    customer.hasOwnProperty("email");// true

    // Array

    const cities = ["Yangon", "Mandalay", "Taunggyi"];

    cities.length;
    cities.pop(); // remove last element 
    cities.push("Beijing");
    cities.indexOf("Yangon");// 0
    cities.slice(0,3); new array ["Yangon","Mandalay"]
    cities.splice(0,2); ["Tuanggyi"] 
    cities.join(); Yangon,Mandalay,Taunggyi
    cities.filter(callback);
    cities.map(callback)