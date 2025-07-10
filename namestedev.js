
/*
var dummy = 10;

function getname(){
    console.log("nameste js");
};

getname();
console.log(dummy);
console.log(getname);
*/


/*
var aa = 10;                                       // 1

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

/*
function outer(){
    var a = 10;
    inner();
    function inner(){
        // console.log(a);

    }
};                                                            


outer()
// console.log(a)
*/

/*
// console.log(la)            // Cannot access 'la' before initialization
let la = 1;   
// console.log(la)         

// console.log(va)            // wil prpovide "undefined" output
var va = 2;            
*/


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


/*
{
    var a = 1000;
    let b = 2000;
    const c = 3000;
    console.log(a)                          // we'll get output in console
    console.log(b)                          // we'll get output in console
    console.log(c)                          // we'll get output in console

}
console.log(a)                              // we'll get output in console
console.log(b)                              // Error
console.log(c)                              // Error
*/

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
console.log(a)                               // 1000
console.log(b)                               // 2
console.log(c)                               // 3
*/

/*
function sq(numb){
    // let bans = numb*numb
    // console.log(numb*numb)
    return numb*numb
}
console.log(sq(6))
*/

                                // NAMESTE JS CLOSURES
// function user(){
//     let user = "SPAS"

//     function message() {
//         console.log(user + " It's Canada GP Time")
//     }
//     message()
// }
// user()
/*
function x(){
    var a  = 10
    function y(){
        console.log(a)

    }
    y()              // nedd to call inside parent closer only
}
// y()                  //will throw error ( y is not defined )
// x()
#/



// function yy(){
//     var bb = "Output at instant"
//     function zz(){
//         console.log(bb)
//     }
//     zz()
// }
// yy()    
   
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
// close();                                  


                                // Closure with parameter passed
// function outer(par1){
//     var a = 150
//     function inner(par2){
//         console.log(a, par1, par2);
//     }
//     return inner;                            // return or store inner function to the outer
// }

// outer("value1")("value2")

// var close = outer("hey")("h");                     
// close;   

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

// function newj(){
//     var j1 = 22
//     return function oldj(){
//         console.log(j1)
//     }
// }
// console.log(newj())
// console.log(newj()())



// If we call both functions before creating them then function expression expr() will throw an error as initially its value was 'undefined'.
// fun_stat();      // will return function 
// expr();         // Uncaught TypeError: expr is not a function

// Function Statement     OR    Function Declaration
// If we write a function keyword along with its name.
function fun_stat(){
    console.log("It's a Function Statement OR Function Declaration!")
}
// fun_stat();

// Function Expression
// If we use function as a value for any variable or key.
var expr = function (){
    console.log("It's a Function Expression!")
}
// expr();

//Anonymous Function
// A function without name.
//  Uncaught SyntaxError: Function statements require a function name
// function (){
//     console.log("sdd")
// } 

// Named Function Expression
// A function with name. 
var nfn = function (pa1, pa2){   // It's A Parameter
    console.log("It's a Named Function Expression " + pa1 + " " +pa2)
    console.log(`It's a Named Function Expression ${pa1} ${pa2}` )

}
// nfn("Got" , "It!");          // It's A Argument(The value which we passed while calling function)


// First - Class Function
// A function passed as a value , declared to a variable, and function returned from another function .
// Store them in a variable
// Send them to another function
// Return them from a function


//  function first_class(upper_input){
//     return function(inner_input){
//         return upper_input * inner_input
//     }
// }

// var demo = first_class(2)
// console.log(demo(5))



                        //  OR
// // let mainfn = function (){
//     console.log("welcome brother")
// }

// function subfn(fntocall){
//     return fntocall()
// }
// // subfn(mainfn);
//mainfn()
/*
 Here we are calling "subfn"
"subfn" is taking one parameter i.e "fntocall" and by return statement is calling that parameter
 we are providing "mainfn" as a argument to "subfn" function 
 so at the end our "mainfn" is getting called and returning "welcome brother" by console statement
*/



                        //  OR
// function welcome(){
//     console.log("Hellow Joinie")
// }

// function joinie(){
//     return welcome()
// }

// joinie()
// welcome()



// var onefun = function (){
//     console.log("heyyyyyyyyyyyyyyyyyyyyyy!")
// }

// var elsefun = function (paratake){
//     return paratake()
// }
// // elsefun(onefun)
// // onefun()

// document.getElementById("third_button").addEventListener("click",function(){
//     // alert("button is clicked");
//     // console.error("third button is clicked");
//     console.warn("button is clicked");

// })

function clicked_message() {
    console.warn("The fourth button was clicked");
}


// clicked_message()
// document.getElementById("fourth_button").addEventListener("click", clicked_message)

                    // OR
// document.getElementById("fourth_button").addEventListener("click", function (){
//     alert("bhai error aavi gyo");
// })


// console.log("start");

// setTimeout(function vinfast() {
//     console.error("vinfast is coming in india");
// }, 5000);

// console.warn("end");   


// console.warn("start");    // go to [Call Stack] and return "start" in console (console web api is used)

// document.getElementById("btnforex").addEventListener("click", function cbfn(){   // cbfn() go to [callback queue] and [Call Stack] will move to next web-api  (DOM web api used)
//     console.warn("Example button is clicked");
// });

// console.warn("end");      // go to [Call Stack] and return "end" in console

// now here [EVENT LOOP] will run and see if [Call Stack] is empty then it check whether any call back function in present in [Callback Queue]
// in our case cbfn() is present in [callback queue] as its a call back function, so it will move into [Call Stack] and got quickly executed
// and return "Example button is clicked" in console


// console.warn("Console Log started!");      // 1

// setTimeout(function vinfast() {            // 4
//     console.log("settimeout function is executed at last as it was in [CALL-BACK QUEUE]");
// }, 5000);

// fetch("https//api.netflix.com")            // 3
// .then(function microcall() {
//     console.error("fetch api(categorised as [PROMISE OPERATION]) function executed first as it was in [MICROTASK QUEUE]");
// })

// console.warn("Console Log Ended!");         // 2


                                        // Current DATE
// let startDate = new Date();
// console.log(startDate);

                            // HIGHER ORDER FUNCTION
// A function which takes another function as an argument or returns a function from it. 

// function normalfun() {
//     console.log("its normal function")
// }

// function HigherOrderFun(funparameter) {
//     funparameter ()
//     console.log("as it taking another function as an atrgument so its a HIGHER ORDER FUNCTION")
    
//     // return funparameter ()
// }
// HigherOrderFun(normalfun)


                                    //  MAP Function (Transforms each item)
// const dummyarry = [5, 55, 44, 15]
// console.log(dummyarry)
//                                         // [1]By NORMAL fn DECLARATION
// function doubler(x) {
//     return x*2            // convert into double
// }
// console.log(dummyarry.map(doubler))

                                        // [2] BY ARROW FUNCTION
//// console.log(dummyarry.map(x => x*2))

                                        // [3] BY ARROW FUNCTION SEPERATE VARIABLE
//// const out = dummyarry.map(x => x*2)
//// console.log(out)
// function binery(x) {
//     return x.toString(2)     // convert into binary
// }

// console.log(dummyarry.map(binery))


                                    //  FILTER Function  (Selects items based on condition)
const farr = [5,1,3,2,6]

// function isodd(x) {
//     return x % 2              //as in js 1 = True & 0 = False 
//                              // so here as odd number's remainder will always come as 1, which means True in js
//                             // we are printing odd values i.e, 5, 1, 3 (True = Remainder is 1 ) 
// }
                                        // OR ARROW FUNCTION
//// console.log(farr.filter(x => x%2))

// function iseven(x) {
//     return x % 2 ===0        // return where remainder is equals to 0
// }
//// const output = farr.filter(isodd)
//// console.log(output)

// console.log(farr.filter(isodd))
// console.log(farr.filter(iseven))


                                    //  Reduce Function  (used to combine all elements of an array into a single value)

// const rarray = [1,3,6,5,3,2] 

// console.log(rarray.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }),)

/*

| Step | acc | curr | acc + curr |
| ---- | --- | ---- | ---------- |
| 1    | 1   | 3    | 4          |
| 2    | 4   | 6    | 10         |
| 3    | 10  | 5    | 15         |
| 4    | 15  | 3    | 18         |
| 5    | 18  | 2    | 20         |

*/

// const rarraymax = [100,200,300,400,500] 

// console.log(rarraymax.reduce(function(currt, nextcurr) {
//     if (nextcurr > currt){
//         currt = nextcurr;
//     }
//     return currt;
// }))

// const users = [
//     {firstname: "MAX", lastname: "VERSTAPPEN", age:26},
//     {firstname: "KIMI", lastname: "ANNOTELLI", age:75},
//     {firstname: "CHARLES", lastname: "LECLARC", age:50},
//     {firstname: "LANDO", lastname: "NORRICE", age:26},
// ];

// console.log(users.map(x => x.firstname + " " + x.lastname));