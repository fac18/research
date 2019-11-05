## Dom Manipulation

![](https://media.giphy.com/media/cD3ZPn3TTWLu/giphy.gif =600x400)

---

![](https://i.imgur.com/qtjgXV5.png)


---

## How can you use JavaScript to create an HTML element and then add it to your webpage?

To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.

![](https://i.imgur.com/6aazYib.png)

---

## How would you replace an existing element with it?


![](https://i.imgur.com/UYhdckR.png)



---

## How would you add a \<li> element to the start of a \<ul>?


Option 1) No existing \<li>s
Option 2) Existing \<li>s

---

In either case, create your \<li> element
and identify your \<ul> element

![](https://i.imgur.com/yzTpsz4.png)



---

Option 1) No existing \<li>s

If your \<ul> is sitting there empty and waiting for \<li>s, 

![](https://i.imgur.com/urAMZup.png)

---

you can use 

<font color='yellow'>appendChild()</font>


![](https://i.imgur.com/3H4SW2p.png)

---

And now the list item will appear on the page, and is also visible when you inspect the elements in Dev tools

![](https://i.imgur.com/yrYxQaq.png)



---

Option 2) Existing \<li>s

![](https://i.imgur.com/j1glpTo.png)


appendChild() would add new \<li> AFTER existing children


---

Instead we can use a method called <font color='yellow'>insertBefore()</font>, which takes as parameters:
1) your new node
2) the reference node (the node you want your new node to go before - i.e. the first existing \<li>)

and use <font color='yellow'>.childNodes[0]</font> to identify the first child node of the list 

![](https://i.imgur.com/ddxuuaD.png)

---

NB there is an insertBefore() method but no insertAfter() method!

---

Ta-da!

![](https://i.imgur.com/hZfmBen.png)

---

## What is a JavaScript Event? 

JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page.

When the page loads, it is called an event. When the user clicks a button, that click too is an event. Other examples include events like pressing any key, closing a window, resizing a window, etc.

JavaScript lets you execute code when events are detected.

---

Method one:

![](https://i.imgur.com/Nk9OPvi.png)

---

Method two:

![](https://i.imgur.com/tFh49hQ.png)

---

## event.preventDefault() 

* The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
![](https://i.imgur.com/XU6Zyaq.png)

---

## What could you do with it? 
* Stop a user from following a link (as below)
* Stop a form from automatically submitting 
* Stop a user from being able to check a checkbox
* You might want to stop forms from automatically submitting when the submit button is clicked, giving you a chance to instead submit the form data asynchronously using JavaScript.

---

## What is a NodeList? 

* NodeLists objects are collections of nodes

* A NodeList is similiar to HTML collection.

* Both an HTMLCollection object and a NodeList object is an array-like list (collection) of objects. Both have a length property defining the number of items in the list (collection).



---

## NodeList - features

* usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll() .
* Although NodeList is not an Array , it is possible to iterate over it with forEach() . 
* It can also be converted to a real Array using Array.from() 


---

## Example of a NodeList

a collection of all the div nodes in the document:

```javascript
var div_nodes = document.getElementsByTagName("div");

```


[nodelist methods](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)


```javascript
nodeItem = nodeList.item(2);

```

---

## NodeLists and HTMLCollections

* HTMLCollections are live but NodeLists are static (i.e. changes to elements/the DOM are updated for the former, not for the latter)
* querySelectorAll produces NodeLists whereas getElementsByClassName/getElementByTagName produce HTMLCollections
* they have the same methods except for namedItem, which only HTMLCollections have
* both are array-like objects which can be easily made into arrays (Array.from or spread operator methods)


---

## How is NodeList different from an Array?

* A NodeList has items stored at numeric indices and a length property just like an Array.
* But it does not have have any of the other Array methods (push, slice and so on). 
* NodeList has its own prototype with a single method instead of inheriting from the Array prototype.


---


## How to transform nodeLists into arrays?
1. Use Array.from method
```javascript=
const nodelist = document.querySelectorAll(".divy")
const divyArray = Array.from(nodelist)
```
2. Use Array.prototype.slice
```javascript=
const nodelist = document.querySelectorAll("".divy")
const divyArray = Array.prototype.slice.call(nodelist)
```

3. ES6 Way
```javascript=
const divyArray = […document.querySelectorAll(‘.divy’)]
```


---

## What are the security concerns around Element.innerHTML and what could you use instead?

Danger of cross-site scripting (XSS) attacks

### How it works

<sub> The idea behind an XSS attack with innerHTML is that malicious code would get injected into your site and then execute. This is possible because innerHTML renders complete markup and not just text. <sub>



---

## How to prevent attacks

It is recommended that you do not use innerHTML when inserting plain text; instead, use Node.textContent. This doesn't parse the passed content as HTML, but instead inserts it as raw text.

If you’re adding content to a page that you didn’t write, you should sanitize it to protect yourself from XSS attacks.

