## Topic 2: Engineering


---


# Modules

---

### Why is it a good idea to modularise your code?

A Module is a single function, or a set of functions.
 - You can use Node's built-in modules and create your own
 
- Modules will help us separate functionality 
- and thus organize the codebase.
- Modularity [avoids polluting Javascript's global namespace](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch13s15.html)

---

Node has a lot of built in modules including:

```
fs             timers
querystring    path
http           https
```
which we've seen before, and [many more](https://www.w3schools.com/nodejs/ref_modules.asp).

---

### What are require and module.exports? 


To include a module (Node or own built) in your javascript code you must use the```require() ``` function in the file you want to use it in.

To make sure your own modules can be used, you must export them from the file they are in, using: ```module.exports = {squigly brackets for more than one module}```



---

### Why can't you use them in the browser? 

Using ```require('yourModule')``` in the browser will return undefined 

because node is server side!

Everything you have in your src folder will be served to the browser. But it cannot be accessed _from_ the browser

[Modern Javascript explained for Dinosaurs](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)

---

### How might you modularise front-end code?

bar.js file:
```javascript= 
export default function bar() {
  // Code for bar function
  ...
}
```
main.js file:
```javascript= 
import bar from '/.bar';
```

---

## Asyncronous functions: 

#### Why should you use asyncronous forms of functions wherever possible in Node? 

- Synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn’t have to wait – your code can continue to run.

- JavaScript is a single-threaded synchronous language. Web APIs allow JavaScript to run asynchronously, then put things back into the event queue.

- Node favours asynchronous APIs so that operations that take longer to complete (or maybe never complete) will not block the rest of the code. As a result your site or app is more responsive, reducing waiting time for the user.

- There may be times when you want to make sure that something has executed and returned a result, before running the next bit of 

---

#### What are error-first callbacks, and why is it important to follow that pattern in your own code? 

![](https://media.giphy.com/media/BVStb13YiR5Qs/giphy.gif)

![](https://i.imgur.com/Kk8mGcI.png)

- Error-first callbacks are the universal and expected convention for any asynchronous functions. ```err``` is passsed into the function as the first argument; if there is no error then the value is ```null```, then the rest of the code is executed with the second argument.

#### Why should you avoid using throw in callbacks?

- ```throw``` allows you to create custom errors, and can be used in conjunction with ```try``` and ```catch``` to test for and handle errors. These run synchronously, so if you tried to put a callback (which are asnychronous in nature) inside a ```try``` and ```catch```, by the time the callback has executed, the ```try``` and ```catch``` will have already run and exited.

- A ```throw``` statement, when executed, will actually terminate execution of the current function and, if a ```catch``` hasn't been defined, the whole program will stop running.

---



##  fs module 

Core module which lets you access the file systems you have in the repository!

![](https://i.imgur.com/Rh1DMOO.png)


![](https://i.imgur.com/RL6shkB.png)

---

  ## Common uses for the File System module:
  
- Read files
- Create files
- Update files
- Delete files
- Rename files

---

![](https://i.imgur.com/Rh1DMOO.png)


![](https://i.imgur.com/eoThfcC.png)


---

## other uses: 

fs.appendFile()
fs.open()
fs.writeFile()
fs.unlink() 
fs.rename()

---

## Path module

The path module provides utilities for working with file and directory paths. 

![](https://i.imgur.com/A1It9bf.png)


---


## How do I use it?

![](https://i.imgur.com/G1niPYx.png)


---


## Splits up different file paths 

![](https://i.imgur.com/I1kTOJ4.png)

path.basename(__filename) 

![](https://i.imgur.com/WzoE4So.png)


---


path.dirname(__filename)

![](https://i.imgur.com/E4gR1Kb.png)


path.extname(__filename)

![](https://i.imgur.com/z0f4k9i.png)


---

## Allows you to do a lot of other stuff

* path.join([...paths]) 
* path.isAbsolute(path) (checks if a path is absolute)
* path.parse(__filename)
* path.format(pathObject)
* path.delimiter
* path.normalize(path)

---

![](https://i.imgur.com/qaHiizG.png)


---


### The URL module
- Splits up a web address into readable parts

- This is how we include the URL module
#### var url = require('url');

#### Parse method:
- using the parse method (url.parse) will return each part of the address as properties...

---

The url module provides two APIs for working with URLs: a legacy API that is Node.js specific, and a newer API that implements the *same WHATWG URL Standard used by web browsers.*

---

Here is a comparison between the WHATWG and Legacy APIs. 
- Above the URL are properties of an object returned by the legacy url.parse()
- Below it are properties of a WHATWG URL object.

---

![](https://i.imgur.com/0n3fILn.png)

---

### Example:

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

---

### ...contd.

console.log(q.host); //returns 'localhost:8080' (origin)
console.log(q.pathname); //returns '/default.htm' (pathname)
console.log(q.search); //returns '?year=2017&month=february' (search)

---

### The Query String Module
![](https://media.giphy.com/media/3o6gaSgLGfCWdCrlCg/giphy.gif)

---

-a query string is the part of a uniform resource locator (URL) which assigns values to specified parameters. 
 
---

![](https://i.imgur.com/HoX1kuV.png)

---

##### var querystring = require('querystring');

- provides utilities for parsing and formatting URL query strings
- It can be used to convert a query string into a JSON object and vice-versa.

---

#### Methods

- parse() : parses the querystring object
- stringify() : stringifies an object and return a query string

- escape() : returns an escaped string
- unescape() : returns an unescaped query string

---

### Query String Parse Method

var querystring = require('querystring');
const obj1 = querystring.parse('name=sonoo&company=javatpoint');
console.log(obj1);

![](https://i.imgur.com/bSf5W6c.png)

---

### Query String Stringify Method

var querystring = require('querystring');
const obj2 = querystring.stringify({name:'sonoo',company:'javatpoint'});
console.log(obj2);

![](https://i.imgur.com/x9JXkF6.png)

---
