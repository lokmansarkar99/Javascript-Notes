// let & const vs. var
// 🔹 Differences
// Feature	                      var	                      let	                       const
// Scope	               Function-scoped	             Block-scoped	                Block-scoped
// Re-declaration	           Allowed	                 Not Allowed	               Not Allowed
// Hoisting	    Hoisted (initialized as undefined)	Hoisted (not initialized)	Hoisted (not initialized)
// Can be updated?	             Yes	                     Yes	                          No



// var is function-scoped
var x = 10;
if (true) {
    var x = 20;
    console.log(x); // 20
}
console.log(x); // 20 (unexpected behavior due to scope)

// let is block-scoped
let y = 10;
if (true) {
    let y = 20;
    console.log(y); // 20
}
console.log(y); // 10 (expected behavior)

// const is block-scoped & cannot be reassigned
const z = 30;
z = 40; // ❌ Error: Assignment to constant variable
