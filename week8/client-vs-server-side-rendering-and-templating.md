# Team
# Client vs Server Side Rendering
### and
# Templating

![](https://media.giphy.com/media/VwaphnrlgX0Os/giphy.gif)


---


#### What is server-side rendering (SSR)?
- the conventional method for rendering content 
- server receives the request from the browser, server gets the file, compiles everything, delivers it to the client
![](https://i.imgur.com/OVhMmJq.png)
- does this every time the client navigates to another route
- mostly for displaying static images and text

---

#### Client Side Rendering

* rendering content in the browser using JavaScript 
* instead of getting all of the content from the HTML document itself, you are getting a bare-bones HTML document with a JavaScript file that will render the rest of the site using the browser
* realtively new approach
* popularised with React.js and Vue.js (js libraries for building interfaces )

---

## SSR vs CSR pros and cons


## Server side - pros
- Search engines can crawl the site for better SEO (search engines cannot yet efficiently index applications that exclusively render client-side)
- The initial page load is faster
- Great for static sites
- e.g. Graphic Novel 


![](https://i.imgur.com/17yIpyr.png)

## Server side - cons
- Frequent server requests
- An overall slow page rendering
- Full page reloads
- Non-rich site interactions

## Client side - pros
- Rich site interactions
- Fast website rendering after the initial load
- Robust selection of JavaScript libraries
- Great for web applications
- e.g. browser based games

## Client side - cons
- Low SEO if not implemented correctly
- Initial load might require more time
- Lazy loading
- In most cases, requires an external library
- Roughly 2% of users have JavaScript disabled, in which case client-side rendering won’t work at all

---

![](https://i.imgur.com/6Dg6Nd4.png)

![](https://i.imgur.com/0CaWzRK.png)


![](https://i.imgur.com/iwgsW9j.png)

![](https://i.imgur.com/WhCePw4.png)


![](https://i.imgur.com/FM7ZqjC.png)

---

## Templating languages

![](https://media.giphy.com/media/Yjb1jDhMWswRG/giphy.gif)

<font size=6>

* Templating languages,  allow developers to take data and insert it into a structured format.
* Modern template languages not only support placeholders, but also loops and conditions which are often necessary for designing a web page.
* Examples: Mustache, Handlebars 
* Mustache is fully logic-less but Handlebars adds minimal logic thanks to the use of some helpers: if, with, unless, each and more.

</font>

![](https://i.imgur.com/TpskuwF.png =600x400)

<font size=6>
* A template processor is software designed to combine templates with a data model to produce result documents.

* The language that the templates are written in is known as a template language or templating language.

</font>


---

## What problems do templating languages solve

<font size=6>

 - Helps organising source code into operationally-distinct layers (MVC model)
 - Allows code to be more re-usable + modularised
 - Enhances productivity by reducing unnecessary work and saving time (esp for developers)
- Enhances teamwork by allowing separation of work based on skill-set (e.g., artistic vs. technical)

</font>

---


## Additional functionality of templating languages


![](https://media.giphy.com/media/3ov9jZafEefHLyTf8c/giphy.gif)


---

### The if block helper

You can use the if helper to conditionally render a block. If its argument returns false, undefined, null, "", 0, or [], Handlebars will not render the block.
```js

<div class="entry">
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{/if}}
</div>

```



---

### the else block helper


You can also specify a template section to run if the expression returns a falsy value. The section, marked by {{else}} is called an "else section".

``` js
<div class="entry">
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{/if}}
</div>

```

---



You can use the unless helper as the inverse of the if helper. Its block will be rendered if the expression returns a falsy value.

``` js
<div class="entry">
  {{#unless license}}
  <h3 class="warning">WARNING: This entry does not have a license!</h3>
  {{/unless}}
</div>
```


---

## Thank you! 


![](https://media.giphy.com/media/l3vRdPiThEErHIQOA/giphy.gif)

---
