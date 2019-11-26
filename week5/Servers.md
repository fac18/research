# Week 5 Research Project Presentation
### Making requests from the server

---

## Making API requests using ```XMLHttpRequest```

There are numerous npm modules available for us to make requests from a node server to another server. Our options include:
 
- Request     ```npm install request```
- SuperAgent     ```npm install superagent```
- Got     ```npm install got```
- Axios     ```npm install axios```

---

## SuperAgent 

- Primarily used to make AJAX requests
- Parses JSON by default
- Incorpororates the method query() allowing you to add parameters to the request


```
const superagent = require('superagent');

superagent.get('https://api.nasa.gov/planetary/apod')
.query({ api_key: 'DEMO_KEY', date: '2017-08-02' })
.end((err, res) => {
  if (err) { return console.log(err); }
  console.log(res.body.url);
  console.log(res.body.explanation);
});

```

---

## Got

- A lightweight library that works with promises
- According to the Got github, it was created because the popular *request* package is bloated with installs
https://github.com/sindresorhus/got

```
const got = require('got');

got('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', 
{ json: true })
.then(response => {
  console.log(response.body.url);
  console.log(response.body.explanation);
}).catch(error => {
  console.log(error.response.body);
});

```

---

## Why not just use XMLHttpRequest?

- The standard XMLHttpRequest does not require installation of external dependencies. However:
    - it's not very user friendly
    - data needs to be manually parsed
    - HTTPS is not supported by default (```https``` module needs to be ```require```'d)
    - other modules may have useful extended functionality

---

## Potential downfalls to using a module

- Code can become bloated with too many external dependencies
- If an external dependency crashes so will your code, most likely
- It can introduce unforseen vulnerabilities into your code creating security risks

---

## Axios

- Axios is a Promise based HTTP client for the browser as well as node.js. 
- Using Promises puts you at an advantage when dealing with code that requires a more complicated chain of events. 
- It is more secure with built-in cross site forgery protection.
- has the ability to monitor POST request progress


---

## Promises

* A promise is commonly defined as a proxy for a value that will eventually become available.

* Promises are one way to deal with asynchronous code, without writing too many callbacks in your code.

* Promise object is data returned by asynchronous function. It can be a resolve if the function returned successfully or a reject if function returned an error.

---

### How Promises work

The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of three different states:

* pending - The initial state of a promise.
* fulfilled - The state of a promise representing a successful operation.
* rejected - The state of a promise representing a failed operation.

---

Once a promise has been called, it will start in pending state. This means that the caller function continues the execution, while it waits for the promise to do its own processing, and give the caller function some feedback.

At this point, the caller function waits for it to either return the promise in a resolved state, or in a rejected state, but the function continues its execution while the promise does it work.

---

```
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
```

The function passed to new Promise is called the executor. When new Promise is created, it runs automatically. It contains the producing code, that should eventually produce a result.

Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

---

When the executor obtains the result,it should call one of these callbacks:

* resolve(value) — if the job finished successfully, with result value.
* reject(error) — if an error occurred, error is the error object.

---

To summarize: the executor runs automatically, it should do a job and then call either resolve or reject.

The promise object returned by new Promise constructor has internal properties:

state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.

---


![](https://i.imgur.com/0raJhVO.png)

---

#### We'll head over to repl.it for a quick demo!
![image alt](https://repl.it/public/images/logo-small-square.png)

---

## Using Axios

Inside our node_modules folder (not many sub-dependencies):

![](https://i.imgur.com/VnWJELh.png)
