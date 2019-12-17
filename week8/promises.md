# Promises and Fetch

---

# What is a Promise?

![](https://media2.giphy.com/media/l3UcjBJUov1gCRGbS/giphy.webp?cid=790b76115fddde6815aed581c4c260672df37b38158ac0a6&rid=giphy.webp =400x)

---

*  New JS feature that help us manage async code
*  An object that may produce a single value some time in the future
* Results with a resolved value or a reason that it’s not resolved 
* 3 possible states:
    * pending (async code has not finished yet)
    * fulfilled (expected value is available)
    * rejected (expected value is not available)

---

<h1>
Accessing the value
</h1>

Run the code once the promise has fulfilled

```javascript=
const myPromise = getSomeAsyncData();
myPromise.then(someData => console.log(someData));
```

---

<h1>
Chaining .then
</h1>

```javascript=
getPokemon("pikachu");
  // we need to make another call to get extra data
  .then(pokemon => getAbilities(pokemon.abilities.url))
  // this won't run until the first is finished
  .then(abilities => console.log(abilities))
```

---

<h1>
Handling errors
</h1>

```javascript=
getSomeAsyncData()
  .then(someData => console.log(someData))
  .catch(error => console.log(error));
```

---


<h1>
Create a new promise
</h1>

```javascript=
function wait(ms) {
  return new Promise((resolve, reject) => {
    if (!ms) reject("Please enter a time to wait");
    setTimeout(() => resolve("Your wait is over"), ms);
  });
}
```

---

## Util

### util.promisify()

Takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.

---

```javascript=
const { promisify } = require('util');

const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

const filePath = process.argv[2];

readFileAsync(filePath, { encoding: 'utf8' })
  .then((text) => {
      console.log('CONTENT:', text);
  })
  .catch((err) => {
      console.log('ERROR:', err);
  });
```

---

### util.callbackify()

Takes an async function (or a function that returns a Promise) and returns a function following the error-first callback style, i.e. taking a (err, value) => ... callback as the last argument. In the callback, the first argument will be the rejection reason (or null if the Promise resolved), and the second argument will be the resolved value.

---

# Pros and Cons of Promises

---

| Pros  | Cons   |
|---|---|
| Readability  | Slower performance  |
|  Error Handling | Learning curve   |
|   Maintanable|   |
|   |   |

---

#### Readability (callbacks)

```javascript=
// Regular Callbacks
api1(function(result1){
    api2(function(result2){
        api3(function(result3){
             // do work
        });
    });
});
```

---

#### Readability (callbacks)
```javascript=
// Using Promises
api1().then(function(result1){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
     // do work
});
```

---

#### Error Handling (callback)

```javascript=
// Regular Callbacks
api1(function(error1, result2){
    if (error1) {
      // log error
    } else {
        api2(function(error2, result2){
            if (error2) {
            // log error
            } else {
                api3(function(error, result3){
                    if (error2) {
                        // log error
                    } else {
                        // do work
                    }
                });
            }
        });
    }   
});
```

---

#### Error Handling (Promise)
```javascript=
// Using Promises
api1().then(function(result1){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
     // do work
}).catch(function(error) {
     //handle any error that may occur before this point
});
```

---

#### Maintainable

```javascript=
// Using Promises
api1().then(function(result1){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
     // do work
     //add more results here
}).catch(function(error) {
     //handle any error that may occur before this point
});
```

---

#### Slower Performance

![](https://media.giphy.com/media/JyGUoHu2my7Ze/giphy.gif)

---

#### Learning Curve

![](https://media.giphy.com/media/zOvBKUUEERdNm/giphy.gif)

---

# What is fetch?

![ ](https://media.giphy.com/media/s5igVaatNXUVW/giphy.gif)

---


Fetch is used for CONTACTING and INTERACTING with an API

<font color="pink">
Most of the APIs that are available to use for free do not allow manipulation.
</font>

However, when creating your own API, you can ADD, EDIT or DELETE  using API requests.

---

# How do you use fetch?

---

<font color="pink">
Fetch is a Javascript function that accepts two arguments. 
</font>

1. The first argument is a stringified URL.

2. The second is an optional argument that will contain information about your request.

![](https://i.imgur.com/YQLJLbv.png)

---

<font color="pink">
A successful fetch request will return a promise.
</font>

However, the first promise that fetch sends is usually an object that we need to parse

![](https://miro.medium.com/max/872/1*1D1SSPT7rRJzE-eBV4u6Aw.png)


---

What we get out of parsing the response as a JSON links to another promise, which we can then access more easily

![](https://miro.medium.com/max/892/1*BpKRPzuyPaKMRw4r09QmKA.png)

---

<font color="pink">
For the second optional argument in Fetch, recall the 4 types of requests you can make:
</font>

1. “GET” — “Hi API, I want to get some information from you!”
3. “POST” — “API, I have a piece of data that I want to append to you”
4. “PATCH/PUT” — “API, I need to edit some information about the data”
5. “DELETE” — "API, serious talk. I need to delete a some data.""

---

## Adding to an API with Fetch
![](https://miro.medium.com/max/1564/1*SJ3qlXRvdlHnksFjQeiMXw.png =600x)

---

## Editing an API with Fetch
![](https://miro.medium.com/max/1432/1*uTHPWxhXoEHvsWNg9jXbRQ.png)

---

## Deleting an item with Fetch

![](https://miro.medium.com/max/1396/1*d_e2wTzfcVIdw0wRtzB_DQ.png)

---

# What are the downsides to using Fetch? i.e. what does fetch not do for you?

---

Treat a response with error status from the server as an error
```javascript=
axios.get(url)
  .then(result => console.log('success:', result))
  .catch(error => console.log('error:', error));
```


Rejects the promise only in case of network error
```javascript=
fetch(url).then(response => response.json())
  .then(result => console.log('success:', result))
  .catch(error => console.log('error:', error));
```

---

```javascript=
fetch(url)
  .then(response => {
    return response.json().then(data => {
      if (response.ok) {
        return data;
      } else {
        return Promise.reject({status: response.status, data});
      }
    });
  })
  .then(result => console.log('success:', result))
  .catch(error => console.log('error:', error));
```

---

# Thanks

![](https://media.giphy.com/media/4QFcV0mD9g4952NZT7/giphy.gif)

---

# Links 

https://michelenasti.com/2017/03/12/js-promises-description-pros-cons-of-this-es6-construct.html

https://digitalfortress.tech/js/promises-vs-callbacks/

https://medium.com/@shahata/why-i-wont-be-using-fetch-api-in-my-apps-6900e6c6fe78

---
