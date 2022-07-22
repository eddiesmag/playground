
var regex = /a\/b*c/;
var regex2 = /\/example\/[a-z]+/i;
var regex3 = /[A-Z]:\\/;
var re = new RegExp("a\\*b"); //for /a\*b/, escaped the backslash on string literal level => a*b
var str1 = "Hey there, do you know your a/bc's";
var str2 = "The latest airplane designs evolved from sla/craft."
var str3 = "searching for /example/followed by one or more alphabetic characters";
var str4 = "C:\\" 
var str5 = "a*bstract";
var output1 = regex.exec(str1);
 var output2 = regex.exec(str2);
 var output3 = regex2.exec(str3);
 var output4 = regex3.exec(str4);
 var output5 = re.exec(str5);
 console.log(output1)
 console.log(output2)
 console.log(output3)
 console.log(output4)
 console.log(output5)

 //str.replace 
let strRep = "enter your firstName and lastName ";
function styleHyphenFormat(texT) {
    function upperToHyphenLower(match, offset, string) {
        return (offset > 0 ? "-" : "") + match.toLowerCase();
    }
    return texT.replace(/[A-Z]/g, upperToHyphenLower)
}

// console.log(styleHyphenFormat(strRep));



var site = "100% fully paid courses! 1 12 23 234 43 boy oh boy";
const part = /\d{1}/g
const res = site.match(part);
console.log(res);
/* regex phone numbers

const regexp = /^[+]2567[-.][6789]\d{3}[-.]\d{4}/   //random phone numbers with seperators
+2567-8765-6528
+2567.9765.6528
2567,8765,6528

//for standard Ugandan numbers --- only MTN numbers ---
const regexp = /^[+]2567[6789]\d{7}/
+256772934920
+256766984356
+256789908765
+256797654321

//for standard Ugandan numbers --- only AIRTEL numbers ---
const regexp = /^[+]2567[054]\d{7}/
+256752934920
+256706984356
+256749908765
*/

/* regexp emails
const regexp1 =/^[a-zA-Z0-9\.-]+@[a-zA-Z-]+\.[a-zA-Z]{2,6}/
const regexp = /^[a-zA-Z0-9.-]+@[a-zA-Z-]+\.(com|edu|net)$/
eddiesmag@gmail.com
EddieSmag@unversity.edu
eddie.smag@hotmail.net
eddie-789-smag@g-mail.net
*/

/* regexp urls
const regexp = /https?://(www\.)?(\w+)(\.\w+)/
https://www.google.com
http://cores.com
https://youtube.com
https://www.nasa.gov
*/

/*
const fruits = [9, 90, "Apple" , "Mango", "Avocado", "Peach"];
const objs = {
    fName: "smag",
    age: 89
}
// (o|e)\b
let fruitStartingWithA = fruits.filter(fruit => /^[A]/.test(fruit));

for(var tst=0; tst < fruitStartingWithA.length; tst++) {
    console.log(fruitStartingWithA[tst]);
}
var stg = "this is a string";

console.log(stg.replace(/(?<=i|\s)s/g, "9"))

for(let value of fruits ) {

    console.log(value)
}
for(const value in fruits) {
    if(fruits.hasOwnProperty(value)) {
        console.log(value);
    }
}

fruits.forEach((val, index, fruits) => console.log(val))
*/

//functions
let _string = "Hello, Welcome to modern Javascript. hello"
let regexp = /(?<=\s)hello$/g;

/* exec 
let output = regexp.exec(_string);
console.log(output);*/

/* test 
let output = regexp.test(_string);
console.log(output);*/

/* match */
let output = _string.match(regexp);
console.log(output);
