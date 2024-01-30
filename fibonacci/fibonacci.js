let n = Number(prompt("lütfen bir sayı giriniz"));
if (n === 1) {
console.log("0");



}
else if (n === 2) {
    console.log("0, 1");
}
else {
    let a = 0;
    let b = 1;
    let output = "0, 1";
for (let i = 3; i <= n; i++) {
let c = a + b;
output += ", " + c;
a = b;
b = c;
}
console.log("ilk " + n + " fibonacci sayıları şunlardır:" + output);    
}
