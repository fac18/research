# Unit Testing vs Integration Testing

---

## Analogy

During the process of manufacturing a ballpoint pen, the cap, the body, the tail and clip, the ink cartridge and the ballpoint are produced separately and unit tested separately. When two or more units are ready, they are assembled and Integration Testing is performed. For example, whether the cap fits into the body or not.

---

| Unit Testing| Integration Testing|
| -------- | -------- |
| First level of Software Testing| Second level of software testing 
|  tested individually | individual units are combined and tested as a group |
| validate that each unit performs as designed | expose faults in the interaction between integrated units |

---



## Unit Testing without Integration Testing
![](https://media.giphy.com/media/3o7rbPDRHIHwbmcOBy/giphy.gif)


---

## What is a unit test?

This refers to a level of software testing where individual units or components are being tested. It is also the first level of testing and it is performed prior to Integration testing. 


![](https://i.stack.imgur.com/qz44p.jpg)

---

## Purpose

Unit tests are the easiest tests to write, and the easiest tests to understand, as they are usually functional in nature .

---

## Who performs unit tests?

It is run by individuals who have in-depth knowledge of the code, and in most cases the developers will run the unit test. 

---

## Why 

To validate that each unit of the software performs as designed.

So that codes are more reusable. In order to make unit testing possible, codes need to be modular. This means that codes are easier to reuse.

Debugging is easy. When a test fails, only the latest changes need to be debugged. 


---

## When would you use unit test?

You run a unit test once your code is complete, meaning that it has been reviewed and there are no syntax errors. 

---

## How do you perform a unit test?
 
 1) Choose a test - i.e. tape.
 2) A thorough examination of the code
 3) With the output produced you check whether it what was expected. 
 4) 100% coverage.

---

## What is an integration test?

Integration Test is the second level of software testing performed after unit test
This is where individual units are combined and tested as a group. 
![](https://i.imgur.com/BLNLkzW.png)

---

## Purpose

The purpose of this level of testing is to identify interface issues between modules

---

## Who performs integration tests?

Developers themselves or independent testers perform Integration Testing.

---

## Why

To make sure that the logic implemented by the developers is as per expectation with the prescribed standards.

---

## When would you use integration test?

<font size="6"> Integration testing should be done after the unit testing has taken place.
Once the individual modules have been checked, it is important to test that they can work together in harmony. </font> 

![](https://media.giphy.com/media/rdcnrsrTkVhL2/giphy.gif)

---

# There are different approaches to integration testing:

---

## Big bang 
![](https://media.giphy.com/media/idGw983D7CHrrXa2eO/giphy.gif)

---

## Top Down Approach
![](https://i.imgur.com/XPea4dJ.png)

### Stubs
<font size="5"> A developer works on each module, and some may not be ready at the same time - instead you create stubs to act like the modules so that they can be tested in combination.</font>

---

| PROs | CONs | 
| -------- | -------- | 
| Consistent    | Requires several stubs    |
| Takes less time | Poor support for early release | 
| Fault localisation is easier | Basic functionality is tested late | 
| Detect major flaws | |

---

## Bottom Up Approach
![](https://i.imgur.com/zMw37Vy.png)

### Drivers
<font size="5">This is the opposite of TDA, this is when higher level modules may not have been developed yet and so drivers are created to simulate what those modules would do.</font>

---

| PROs | CONs | 
| -------- | -------- | 
| Efficient    | Requires several drivers   |
| Takes less time | Poor support for early release | 
| Test conditions easier | Key interface is tested late | 
|  | Data flow is tested late |

---
