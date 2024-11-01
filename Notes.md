# JavaScript Introduction

Everything in a HTML page is regarded as a document. JS tries to catch each element of the document by its id or class. Javascript runs at the client's browser.
It can change the element's `innerHTML`, attributes e.g. `src`, css e.g `font-size` etc. 

```js
document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").src = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "35px";    // here fontSize means CSS's font-size
```
### NOTE
- This is good practice to add JS script at the bottom of the body of html file which will increase up the page display
- Using external JS is more convenient.
    - We can separate the code and make our code clean
    - Browser caches the external file from the server, so no need to access again from server that makes the content display faster


# JavaScript Output

JavaScript can "display" data in different ways:
- Writing into an HTML element, using innerHTML.
- Writing into the HTML output using document.write().
- Writing into an alert box, using window.alert().
- Writing into the browser console, using console.log().

# JavaScript Variables
- let
- var
- const

## `const`
- cannot be reassigned
```js
const x = 10; 
x = 7; // Error
```
- must be assigned when declared
```js
const x;
x = 10; // impossible
```
- Reassigning a `const` variable within same scope is not allowed

```js
const x = 10;
var x = 100; // Error
```

- It does not define a constant value rather it defines a constant reference of a value. That's why it cannot be reassign it. But we can change the value of a constant array.
```js
// variables
const x = 5;
x = 6; // Error

// array
const arr = [1, 2, 3, 4];
arr[0] = 4;
arr.push(5);    

arr = [5, 6, 7]; // Error

// objects
const obj = {
    name: 'Rifat Arefin',
    roll: 1807117, 
};

obj.roll = 11809045; // change the object's property
obj.address = "Dhaka"; // add new property

obj = { model: 'R15', company: 'Yamaha'}   // Error
```
- `const` has block scope
```js
const x = 3;
{
    const x = 2; 
    // here x is 2 not 3
}
// here x is 3
```

## `let` vs `var`
- variables defined with `let` cannot be redeclared
```js
let x = "Rifat";
let x = 0; // SyntexError

var x = "Rifat";
var x = 0; // No Error
```
- variables defined with `let` must be declared before use
- variables defined with `let` have a block scope
```js
{
    let x = 2;
    var y = 10;
}

// there is no `x` 
// here `y = 10`
```

# JavaScript Object

```js
const student = {
    name: "Rifat Arefin",
    roll: 1807117,
    cgpa: 3.50,
    
    show: function() {
        console.log("Name: " + this.name);
    }
}
```
