// Console API Functions js
// console.log("This is dummy text");
// console.warn("This is dummy warn");
// console.error("This is dummy error");
// console.clear()

// alert("Hemlo i am alert");   //commented this cause downside code wont executed if alert is on
// document.write("Added text in webpage using js");3
const a = 10;
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

s = 0;
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

let docid = document.getElementById("firstcontainer");
console.log(docid);

let docclass = document.getElementsByClassName("container");
console.log(docclass);

docclass[0].style.background = "grey"
