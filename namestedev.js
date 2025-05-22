
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
function x(){
    var a  = 10
    function y(){
        console.log(a)

    }
    y()              // nedd to call inside parent closer only
}
// y()                  //will throw error ( y is not defined )
// x()




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
