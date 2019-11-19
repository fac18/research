# Architecting

Gillian, Reda, Nikke & Renata

---

### Separation of concerns 

Idea that each module or layer in an application should only be responsible for one thing and should not contain code that deals with other things.

---

### Why do we separate concerns?

Reduces code complexity by breaking a large application down into smaller units with distinct, readable functions. This is a way of maintaining order and a great architecture.

♻️Reuse
✂️Modify
🕷Debug 

---

### Front-end vs. Back-end 
![](https://i.imgur.com/tvSqHHj.gif)

---

### Front-end tasks 💄💅
* Prioritizing UI/UX
* Bringing a concept to life with HTML, CSS, and JavaScript (and frameworks)
* Production and maintenance of websites and web application user interfaces
* Design and visuals (as implementing design for mobile sites)
* Looking at SEO and Accessibility best practices

---

### Back-end tasks ⚙️🛠
* Database creation, integration, and management
* Web server technologies
* Cloud computing integration
* Server-side programming languages and frameworks
* Security settings and hack prevents
* Reporting—generating analytics and statistics


---

### Client side vs server side

![client](https://media.giphy.com/media/sqVGLWmCrSaBy/giphy.gif)
![server](https://media.giphy.com/media/3o7ZeN7G06IYotzIU8/giphy.gif)


---

### Client-side scripting 

<br>

✅ can excute interactivity immediately - no need to send request/response first

✅ simpler - if you don't need back-end functionality

---

### Client-side scripting

<br>

❌ as a developer, you don't know what resources the user will have available (e.g. using mobile? old browser? is JS supported?)

---

### Server-side scripting

<br>

✅ security: can hide sensitive information from users
✅ resources: more processing power and more space potentially available for huge databases etc
✅ content will load quicker because browser doesn't need to digest large client-side scripts

---

### Server-side scripting

<br>

❌ more complicated to develop. probably will need more bespoke coding.
❌(✅) resource onus on you: need to make sure your site has adequate hosting.

---

### Validation - where's best?

 E.g. a user filling in a form with address
 Fields like postcode might be validated

---

#### Client
* quick, instant feedback
#### Server
* only happens when user clicks submit: annoying for user to go back at this point and update?
* but maybe client side validation encounters problem (e.g. JS disabled) - still important to have validation on server side

---

### Templating

Think of the 'template literal' we saw this morning
`Hello ${firstName} ${lastName}, how's the weather in ${London}`

* Potentially faster performance on server
* But could be cumbersome on server if many users and making many requests all the time
* So can be easier to just ship the data to the client and make it render appropriately

---

### Alternative back-end technologies:

- Which other technologies (programming languages and servers) might be used instead of Node on the back end?

---

#### **PHP + MySQL**
Great for blogs and news databases

#### **RUBY + RAILS**
Straightforward, readible and self-documenting. 
Rails is good for rapid application development (RAD)

---

#### **PYTHON + DJANGO**
As straightforward as Ruby but more focused in Data Science.

#### **JAVA + SPRING**
A good choice for Android development

---

- What are some of the pros and cons of using Node in your stack, rather than one of those alternatives?

---

# Node.js

- Node.js is the newest and fastest growing today
- Released in 2009
- Used to run Javascript code on the server-side
- SUPER PRO: You do not need to learn a new language for back-end development if you know JavaScript!

---

- Node.js is great for developing applications with:
    - real-time features such as chats or games
    - data streaming apps

- has the default node package manager NPM which helps developers!

- Notable websites built on Node.js: PayPal, Uber, LinkedIn, Netflix.

---

# PHP

- PHP is one of the oldest and most used scripting languages for server-side development. Released around 1995.
- it powers over 42 million sites (Oct,2019)
- 80% of websites are currently running on PHP
- ... because it was the first programming language designed for the web, this has lead to its dominance since the 2000s.

---

- PHP covers many sites, predominantly blogs and News sites. 
- Great for content-based web pages

- Notable websites built on PHP: Facebook, Flickr, Yahoo Wikipedia, Wordpress.

---


## Writing for different environments:

---

### All browsers have JavaScript engines that run the JavaScript of web pages. 
- Firefox has an engine called Spidermonkey
- Safari has JavaScriptCore
- Chrome has an engine called V8

---

Node.js is simply the V8 engine bundled with some libraries to do I/O and networking, so that you can use JavaScript outside of the browser, to create shell scripts, backend services or run on hardware

---

### Why might you have to write JavaScript differently if it's going to run in the browser, rather than in Node

- In the browser, you are mostly interacting with:
✅ the DOM 
✅ other Web Platform APIs like Cookies 🍪 Yum. 
 
- In Node.js you don't have
❌ the document
❌ the window
❌ all the other objects provided by the browser

---

### In Node.js you control the environment 

- Unless you are building an open source app, you know which version of Node you will run the application on so you can write in ES6(7,8,9) syntax! 
- in the browser environment you don’t get to choose which browser your visitors will use so may have to write in ES5 syntax (explorer? 😞) 

-  Node uses the CommonJS module system while the browser uses standard ES Modules which has different syntax

-  In practice, this means that for the time being you use ```require()``` in Node and `import` in the browser.

---

### What tools can help bridge the gap?

- You can use Babel ( a compiler) to transform your code to be ES5-compatible. Babel comes packaged as a node module (use npm install with --save-dev) and is baked-in to React
- Using an IDE (integrated development environment) for Node.js can help autocomplete, compile, debug and unit test your code
- Node Inspect: Similar to the Chrome Developer Tools, but for when your app runs on Node.js

---

![gif](https://media.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif)

www.kahoot.it 
