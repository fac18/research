# Asynchronous JavaScript


---

## What even is asynchronous in the context of programming?*

![](https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif)

*It's maybe not what you think

---

## Synchronous 

In synchronous programs, if you have two lines of code

```
L1 // some code here
L2 // some more code here
```

L2 cannot begin running until L1 has finished executing.

---

## Synchronous 

![Synchronous: one after the other](https://media.giphy.com/media/pDWtwK7D2IlFu/giphy.gif)

One after the other

---

## Asynchronous 

In asynchronous programs, you can have two lines of code (L1 followed by L2), where L1 schedules some task to be run in the future, but L2 runs before that task completes.


** <sub>Note that asynchronous does not mean the same thing as concurrent or multi-threaded. JavaScript can have asynchronous code, but it is generally single-threaded.</sub>

---

## Asynchronous 

![Asynchronous: second can run before the first is done](https://media.giphy.com/media/krM6ANSNvFg52/giphy.gif)

Second function can run before the first function is done 

---

## What are first class functions, and higher order functions?

---

## First class functions

Functions in javascript are first class objects. But what does this mean? Basically, first-class simply means **being able to do what everyone else can do**. They're treated like any other object.

---

In JavaScript, first class functions can be:

- [ ] stored in a variable, object, or array
```
const foo = function() {
   console.log("foobar");
}

```
- [ ] passed as an argument to a function
```
function runFunction(fn, data) {
  return fn(data);
}
```
- [ ] returned from a function
```
function takeFirst(f, g) {
   return f;
}
```

---

## Higher order functions

A function is a higher order function if it takes a first class function as a parameter, or returns a first class function as its result. 

Example

```
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
```

---

## Examples of higher order functions in JavaScript:

- map

- filter

- reduce

---

## So the difference is:

- First class functions are functions that are treated like an object (or are assignable to a variable).

- Higher order functions are functions that take at least one first class function as a parameter.

---

## What is the call stack?

The call stack is a data structure that uses the **last In, first Out** (LIFO) principle to temporarily store and manage function invocation (calls). 

When a function is called we push something on to the stack, and when we return from a function, it pops off the top of the stack.

---

![](https://i.imgur.com/DRyGe8B.png)

---

When a function is invoked, the function, its parameters, and variables are pushed into the call stack to form a stack frame. This stack frame is a memory location in the stack. The memory is cleared when the function returns as it is pop out of the stack.

---

The call stack is **single-threaded**, meaning it can only do one thing at a time.

Code execution is generally sychronous, but can be bypassed with asynchronous methods.

---

![](https://i.imgur.com/KL1rRXx.png)

---

![](https://i.imgur.com/8uKP8hQ.png)

---

![](https://i.imgur.com/RrgLvUN.png)

---

![](https://i.imgur.com/rEotph8.png)

---

![](https://i.imgur.com/5lnmqXD.png)

---

![](https://i.imgur.com/r9eNiNj.png)

---

![](https://i.imgur.com/ng0yutK.png)

---

### Stack Overflow

If a function is recursive and calls itself without an exit point it will create a **stack overflow**

---

A few useful links about call stacks and asynchronous JS in general.

https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/

https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5

---

## What are async functions and blocking code?

---

### Async functions:
- A (webapi) function that is moved from the **_sync_** stack to the task queue. 
- It is placed back on the stack (and then executed) by the event loop once the stack is cleared.

---

![Image of an async function](https://i.imgur.com/XgG1nGa.jpg)

---

- For setTimeout functions, the wider web environment will place the function onto the task queue after the specified time.

![Image of a timer function](https://i.imgur.com/kNunrxd.jpg)

---

### Blocking code:
- Code on the stack that is slow. It slows down or **_blocks_** the stack.

![Image of a blocked stack](https://i.imgur.com/QjYz0p2.jpg)

---

## What is a callback function? 

---

#### Callback functions are used to make sure that certain code does not execute until other code has already been executed. 

A callback is passed as an argument to another function, to be “called back” at a later time. 

```
function demo(x, **callback**) {
  //write some code here;
  **callback()**;
}
```

---

```
function researching(subject) {
  alert(`Started researching ${subject}.`);
}
```

---

```
function researching(subject, callback) {
  alert(`Started researching ${subject}.`);
  callback();
}

function teaching() {
    alert("Now I'm ready to teach it");
}
```

---

Real life examples of wanting use a callback function might be:

Random quote generator: 
    Create a functionA that generates a new quote
    Create a functionB that, when actioned, (i.e. when a  button is pressed) it executes (callsback) functionA.
    
references: 
https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
https://developer.mozilla.org/en-US/docs/Glossary/Callback_function



<!-- If it's useful..
In a higher order function, when one of the parameters passed in is a function, that function is a callback function because it will be called back and used within the higher order function.
A higher order function is named as such because when using a callback to perform an operation within itself, the function has a ‘higher’ purpose than a regular function. When it returns a function, it also has a ‘higher’ purpose. -->
