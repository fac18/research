# Week 1 - Research presentation guidance

## What is regex ? 
Short for regular expression, a regex is a string of text that allows you to create patterns that help match, locate, search-and-replace and manage text


### Why would I use it? 
Mastering regular expressions can save you thousands of hours if you work with text or need to parse large amounts of data

---

### What are some examples of common regex usage?

![](http://giphygifs.s3.amazonaws.com/media/A7ZbDgux9RD0s/giphy.gif)

You may have come across regular expressions whilst working through codewars. Built in js methods such as search() and replace() that work on strings are both examples of RegEx.

---

Matching a password
- 6 to 12 characters in length
- Must have at least one uppercase letter
- Must have at least one lower case letter
- Must have at least one digit
- Should contain other characters
```
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$
```

---

Matching HTML TAG
- The start tag must begin with < followed by one or more characters and end with >
- The end tag must start with </ followed by one or more characters and end with >
- We must match the content inside a TAG element
```
^<([\w]+).*>(.*?)<\/\1>
```

---

Matching duplicated words
- The words are space separated
- We must match every duplication – non-consecutive ones as well
```
b(\w+)\b(?=.*\1)
```

---

## Research:
### How to use regex 

![](https://media.giphy.com/media/ihHel56pRnBwrbJzsV/giphy.gif)

---

- Regular expressions are used to match parts of strings. The pattern is encased within a pair of forward-slashes: 
```
                            var regex = /pattern/
```

---

- You can test a string using the following syntax to return a boolean value:
```
                                regex.test(string);
```

---

- You can extract matches from a string using the following syntax:
```
                               string.match(regex);
```
- This will return an array of matches and the capture group.
                    
---

- You can search for repeat substrings using capture groups. You put the regex of the pattern that will repeat within parenthesis. To specify where that repeat string will appear, you use a backslash and then a number.
```
                                regex = /(code)\n/
```                         

---

### Find and use on-line tools such as regex101 

- [REGEXONE](https://regexone.com/): Interactive online tool for _learning_ Regular Expressions with simple, interactive exercises.

---

- [REGEXPER](https://regexper.com/): Generates images as diagrams that are a straight-forward way to illustrate what can sometimes become very complicated processing in a regular expression, with nested looping and optional elements. 

---

- [REGEX101](https://regex101.com/): Online regex _tester, debugger with highlighting_ for PHP, PCRE, Python, Golang and JavaScript.

---

- [REGEXTESTER](https://www.regextester.com/): Online regex _tester, debugger with highlighting_.

---

### Create a code snippet using regex such as (for example) email validator: 

---

us3r1@foundersandcoders.com
- user must start with an alphabetical character;
- user can contain also other characters (which ones?);
- site and user are always separated by a snail/small duck/AT symbol (@);
- site is always done with at least 3 alphabetical characters, a dot and at least 2 more alphabetical characters
```
^[a-zA-Z].[\w]+(@){1}[a-zA-Z]{3,}\.[a-zA-Z]{2,}
```

---

## Tests
[REGEX101](https://regex101.com/)
```
^[a-zA-Z].[\w]+(@){1}[a-zA-Z]{3,}\.[a-zA-Z]{2,}
```
Success:
user1@yup.com
us3r2@yes.org
user3@yah.dot
user4@yum.edu
user9@yos.uk

---

Failure:
5user@yup.com
us;er6@yes.com
user7/yah.com
user8@yo.com

---

## :pencil: Other useful resources: :pencil:
[JavaScript RegExp Reference](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
[What is Regex?](https://www.computerhope.com/jargon/r/regex.htm)
[Regex FreeCodeCamp Guide](https://guide.freecodecamp.org/javascript/regular-expressions-reference/)
[Modifiers](https://www.w3schools.com/jsref/jsref_obj_regexp.asp/)


---
### Team:
Reggie\
Judith\
Reda\
Renata
