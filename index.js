// Console API Functions js
// console.log("This is dummy text");
// console.warn("This is dummy warn");
// console.error("This is dummy error");
// console.clear()

// alert("Hemlo i am alert");   //commented this cause downside code wont executed if alert is on
// document.write("Added text in webpage using js");3
// const a = 10;
// console.log(a);

// Objects in js
let positionpoint = {
    lec: 5,
    ver: 1,
    rus: 4,
    nor: 2,
    pia: 3

};

// console.log(positionpoint); //to call object

// booleans
var status_ver = true
var status_lec = false

// console.log(status_ver , status_lec); //to call object

// undefined type values
var und1 = undefined
var und2 // if created variable without giving value then it will also take "undefined"

// console.log(und1 , und2); //to call object

// Array
var arr = ["first consider by 0", 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0]);


var intadd5 = 5
intadd5 += 10
// console.log(intadd5)
var add = 10
var add100 = 100
var totaladd = add + add100
// console.log(totaladd) 
var sub100 = 100
var totalsub = add - add100
// console.log(totalsub) 
// console.log(totaladd == totalsub)
// console.log(totaladd != totalsub)

var deftrue = true
var loginot = !deftrue  // (!) will invert true to false and vice versa
// console.log(loginot)

function avg(a, b) {
    return (a + b) / 2;
}

c1 = avg(2, 3)
// console.log(c1)

                            // If Else
var age = 18
if (age >= 18) {
    // console.log("You can drink feruchi drink");
}
else {
    // console.log("You can drink Rasna");
}

age = 20    // here we have overright age variable

if (age <= 10) {
    // console.log("Race 1-10")
}
else if (age <= 20) {
    // console.log("Race 11 -20")
}
else {
    // console.log("Race with fernando alonso ")
}

/*
let aged = 55
if (aged <18){
    a = 10
    console.log(a+=100)
}
else if (aged > 18 & aged < 50){
    a = 20
    console.log(a+=100)
}
else {
    a = 30
    console.log(a+=100)
}
*/

                            // For and Foreach
var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arry.forEach(element => {
    // console.log(element)
});

let narry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i <= narry.length; i++) {
    // console.log(i);
}


let warray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 0;
while (k < warray.length) {
    // console.log(warray[k]);
    k++
};

for (let i = 1; i <= 25; i++) {
    // console.log(i);
}

let s = 0;
while (s < 19) {
    // console.log(s)
    s++
};

metharry = [1, "two" , true , 99 ] ;
// console.log(metharry.length)
// metharry.pop()  // remove last value from array
// metharry.push("wheelchair") // to add value in array at last
// metharry.shift();  // remove first value from array
// metharry.unshift("new added value from unshift");  // to add value in array at front
// console.log(metharry.tostring()); // to convert string to string
// metharry.sort() // sort values in array
// console.log(metharry);

let ndate = new Date();
// console.log(ndate.getTime());


                      // DOM methods
let docid = document.getElementById("firstcontainer");
// console.log(docid);

let docclass = document.getElementsByClassName("container");
// console.log(docclass);

// docclass[0].style.background = "grey"


let first_button_id = document.getElementById("btnclick");
// console.log(first_button_id); 


                    //class add in js
first_button_id.classList.add("textcolor");
                        // OR
// document.getElementById("btnclick").classList.add("textcolor");
// first_button_id.classList.remove("textcolor");
first_button_id.classList.add("bgcolor");
first_button_id.classList.add("handcursor");



                    // PRACTICED    
/*
let class_container = document.getElementsByClassName("container");   // find "container" named classes
console.log(class_container);  // print classes on console
class_container[0].classList.add("bgcolor"); // we have added "bgcolor" class in html head portion and calling here in js

// newmergedclass = document.getElementsByClassName("container bgcolor");
// console.log(newmergedclass);
*/



let first_container = document.getElementById("firstcontainer");
// console.log(first_container.innerHTML)
// console.log(first_container.innerText)

qsel = document.querySelectorAll(".container")
// console.log(document.querySelectorAll('.container')[1])
// console.log(qsel);

function clicked(){  // function for click button event                         
    console.log("The first button was clicked");
}  

let second_button_id = document.getElementById("btnclick2")
// console.log(second_button_id);
second_button_id.classList.add("bgcolor");
second_button_id.classList.add("handcursor");


                        //Add Events in js
first_button_id.addEventListener("mouseover" , function(){
    // console.log("Mouse on the first button")
})

second_button_id.addEventListener('click' ,function(){
    second_button_id.innerHTML = "<b> Second button was clicked";
    console.log("The second button was clicked");
})
            // now with 2 second delay with using settimeout
/*
second_button_id.addEventListener('click' ,function(){
    setTimeout(function(){
        second_button_id.innerHTML = "<b> Second button was clicked";
    console.log("The second button was clicked");
},2000);
})
*/
second_button_id.addEventListener("mouseover",function(){
    // console.log("Mouse on the second button")
} )

                    //Arrow function
// function summ(a,b){
//     return a+b
// }
        //OR
summ = (a,b) =>{
    return a+b
}

                    // set timeout and interval(same as timeout)
 bmv = function(){
    console.log("fsdfdsfdfd")
}; 

// setTimeout(bmv, 2000)                    // provide output after 2sec
// setInterval(bmv, 2000)                   // provide output after 2sec and repeat same

        //OR
// setTimeout(function(){
//     console.log("fsdfdsfdfd")
// }, 2000) 


                    // Various ways of code execution in js //
function square(num){
    let ans = num * num;
    return "your answer is " +  ans
    // return `Your answer is ${ans}`
};
n = 10
// console.log(square(n));  

let number = 2
const sqans = square(number);
// console.log(sqans);  


// let num = 3;
// console.log(square(num));  

// console.log(square(4));

                    // Nameste JS Variables & Functions
// getname()
// console.log(ex)

/*
var ex = 10

function getname(){
    console.log("Nameste JS")
}


getname()
console.log(ex)
console.log(getname)
*/


                    // Nameste JS functions hosting
/*
var aa = 100;                                       // 1

b();                                               // 2
c();                                               // 5
console.log(aa);                                   // 8

function b(){
    var aa = 20                                    // 3
    console.log(aa);                               // 4

}
function c(){
    var aa = 30                                   // 6
    console.log(aa);                              // 7

}
*/
// console.log(a)


                    // Nameste JS Tempral Dead Zone                 
/*                    
// console.log(la)            // Cannot access 'la' before initialization
let la = 1;   
// console.log(la)         

// console.log(va)            // wil prpovide "undefined" output
var va = 2;            
*/

                     // Nameste JS Scops ( Block and Global )
/*
var a = 1;
let b = 2;
const c = 3;
{
    var a = 1000;
    let b = 2000;
    const c = 3000;
    console.log(a)
    console.log(b)
    console.log(c)

}
console.log(a)       // return 1000                           
console.log(b)       // return 2                       
console.log(c)       // return 3

function sq(numb){
    // let bans = numb*numb
    // console.log(numb*numb)
    return numb*numb
}
console.log(sq(6))
*/

                                                // NAMESTE JS CLOSURES
/*

function x(){
    var a  = 10
    function y(){
        console.log(a)

    }
    y()                 // nedd to call inside parent closer only
}
// y()                  //will throw error ( y is not defined )
x()

*/

// function xx(){
//     var aa = "Output after 3 seconds"
//     setTimeout(function(){
//         console.log(aa)
//     }, 3000
//     )
// }
// xx()

// function outer(){
//     var a = 150
//     function inner(){
//         console.log(a);
//     }
//     inner();                             // call inner function
// }
// outer()


// function outer(){
//     var a = 150
//     function inner(){
//         console.log(a);
//     }
//     return inner;                            // return or store inner function to the outer
// }
                                // method one to get output
// outer()();                              
//                                          // Explaination of outer()()
// outer()                                  //by first () ->  outer will get inner function & second () --> will run inner() which is just stored in outer()
// console.log(outer());                   // output if run call outer function for first time 
// outer()()                               //second () --> will run inner()
//
//                              // Method two to get output
//                                       // otherwise we can use below instead of ()()
// var close = outer();                     
// close()                                  


                                // Closure with parameter passed
// function outer(b){
//     var a = 150
//     function inner(){
//         console.log(a, b);
//     }
//     return inner;                            // return or store inner function to the outer
// }

// var close = outer("hey");                     
// close();   


                                            // Counter created using closure
// function counter(){
//     var cn = 1;
//     function inccounter(){
//         cn++
//         console.log(cn)
//     }
//     inccounter()
// }
// counter();

                                        // OR

// function counter(){
//     var cn = 1;
//     return function inccounter(){
//         cn++
//         console.log(cn)
//     }
  
// }
// counter()()


// If we call both functions before creating them then function expression expr() will throw an error as initially its value was 'undefined'.
// fun_stat();      // will return function 
// expr();         // Uncaught TypeError: expr is not a function

// Function Statement     OR    Function Declaration
// If we write a function keyword along with its name.
function fun_stat(){
    console.log("It's a Function Statement OR Function Declaration")
}
fun_stat();

// Function Expression
// If we use function as a value for any variable or key.
var expr = function (){
    console.log("It's a Function Expression")
}
expr();

//Anonymous Function
// A function without name.
//  Uncaught SyntaxError: Function statements require a function name
// function (){
//     console.log("sdd")
// } 