## What is Test Coverage?

- It's an important part in Software testing and maintenance performed by a set of test cases.

- It's a technique which determines whether our test cases are actually covering our code.

- It's the measure of the effectiveness of the testing by providing data on different items.

- It is also a useful tool for finding untested parts of a code base. 

---

## Why is test coverage useful?

- Assures the quality of the test
- We can keep time, resources, cost, scope under control with this technique.

- Helps to determine the paths in your application that were not tested.

- Defect prevention at an early stage of the project lifecycle

- It can determine all the decision points and paths used in the application, which allows you to increase test coverage

- It makes it easier to find gaps in requirements, test cases and defects at the unit level 

---

## What is Istanbul?

Istanbul is a JS test coverage tool that instruments JS code with line counters so you can check/track how well your unit tests exercise your codebase. 


---

## What is nyc?

Is the C.L. client for Istanbul - It's a dependency which can be installed at the same time as your test framework (like tape or mocha ☕️).

---

## Why do we use them to improve our testing?
Allows us to view how much of your Javascript is covered by the tests you have written.

![](https://i.imgur.com/H31AZhp.jpg)



---

## Time for some practice!

![](https://media.giphy.com/media/npU6kq1jclu2iRejZ4/giphy.gif)

---

## Walk-through using a test coverage tool

- Navigate to Fizzbuzz

- Go to your command line, type in
```bash
npm install --save-dev nyc
```

- Open up your code editor
```bash
code .
```


- In your package.json file, add a new script
```bash  
"scripts": {
    "test": "node test.js | tap-spec",
    "cover": "nyc tape test.js | tap-spec"
  },
```

- Run your tests as usual in the command line using
```bash
npm test
```

---

### Normal testing without nyc

Just running `npm test` like yesterday, we see something like...

![](https://i.imgur.com/RxAuuUB.png)

---

### nyc output

But after running `npm run cover` , you should see something like this!

![](https://i.imgur.com/A5UTMEt.png)

---

### Understanding the results

#### statements
Has each statement been executed?
#### branches
Has every logical path been explored?
#### functions
Has each function been called?
#### lines
Has every line that can be executed been executed?

---

### Line counting

nyc even tells you which lines have gone uncounted!

This is why Istanbul is also called a _line-counter_

![](https://media.giphy.com/media/xUNd9DLukkavmhybAs/giphy.gif)

---

### Let's comment out our tests and run again

![](https://i.imgur.com/CxG8iLd.png)

What do we notice?

---

### Now just remove the 'fizzbuzz' tests

This is any test that is looking for multiples of 3 && 5

```javascript
test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(15);
  var expected = 'fizzbuzz';
  t.equal(actual, expected, 'Should return "fizzbuzz" when given 5');
  t.end();
});
```

---

### How does this affect our results?

![](https://i.imgur.com/qz6dR8b.png)

Notice the reduced branch coverage - why is this?

---

The answer to this question might be clearer when the chained ternary operators are replaced by if...else statements

```javascript=
function fizzbuzz(number) {
  
  if ((number % 3 === 0) && (number % 5 === 0)) {
    return "Fizzbuzz"
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
     return number;
   }
 }
```

---

### Coverage is not an absolute solution

Now, add all your (passing) tests back in

Go to your index.html file and change 'fizzbuzz' to 'fizzy'

```javascript=
function fizzbuzz(x) {
  if (x < 0) {
    return 'invalid input: please pass a positive integer';
  }
  return x % 3 == 0 && x % 5 == 0 ? 'fizzy' :
    x % 3 == 0 ? 'fizz' :
    x % 5 == 0 ? 'buzz' :
    x;
}
```

---

### let's run one more time

Back in the terminal, type ```nyc run cover```

![](https://i.imgur.com/wtpuKbH.png)

---

### Output history

- You can view nyc's output in the folder .nyc_output in your root directory

- We can optionally change this to output as a HTML file

![](https://angristan.xyz/content/images/2019/03/node-js-nyc-html-index.png)


