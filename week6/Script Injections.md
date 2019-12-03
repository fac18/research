# Script Injections
### by Dan, Jamie, Judith, Kin

---

Useful further reading links:

[8 ways to prevent SQL injection attacks](https://tableplus.com/blog/2018/08/best-practices-to-prevent-sql-injection-attacks.html)

[More in-depth information on defences](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.md) (example code given in different languages)

---

![](https://media0.giphy.com/media/aJCvKRUFcbT9K/giphy.gif?cid=790b7611f78ba84f44380d09eb532894decf19f808197024&rid=giphy.gif)

---

## What Are Script Injections?

- Also known as Remote code execution (RCE)
- Security vulnerabilities that enable an attacker to inject malicious code in the user interface element of Web form of data-driven Web sites
- Four main types of code injection: SQL injection, Script injection, Shell injection, and Dynamic evaluation

---

## Common HTML tags prone to script injection

```html
- <script>
- <meta>
- <html>
- <body>
- <embed>
- <frame>
- <frameset>
- <img>
- <style>
- <link>
- <object>
```

---

## innerHTML vs textContent

- Element.innerHTML can be used to retrieve or write text inside an element
- textContent can prevent Cross-Site Scripting (XSS) attacks

---

## What is an SQLi

- SQL injection is a web security vulnerability that can allow an attacker to interfere with the queries that an application makes to its database
- It is the most common type of code injection
- An attacked could 
    - view, modify or delete data that they are not normally able to access
    - cause persistent changes to the application's content or behaviour
    - compromise the underlying server or other back-end infrastructure
    - perform a denial-of-service attack
    
---

## Preventing SQLi

- Do not use dynamic SQL; any string used in a query:
    - always be a hard-coded constant
    - never contain any variable data from any origin
    - if any user input data, should be sanitised and validated before making a query

---

## 8 ways to prevent SQLi

1. Using Prepared Statements (with Parameterized Queries)
- one of the best ways to prevent SQL injection
- use a parameter instead of inserting the values directly into the command
- prevents the backend from running malicious queries that are harmful to the database

2. Using Stored Procedures
- making your app treat input as data to be operated on rather than SQL code to be executed
- written and stored in the database server, and then called from the web app

3. Validating user input
- makes sure the value is of the accepted type, length, format, etc
- only stop the most trivial attacks, it does not fix the underlying vulnerability
4. Limiting privileges
- avoid connecting to your database using an account with root access
- limit the scope of damages


5. Hidding info from the error message
- detailed error messages can reveal information about the architecture of your database
- only show generic error messages
6. Updating your system
- apply patches and updates your system, especially for your SQL server

7. Keeping database credentials separate and encrypted
- always store database credentials in a separate file and encrypt it
8. Disabling shell and any other functionalities you don’t need


---

## Preventing SQLi

```Javascript const dbConnection = require("../database/db_connection");

const postBugbears = (category, name, rage_level, description, cb) => {
  dbConnection.query(
    "INSERT INTO bugbears (category, name, rage_level, description) VALUES ($1, $2, $3, $4)",
    [Electric-Cars, Tesla, 250+ MILES (EPA EST.), Cybertruck],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postBugbears;

```

---

### Example of good practice

```var pg = require('pg');

var connection = "postgres://username:password@localhost/database";

var client = new pg.Client(connection);

// Query and parameters passed separately.
client.connect(function(err) {
  client.query(
    'select * from users where email = ?',
    [email],
    function(err, result) {
      // Do something with the retrieved data.
    });
  });

client.end();

```

---




