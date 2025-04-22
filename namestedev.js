
/*
var dummy = 10;

function getname(){
    console.log("nameste js");
};

getname();
console.log(dummy);
console.log(getname);
*/


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