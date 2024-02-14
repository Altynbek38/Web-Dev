function pow(a, b) {
    return a ** b;
}

let x = prompt("x: ", "");
let n = prompt("n: ", "");

if(n < 1) alert("Error");
else alert(pow(x, n));