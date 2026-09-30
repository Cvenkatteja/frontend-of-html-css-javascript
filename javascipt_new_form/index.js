// console.log(`hello`);
// console.log(`i like the pizza`);


// window.alert(`this is an alert`);

// document.getElementById(`myh1`).textContent=(`Hello`);
// document.getElementById(`myp`).textContent=`i like pizza`;
// document.getElementById(`myh1`).textContent = `How are you`;

// variable = A conatiner that stores a value.
//            Behaves as  if it  were the value it contains 

// expression is let x;
// assignment is x= 100;

// let x;
// x = 100; its is the first method to second method we the direct like the x=100; this like 

// console.log(x);

// let  age = 25;
// let price = 10.99;
// let gpa = 8.1;

// console.log(age);
// console.log(price);
// console.log(gpa);

// console.log(`my age is ${age} years old?`);
// console.log(`the item price is: $${price}`);
// console.log(`what is the gpa of your is , my gpa is ${gpa}!`);
// console.log(typeof gpa);

// strings

// let firstname = `brocode`;
// let myfood = `pizza`
// console.log(firstname);
// console.log(`this is the firstname of me ${firstname}`);
// console.log(`my favorite food is  ${myfood}`);


// booleans

// let online = true;
// console.log(online);
// console.log(` my frd is  in ramu in online : ${online}`)

// document.getElementById(`myp1`).textContent = firstname;
// document.getElementById(`myp1`).textContent = `this is the food of the ${firstname}`;
// we can also write the same for the the variable and string ,boolean also;

// let students = 30;

// we can write normal type

// students = students + 1;

//  augmented type
// students += 1

// incremant and decerment types
// students++;
// students--;
// console.log(students);

/* user inputs*/

/* firstmethod*/
// let username;

//  username = window.prompt(`what is your name ?`);

// console.log(username);
// 2nd time
//  let myname;

//  myname = window.prompt("what is my name?");

//  console.log(myname);


/* second method*/
// firsttime
// let username;

// document.getElementById(`mysubmit`).onclick = function(){
//     username = document.getElementById(`myinput`).value;
//     console.log(username);
// }


// let username;

// document.getElementById('mysubmit').onclick = function(){
//     username=document.getElementById(`myinput`).value;
//     document.getElementById(`myh1`).textContent =`hello ${username}`;
// }

// let username;
// document.getElementById(`mysubmit`).onclick = function(){
//     username=document.getElementById(`myinput`).value;
//     document.getElementById(`myh1`).textContent = `hello ${username}`;
// }

/*type conversion*/

// ==> the processof the changing the datatype of a value another
//     (string , numbers , booleans) 

// let age = window.prompt("how old are you?");

// age = Number(age);

// age+=1

// console.log(age , typeof age);

// let x= "pizza";
// let y ="pizza";  /** i forgot to put the commas to it */
// let z = "pizza";

// x=Number(x);
// y=String(y);
// z=Boolean(z);


// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/* const */

// const ==> A variable that can't be changed

/*math */
// ==> the defination  of the math is  a bulit in  object that provides the collection of the properties and methods

// for example

// let x = 4;
// let y = 2;
// let z;
// let z = 2;

// z= Math.round(x);
// z =Math.floor(x);
// z =Math.ceil(x);
// z = Math.trunc(x);
// z= Math.pow(x, y);

// let max = Math.max(x,y ,z);

// console.log(max);


/*random number generator  */

// to use the random number we need to  use the math.random

// let randomPut = Math.random();
// console.log(randomPut);


// let randomnum = Math.floor(Math.random() * 6) +1 ;
// console.log(randomnum);

// let max= 100;
// let min = 0;

// to aviod this 
// let randomgig = Math.floor(Math.random() * max) + min;
// console .log(randomgig);

// let randomgig = Math.floor(Math.random() * (max -min)) + min;
// console .log(randomgig);

/*if statement */
// ==> if a condtion is True ,excute some code ,if not do something else

// let age = 13;

// if(age >= 18){
//     console.log(`U are permitted for the site access`);
// }
// else{
//     console.log(`U are not reached the citeria  to access the site `);

// }

// let age = 20;

// if(age <= 100){
//     console.log("u are eligble for the cost renewal");

// }
// else if(age <= 18){
//     console.log("u are just eligble for cost renewal");

// }
// else{
//     console.log("uare not permited to it ");

// }

/*ternary operator */
// ==> it is an shortcut method for if{} and else{}
    // statement helps to assign a variable based on a condtion like 
    // conditon ? codeiftrue :codeiffalse;
// for example:

// let age = 12;
// let message = age <=20 ? "you are an adult":"you are not adult";
// console.log(message);

// let time = 22;
// let message1 = time < 12 ? "good morning "  : time < 24 ?  "good night" :"good afternoon";
// console.log(message1);
/*switch */
// ==> the switch is defined as can be efficent repalcement for  the elseif sttatement
// for example 

// let day = 1;
// switch(day){
//     case 1:
//         console.log("it's an monday");
//         break;
//     case 2:
//         console.log("it's an tuesday");
//         break;
//     case 3:
//         console.log("it's an wensday");
//         break;

// }

/* string slicing */
// ==> the string is defined as the creating the substring from  a portion 
// of an  another string is known as the string slicing

// const userName = "venkat teja";

// let fullName = userName.slice(0, 6);
// let lastName = userName.slice(7,13);

// console.log(fullName);
// console.log(lastName);


// const username = "venkat teja";

// let firstname = username.slice(0, username.indexOf(" "));
// let lastname = username.slice(username.indexOf(" "));


// console.log(firstname);
// console.log(lastname);



// const email = "Brocode@gamil.com";

// let firstname =  email.slice(0, email.indexOf("@"));
// let lastname = email.slice(email.indexOf("@") +1);

// console.log(firstname);
// console.log(lastname);

// -----method chaining ------
// ==> the method chaining is defined as  calling  one method after another
// in one contionuos line of a code

// ----without method chaining-------

// let username = window.prompt("enter your name : ");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();


// // username = username.trim();
// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();
// username = letter + extrachars;

// console.log(username);

// ---- with method chaining-------

// username = username.trim().charAt(0).toUpperCase()+ username.trim().toLowerCase().slice(1);
// console.log(username);

// ------logical operator --------
// ==> used to combine or maniplate the boolean value

// const temp = 43;

// if(temp > 0){
//     console.log("the weather is good");


// }
// else if(temp <=30){
//     console.log("the weather is bad ");

// }
// else{
//     console.log("the weather is error ");
// }


// const temp= -200;

// if(temp > 0 && temp <=30 ){
//     console.log("the wethear is good ");

// }
// else{
//     console.log("the weather is error ")
// }

// 

// ------while loop ------
// ==> repeat some code while some  condtion is true 

// let username = "venkatteja";

// while (username===""){
//      console.log("there is must be the varibles ");

//  }

// console.log("hello ${username}");

// let loggedin = false;
// let username;
// let password;

// while(!loggedin){
//     username = window.prompt("enter your name;");
//     password = window.prompt("enter your password");

//     if (username === "myusername" && password === "mypassword"){
//         loggedin = true;
        
//         console.log("your are logged in");
//     }
//     else{

//         console.log("invalid cerdtional this is the wrong ");
//     }
// }

// let loggedin1 = true;
// let username1;
// let password1;

// do{
//     username1 = window.prompt("enter your name;");
//     password1 = window.prompt("enter your password");

//     if (username1 === "myusername" && password1 ==="mypassword"){
//         loggedin1 = true;
        
//         console.log("your are logged in");
//     }
//     else{
        
//         console.log("invalid cerdtional this is the wrong ");
//     }
// }while(!loggedin1)

// ------for loop ------
// ==> repeat some code in limited amount of time

// for(let i=1;i<=2;i++){
//     // console.log("hello world");
//     console.log(i);

// }

// we can also use the break  and continue in the for loop 

// -------mini project-------

// let minnum = 1;
// let maxnum = 100;
// let answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;


// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`enter the number between the ${minnum} - ${maxnum}`);
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert("plaease enter a valid numbber");
//     }
//     else if(guess < minnum || guess >maxnum){
//         window.alert(" try again please the repeat the luck")
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert(`too low ! try again!`);

//         }
//         else if(guess > answer){
//             window.alert(`too high !  try again !`);

//         }
//         else{
//             window.alert(`correct answer !  you have  socred  the ${answer} and the attempts are ${attempts}`);
//             running = flase;
//         }
//     }

// }
// ------function ------
// ==>  a section of the reusable code ,declare the code once, use it whenever you want, 
// call the function to excute the code 
// forr example

// function happybirthday(username, age){
//     console.log(`a very happy birthday to me `);
//     console.log(`a very happy birth day to ${username}`);
//     console.log(`a very happy to the new age of ${age}`);

// }

// happybirthday("venakt teja",23);
// happybirthday();

// function add(x,y){
//     let result = x+y;
//     return result;
// }
// console.log(add(3,4));

// function add(x,y){
//     return x+y;

// }
// console.log(add(2,3));

// function subtract(x,y){
//     return x-y;

// }
// console.log(subtract(8,4));
// same like for the divide ,mutliply, iseven,isodd etc for email for example....
// -----array------
// ==> a variable like stucture that can hold more than 1 value

// let fruits = ["apple", "banana","orange","guvava"];


// fruits[3] = "coconut";
// fruits.push("berry")
// fruits.pop();
// fruits.unshift("bangles");
// fruits.shift();

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numbs = fruits.length;
// console.log(numbs);
// we can use the for loop also 
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])

// }

// -------spread operator ------
// ==> "..."allows an iterable such as  an string or array to be exapnded into sperate elements(unpacks the element)

// let number = [1,2,3,4,5];
// let maxnum = Math.max(...number);
// let minnum = Math.min(...number);
// console.log(maxnum);
// console.log(minnum);

// let fruits = ["apple", "banana","orange","mango"];
// let vegetables = ["brinjal","avacado","leafs"];


// let newfruits = [...fruits,...vegetables , "agro","pineapple"];

// console.log(newfruits);


// -------rest parameters ------
// ==> (...rest) allow an function work with variable number of arguments
// by bundling them into array is know as the rest parameter
// Note ==> this work only in the function only

// function openbox(...foods){
//     console.log(...foods);
// }
// const food1 = "pizza";
// const food2 = "guvava";
// const food3 = "orange";
// const food4 = "mango";
// openbox(food1,food2,food3,food4);

// function sum(...numbers){

//     let result = 0;

//     for(let number in numbers){
//         result += number;
//     }
//     return result;

// }
// const total = sum(1,);
// console.log(`the total spend is $${total}`);

// function getavarage(...numbers){
//     let result = 0;
//     for(let number in numbers){
//         result += number;
//     }
//     return result / numbers.length;

// }
// const total = getavarage(75,50,80 ,100);
// console.log(total);


// function combinestrings(...strings){
//     return strings.join(" ");

// }
// const fullname = combinestrings("mrs","spngebob","aquarepants","|||");
// console.log(fullname);

// ------callbaack-------

// ==> A function that  is passed  an arugment to another function

// function display(element){
//     console.log("hello");
//     element();

// }

// function indisplay(){
//     console.log("welcome");
// }

// display(indisplay);

// function page(wages){
//     console.log("venkat");
//     wages();


// }
// function inpages(){
//     console.log( "how much you are wage!");
// }

// page(inpages);

// function hello(teeth){
//     console.log("leave");
//     teeth();
    

// }

// function version(){

//     console.log("leave immediatly");

// }
// hello(version);

// function rage(element ,x ,y){
//     let rog = x + y;
//     element(rog);


// }
// function result(rog){
//     console.log(`the result is : ${rog}`);

// }

// rage(result, 2 , 4);


// function  multiply( element , x ,y){
//     let rig = x * y ;
//     element(rig);


// }

// function rog(rig){
//     console.log(`the result of the multiple : ${rig}`);
// }

// multiply(rog , 3,4);


// --------forEach --------
// ==> it is a method used to iterate the each elements of array and apply a specified
// function(callback) to each  element is known as the forEach method

// syntax==>array.forEach(callback)

// let numbers = [1,2,3,4,5,6];

// numbers.forEach(double);
// numbers.forEach(sum);
// numbers.forEach(display);

// function display(element){
//     console.log(`the displayed elements is :$${element}`);
    
// }

// function double(recent, place, value){
//     value[place] = recent * 2;

// }

// console.log(numbers);  /* ==> it is need to done to run the forEach method  */
// function sum(element, place , value){
//     value[place] = element + 1;

// }

// let fruits  = ["apple ", "banana", "orange" ,"mango"];

// fruits.forEach(toddle);
// fruits.forEach(indisplay);
// fruits.forEach(display);

// function display(element){
//     console.log(element);
// }

// function indisplay(element ,index, array){
//     array[index] = element.toUpperCase();
// }

// function toddle(element,index,array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);

    
// }


// -------.map() ----------
// ==> Accepts  that  callback and applies that function to each element 
// of an array , then  return  a new array is known as the map() method.

// let numbers = [1,2,3,4,5,6];



// function applies(element){
//     return Math.pow(element ,2);
// }

// function sum(elements){
//     return elements + 2;
    
// }
// let bumbers = numbers.map(applies);
// console.log(bumbers);

// let sumes = numbers.map(sum);
// console.log(sumes);





// const students =["venkat", "teja", "ramesh","raju"];

// const studentlower = students.map(lowercase);
// console.log(studentlower);

// const studentupper = students.map(uppercase);
// console.log(studentupper); 

// function uppercase(element){
//     return element.toUpperCase();

// }

// function lowercase(returns){
//     return returns.charAt(0).toUpperCase() + returns.slice(1);


// }

// -------.filter() -------
// ==> creates  new array by filterling out the elements from the existing array 
// is known as the filter() method

// const number = [1,2,3,4,5,6,7,8];

// let bums = number.filter(isodd);
// console.log(bums);

// let numbers = number.filter(isEven);
// console.log(numbers);

// function isEven(element){
//     return element % 2 === 0;

// }
// function isodd(elements){
//     return elements % 2 !==0;

// }

// const age = [23,45,12,18,19,30,67,89,11];

// let childs = age.filter(ischild);
// console.log(childs)

// let adults = age.filter(isadult);
// console.log(adults);

// function isadult(element){
//     return element > 18;

// }
// function ischild(element){
//     return element <= 18;


// }

// another example

// let fruits = ["apple","banana","oranges","guvavabanana","mango"];

// let shortwords = fruits.filter(getshort)
// console.log(shortwords);

// let longwords = fruits.filter(getlong);
// console.log(longwords);

// function getshort(element){
//     return element.length <=7;
// }

// function getlong(element){
//     return element.length >=8;

// }

// ------.reduce()------
// ==> it reduce the elements of an array to a  single value  

// let num = [2,3,33,5,66,84,92,19];

// let total =  num.reduce(sum);
// console.log(`$${total.toFixed(2)}`);

// function sum(accumlator,element){
//     return accumlator + element;

// }

// let grades = [33,48,58,98,87,67,45];

// let maxmium = grades.reduce(maxgrade);
// console.log(maxmium);

// let minmium = grades.reduce(mingrade);
// console.log(minmium);

// function maxgrade(accumlator,orange){
//     return Math.max(accumlator,orange);
// }
// function mingrade(accumlator,orange){
//     return Math.min(accumlator,orange);
// }

// -----function expression-------
// ==> a way to define  the functions as values (or) variables

// let numb = [1,2,3,4,5,6,7];

// let numbers = numb.map(function(element){
//     return element + 2;
// });
// console.log(numbers);

// const bubs = [22,3,4,5,6,7,8,9,1];


// let bumbers = bubs.filter(function(element){
//     return element % 2===0;
// });
// console.log(bumbers);
// same like for the reduce ,call back etc....

// -------Arrow function--------
// ==> a concise way to write the function expression good for simple 
// way function that can used for the once is known as the arrow function 
// the syntax  is (parameters) __=>__ some code 

// const hello = () => console.log("welcome");
// hello();

// const ramu = (name) => console.log(`my name is ${name}`);
// ramu("venkat");
// // more than two  inputs needed means we use 

// const ramu1 = (name,age) => {console.log(`my name is ${name}`)
//                             console.log(`you are ${age} old now`)};
// ramu1("venkat",24);


// const num = [1,2,3,4,5,6,7];

// let numb = num.map((element) => Math.pow(element,2));
// console.log(numb);

// let numbs = num.filter((element) => element % 2 ===0);
// console.log(numbs);

// let number = num.reduce((elements,union) => elements + union);
// console.log(number);

// ------- objects --------
// ==> the objects in the javascript is defined as the a collection of 
// related properties  and/or methods can represent real world  objects
// like(places,persons etc) is known as the javascriptobject
// syntax is object = {key:value,function()=> this are the method}

// let person = {
//     firstname : "raju",
//     lastname : "gopal",
//     age : 30,
//     isEmployed : true,
//     sayhello : function() {console.log("how are you form the begining")}
    
// }

// let person1 = {
//     firstname : "ramu",
//     lastname : "gopal",
//     age : 45,
//     isEmployed : false,
//     eat : function() {console.log("what are you  doing in the class when you  are batch is not in the class")}

// }

// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.age);
// console.log(person.isEmployed);
// person.sayhello()

// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.eat();

// ------- this method ---------
// ==> reference to the object where 'this' is used
// (the object depends on the immmediate context)
// person.name = this.name

// for example

// let person1 = {
//     name : "venkat",
//     age : 23,
//     favfood : "briyani",
//     sayhello : function(){console.log(`my name is ${this.name} and my age ${this.age} old! now `)},
//     foods : function(){console.log(`my favfood is ${this.favfood} i love it so much`)}
// }

// person1.sayhello();
// person1.foods();

// let person2 = {
//     name : "kesava",
//     age : 22,
//     favfood : "bamboo rice with chicken",
//     sayhello : function(){console.log(`my name is ${this.name} and my age ${this.age} old! now `)},
//     foods : function(){console.log(` i like the  ${this.favfood} i love it so much`)}
// }
// person1.sayhello();
// person2.foods();

// =========constructor =======
// ==>it is  special method for defining the porperties and methods 
// objects
// function car(make,model,year,color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
//     this.drive = function(){ console.log(`The car driven by the ${this.model} of the year biggest sale ones`)}
// }

// const car1 = new car("Ford ","mustang",2022,"orange");
// const car2 = new car("vegan","bowler",2033,"puprle");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive();
// ---------class------------
// ==>(ES6 feature ) a provides more structured and cleaner way to work
// work  with objects compared to the tradional constructor function is known
// as the class  method in the object

// class product{
//     constructor(product,price){
//         this.product = product;
//         this.price = price;

//     }

//     displayproduct(){
//         console.log(`product : ${this.product}`);
//         console.log(`price : $${this.price.toFixed(2)}`);

//     }

//     CalculateTotal(saletaxes){
//         return this.price + (this.price * saletaxes);
//     }
    
// }

// const saletaxes = 0.05;

// const product1 = new product("shirt",19.99);
// const product2 = new product("pants",20.50);



// product1.displayproduct();


// const total = product1.CalculateTotal(saletaxes);
// console.log(`the price with include the taxes: $${total}`);


// class person{
//     constructor(name,place){
//         this.name = name;
//         this.place = place;

//     }

//     displayArea(){
//         console.log(`The name of the person is : ${this.name}`);
//         console.log(`The area of that person is ${this.place}`);

//     }
// }

// const display1 = new person("venkatteja","tadipathri");

// display1.displayArea(); 

// ---------static--------
// ===> a keyword that defines properties and methods that belongs
// to the class itself rather than tthe objects created from the class
// (class owns anything static , not the objects)
// example 1;
// class multiutli{
//     static PI = 3.1457;

//     static getDiameter(radius){
//         return radius * 2;

//     }

//     static getcircumfrence(radius){
//         return 2 *this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI *radius * radius ; 

//     }

// }
// console.log(multiutli.PI);
// console.log(multiutli.getDiameter(10));
// console.log(multiutli.getcircumfrence(25));
// console.log(multiutli.getArea(10));
// example 2;

// class person { 

//     static userCount = 0;

    
//     constructor(username){
//         this.username = username;
//         person.userCount++;
        
//     }
//     sayhello(){
//         console.log(`hello  my name is the ${this.username}`);

//     }
//     static getuserCount(){
//         console.log(`the users in the online are ${person.userCount}`);
        
//     }
// }

// const person1 = new person("venkatteja");
// const person2 = new person ("ramesh");

// person1.sayhello();
// person2.sayhello();


// console.log(person1.username);
// console.log(person.userCount);
// person.getuserCount();

// -------inheritance--------
// ==> Allows a new class to inherit the porperties and methods from 
// the existing class (parent => child) helps with code reuseablity

// class animal{
//     alive = true;

//     eat(){
//         console.log(`The ${this.name} is eating the grass`);

//     }
//     sleep(){
//         console.log(`The ${this.name} is sleeping`);

//     }

// }

// class rabbit extends animal{
//     name = "rabbit";

// }
// class fish extends animal{
//     name = "fish";

// }
// class hawk extends animal{
//     name= "hawk";

// }

// let Rabbit = new rabbit()
// let Fish  = new fish()
// let Hawk = new hawk()


// console.log(Hawk.alive);
// Hawk.eat();
// Hawk.sleep();


// console.log(Rabbit.alive);
// Rabbit.eat();
// Rabbit.sleep();

// console.log(Fish.alive);
// Fish.eat();
// Fish.sleep();
// ==========super===========
// --> A keyword  is used in the classes to  call the  constructor 
// or access the porperties and methods of the parent(superclass) is known as the super method
// this = this object
// parent = the parent

// class  objects{
//     constructor(name,price){  /*now using the super keyword */
//         this.name =name;
//         this.price = price;

          
//     }

//     con(lerel){
//         console.log(`this is the product ${this.name} maintain the sub ${lerel}`);
//     }

// }

// class product extends objects{
//     constructor(name,price,quantity){
//         super(name,price);
//         // this.name = name;
//         // this.price = price;
//         this.quantity = quantity;

//     }

//     pro(){
//         console.log(`This product  name is : ${this.name}`);
//         super.con(this.quantity);

//     }




// }

// class shape extends objects{
//     constructor(name,price,quality){
//         super(name,price);
//         // this.name= name;
//         // this.price = price;
//         this.quality = quality;

//     }
//     rpo(){
//         console.log(`This product name is : ${this.name}`);
//         super.con(this.quality);
        
//     }




// }

// class joint extends objects{
//     constructor(name, price, shape){
//         super(name,price);
//         // this.name = name;
//         // this.price = price;
//         this.shape = shape;

//     }
//     gpo(){
//         console.log(`This product name is :  ${this.name}`);
//         super.con(this.shape);
        
//     }



// }

// let product1 = new product("videotrap",20.99,2);
// let shape1 = new shape("triangle",45.89,"strong");
// let joint1 = new joint("hexagonal",6789.98,"varient");

// product1.pro();
// console.log(product1.name);
// console.log(product1.price);
// console.log(product1.quantity);

// shape1.rpo();
// console.log(shape1.name);
// console.log(shape1.price);
// console.log(shape1.quality);

// joint1.gpo();
// console.log(joint1.name);
// console.log(joint1.price);
// console.log(joint1.shape);

// -----------getter and  setter --------------
// ==> getter : A special method that makes the porperty readable
// ==> setter : A special method that makes the porperty writeable
// validate and modify the values when modifying the porperties


// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;


//     }

//     set width(newwidth){
//         if(newwidth > 0 ){
//             return this._width = newwidth;

//         }
//         else{
//             console.error("width need to be postive number");
//         }
//     }

//     set height(newheight){
//         if(newheight > 0 ){
//             return this._height = newheight;    
//         }
//         else{
//             console.error("lenght must  need to be the postive number");

//         }
//     }

//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;

//     }
//     get area(){

//          return this._width * this._height;
//     }



//  }

// let rectangle = new Rectangle(2,3);
/*we can access in the another type also  */
// rectangle.width = 3;
// rectangle.height = 5;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// --------- destructuring ----------
// extract values from  arrays and objects , then assign them to the 
// variables in a conveient ways is known as the destructuring
// the two ways in the destructuring
// first one -> [] = to perform the array destructuring
// second one -> {} = to preform the objects destructuring

// first example
// let a= 1;
// let b = 3;

// [a,b] = [b,a]

// console.log(a);
// console.log(b);

// second example

// let fruits = ["apple","banana","orange","guava","redapple"];

// [fruits[1],fruits[4]] = [fruits[4],fruits[1]]

// console.log(fruits)

// let colors1 = ["red","orange","blue","white","yellow"];

// [colors1[2], colors1[3]] = [colors1[3],colors1[2]]

// console.log(colors1);


// third example

// let colors = ["red","orange","blue","white","yellow"];

// let [firstcolors,secondcolor,thirdcolor,fourthcolor] = colors

// console.log(colors);

// fourth example
// object type model

// let person = {
//     firstname :"venkat",
//     lastname : "ramu",
//     age : 32,
//     job : "fry cook"

// }
// let person1 = {
//     firstname : "sponge",
//     lastname : "bob",
//     age:45,
// }

// let { firstname,lastname,age,job="unemployed" } = person1

// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(job);

// fifth example
// using the function variable


// function  displayperson({firstname,lastname,age,job}){
//     console.log(`name : ${firstname} ${lastname}`);
//     console.log(`age : ${age}`);
//     console.log(`job : ${job}`);

// }
// let person3= {
//     firstname :"venkat",
//     lastname : "ramu",
//     age : 32,
//     job : "fry cook"

// }
// let person4= {
//     firstname : "sponge",
//     lastname : "bob",
//     age:45,
// }

// displayperson(person3);

// ------nested objects-------
// ==> objects inside of another object is known as the nested object
//  It allows to represent the more complex data structure in which the child 
//  object encolsed with  parent object

// let person1 = {
//     firstname : "venkat",
//     lastname : "babu",
//     age : 24,
//     job : " gds post",
//     address:{
//         street : "124 kalyan str..",
//         city : "north  state",
//         country : "india"

//     }
// }

// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1.age);
// console.log(person1.job);
// console.log(person1.address.street);
// // using the for loop method

// for( let persons in person1.address){

//     console.log(person1.address[persons]);

// }

// // second example

// class object1{
//     constructor(firstname,lastname,age,...objects){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.objects = new object2(...objects);


//     }
// }

// class object2{
//     constructor(street,city,country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// let object5 = new object1("venkat", "teja",32,"venky colony street",
//                          "madhya pradesh city","india")
// console.log(object5.firstname);
// console.log(object5.lastname);
// console.log(object5.objects);
// console.log(object5.objects.street);

// class person{
//     constructor(firstname,lastname,age,...address){
//         this.firstname =firstname;
//         this.lastname =lastname;
//         this.age =age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(city,country){
//         this.city = city;
//         this.country = country;
//     }
// }

// let persons = new person("venkat","teja",89,"hyd","india");

// console.log(persons.firstname);
// console.log(persons.address);
// console.log(persons.lastname);
                    
// ------arrays of objects in javascript--------------

// let fruits = [{name:"apple",color:"red",calories:96},
//               {name:"banana",color:"yellow",calories:159},
//               {name:"orange",color:"orange",calories:59},
//               {name:"pineapple",color:"yellow",calories:89},
//               {name:"guava",color:"green",calories:78},
//               {name:"redapple",color:"purple",calories:246}];

// console.log(fruits[1].name);
// fruits.push({name:"papaya",color:"yellow",calories:98});
// fruits.pop();
// fruits.splice(1,2);

// console.log(fruits);

// ======forEach=======

// fruits.forEach(fruit => console.log(fruit));

// =======map()=======
// const fruitname = fruits.map(fruit => fruit.name);

// console.log(fruitname);

// const fruitcolor = fruits.map(fruit => fruit.color);
// console.log(fruitcolor);

// let fruitcalories = fruits.map(fruit => fruit.calories);
// console.log(fruitcalories);

// =====filter=====

// let fruityellow = fruits.filter(fruit => fruit.color === "yellow");
// console.log(fruityellow);

// let  fruitcolor = fruits.filter(fruit => fruit.color ==="orange");
// console.log(fruitcolor);

// let fruitcalorie = fruits.filter(fruit => fruit.calories  >= 100);
// console.log(fruitcalorie);


// let fruitcalorie1 = fruits.filter(fruit => fruit.calories  <=100);
// console.log(fruitcalorie1);

// ======reduce=========

// const maxfruit = fruits.reduce((max,fruit) => fruit.calories > max.calories ? 
//                                fruit:max);
// console.log(maxfruit);
// const minfruit = fruits.reduce((min,fruit) => fruit.calories < min.calories
//                                ?fruit : min);

// console.log(minfruit);

// --------sort()---------
// ==> Method used to store the elements of an array in place
// sorts elemnts in  strings are in lexicographic,not alphabetical
// lexicographic =(alphabet + numbers + symbols)as string

// let fruits = ["apple", "banana","orange","kiwi","guava","redapple"];

// fruits.sort()

// console.log(fruits);

// let number = [1,101,2,3,48,9,4,5,8];

// number.sort((a ,b) => a- b );


// console.log(number);

// const animal = [{name:"dog",age:25,skill:"sniffing",speed:34},
//                 {name:"cat",age:23,skill:"flexing",speed:65},
//                 {name:"bird",age:12,skill:"killing",speed:80}];


// animal.sort((a,b) => a.age - b.age);

// console.log(animal);

//-------dates---------
// ==> objects that contain values that represent the date and time 
// these dates objects can be changed and formated

// let date = new Date();

// console.log(date);

// date(year,month,day,hour,mintue,second,ms)

// let date1 = new Date(2024,3,24,1,22,55,59);
// console.log(date1);


// let date2 =  new Date(170000000000);
// console.log(date2)

// const date =  new Date()

// const year = date.getFullYear();
// const month = date.getMonth();
// const  day = date.getDay()



// console.log(year);
// console.log(month);
// console.log(day);
// we can also set the date and time by using the set method
// ----------closure---------
// ==> A function defined inside the another function
// the inner function has the access to  the varibles and scopes of
// outer function 
// allows for  private variables and state maintainence
// it is used in the js frameworks : like react ,vue,angular


// function outer(){

//     let message = "hello"
//     function inner(){

//         console.log(message);
    
//     }
//     inner();
    
// }

// outer();

// function displaycounter(){

//     let count = 0;

//     function increment(){
//         count ++;
//         console.log(`the count is icremented to : ${count}`);
    
//     }
    
//     function getCountValue(){
//         return count;
//     }

//     return {increment ,getCountValue}

// }

// let counter = displaycounter();


// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`the count value  is  : ${counter.getCountValue()}`);

// function game(){

//     let score = 0;
    
//     function increasescore(point){
//         score += point;
//         console.log(`+${score}pts`)
    
//     }
//     function  decreasescore(point){
//         score -= point;
//         console.log(`-${score}pts`);
    
//     }
//     function getscore(){
//         return score;
//     }

//     return {increasescore,decreasescore,getscore}

// }

// let scores = game();


// scores.increasescore(5);
// scores.increasescore(6);

// scores.decreasescore(3);

// console.log(`the total score is : ${scores.getscore()}`);

// --------settimeout()---------
// ==>function  in javascript that allow you to  shecdule the 
// exceution  of a function after an amount of time (milliseconds) 
// times are apporximate(varies based on the workloadof the javascript env.)
// is known as the settimeout().
// the syntax 
// setTimeout(callback,delay);

// function mageback(element){
//     console.log("hello welcome back again for the pratice");
//     element;
    
// }

// setTimeout(mageback,3000);

// setTimeout(() => console.log("hello") ,3000);
// --------element selector ----------
// ==> method used to select target and manipulate html elements
// they allow to select one or multiple  html element from the DOM() 

// document.getElementById()      =>element or null
// document.getElementsByClassName()    =>HtmlCollection
// document.getElmentsByTagName()       =>Html Collection 
// document.querySelector()  =>firstelement or null
// document.querySelectorAll()      =>Nodelist

// ==== getelementById==========

// const myheader = document.getElementById("my-header");


// myheader.style.backgroundColor = "yellow";

// ====second method ==========

// const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "yellow";


// for(let fruit of  fruits){
//     fruit.style.backgroundColor = "yellow";
// }

// Array.from(fruits).forEach(fruit =>{
//     fruit.style.backgroundColor = "yellow";
// })

// ===third method======

// const myheader = document.getElementsByTagName("h1");
// const fruits = document.getElementsByTagName("div");

// myheader[0].style.backgroundColor = "yellow";

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "lightgreen";
// }


// =====fourth method ========

// const fruits = document.querySelector(".fruits");

// fruits.style.backgroundColor = "yellow";

// note: => it only select the first element and we can use the tag names also

// ======fifth method ======

// const fruits = document.querySelectorAll(".fruits");

// fruits[0].style.backgroundColor = "yellow";

// note its is also same like the forth method 


// ----------DOM navigtion------------
// ==> the process of  navigating to the structures of html document
// using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// const element = document.getElementById("fruits");

// const firstchild = element.firstElementChild;

// firstchild.style.backgroundColor = "yellow";

// const ulelements = document.querySelectorAll("ul");

// ulelements.forEach(ulelement =>{
//     const firstchild = ulelement.firstElementChild;
//     firstchild.style.backgroundColor = "yellow";
// })

// note : ==> similar code for the  other methods in the Dom navigation

// -------eventListener-------
// ==> listen to  specfic events to create the interactive webpages 
// events : click , mouseover,mouseout.etc
//              .addEventListener(event,callback);


// firstmethod

// const mybox = document.getElementById("mybox");

// function callback(event){
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "click me ouch! 😵 "
// }

// mybox.addEventListener("click",callback);

// second method

// const mybox = document.getElementById("mybox");
// const mybutton = document.getElementById("mybutton");


// mybox.addEventListener("click",event =>{
//     event.target.style.backgroundColor = "red";
//     event.target.textContent= "Dead ☠️";

// });

// mybox.addEventListener("mouseover",event =>{
//     event.target.style.backgroundColor = "beige";
//     event.target.textContent= "ouch! 😵";
    

// });

// mybox.addEventListener("mouseout",event =>{
//     event.target.style.backgroundColor = "blue";
//     event.target.textContent =  "click me 😁";
// });

// mybutton.addEventListener("click",event =>{
//     mybox.style.backgroundColor = "red";
//     mybox.textContent= "Dead ☠️";

// });

// mybutton.addEventListener("mouseover",event =>{
//     mybox.style.backgroundColor = "beige";
//     mybox.textContent= "ouch! 😵";
    

// });

// mybutton.addEventListener("mouseout",event =>{
//     mybox.style.backgroundColor = "blue";
//     mybox.textContent =  "click me 😁";
// });

// =====events : keydown,keyup,or arrow word =======

// const mybox = document.getElementById("mybox");

// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown" , event =>{

//     if(event.key.startsWith("Arrow")){
//         event.preventDefault();

//         switch(event.key){
        
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;


            
//         }
//         mybox.style.top = `${y}px`;
//         mybox.style.left = `${x}px`;
//     }
// });

// ------------callbackhell()---------
// ==> situation in javascript callback  are nested  with another callbacks 
// to the degree where the code is diffcult to read old pattern to handle is 
// asynchrounces function use promsies + async/await to avoiod the callbackhell

// function task1(element){
//     setTimeout(() =>{
//         console.log("hello  first task1 is completed");
//         element();
//     },2000);
// }

// function task2(element){
//     setTimeout(() => {
//         console.log("the task2 is completed ");
//         element();
//     },3000);

// }
// function task3(element){
//     setTimeout(() => {
//         console.log("the task3 is completed ");
//         element();
//     },1.500);

// }

// function task4(element){
//     setTimeout(() => {
//         console.log("the task4 is completed ");
//         element();
//     },4000);

// }





// task1(() =>{
//     task2(() =>{
//         task3(() =>{
//             task4(() =>{
//                 console.log("the task are completed all ")
//             })

//         });
//     });
// });


// ---------promise ---------
// ==> a object that manages the asynchronous operations wrap  a promise
// object around the  {asynchrounous code}," i promise to return  the  value",
// pending =>resolved or rejected".new promise((resolve,reject) => 
    // asynchrouos code).

// function walkdog(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             const dogwalked=true;

//             if(dogwalked){
//                 resolve("The dog is walked ");
//             }
//             else{
//                 reject("The task is not completed");
//             }
//         },3000);

//     });

// };

// function cleanthekichen(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             const cleanedkichen=true;

//             if(cleanedkichen){
//                 resolve("The kichen is cleaned ");
//             }
//             else{
//                 reject("The task is not completed");
//             }
//         },3000);

//     });

// };

// walkdog().then(value => {console.log(value); return cleanthekichen()})
//          .then(value =>console.log(value));


// --------Async/Await -----------
// ==>Async => makes a function to return the promise
// ==>Await => makes an async function and wait for the promise

// allows you to write the asynchrounous code in asynchrounous mannner
// async doesn't have  reslive or the  reject parameter everything
// after the await is placed in the queue

function walkdog(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            const walkedthedog = true;

            if(walkedthedog){
                resolve("the dog is walked");

            }
            else{
                reject("the task is not completed");
            }
        },3000);
    })
}

function cleanthekichen(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const cleanedkichen=true;

            if(cleanedkichen){
                resolve("The kichen is cleaned ");
            }
            else{
                reject("The task is not completed");
            }
        },3000);

    });

};

async function dochores(){
    const walkingthedog = await walkdog();
    console.log(walkingthedog);
    const thecleaned = await cleanthekichen();
    console.log(thecleaned);
}

dochores();

        