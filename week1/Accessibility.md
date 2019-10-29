# Accessibility

---

## 1. What does web accessibility mean?

---

Firstly, 

**ACCESSIBILITY** means the ability of EVERYONE, regardless of their condition/disadvantages, to have access to something


e.g old/young/blind/slow internet/old phones/blind/deaf etc

---

So... **WEB ACCESSIBILITY** means that EVERYONE, including those with disadvantages, can have full access to the web

---

## And why web accessibilty important?

--

- The internet has a responsibility to provide equal access and equal opportunity to EVERYONE and WE as developers have the same social  responsibility


- In the UK there is a an Equality Act 2010 which includes web accessibilty as part of its non-discrimination law

---

### What is semantic HTML

* Semantic meaning of an HTML element conveys some information about the type of content contained between the opening and closing tags.



##### Popular semantic tags
`<article>`, `<aside>`, `<details>`, `<figcaption>`, `<figure>`, `<footer>`, `<header>`, `<main>`,`<mark>`, `<nav>`, `<section>`, `<summary>`, `<time>`

---

### Why should we avoid the use of divs?

#### *divitis* 

* Easier for search engines, screen readers, and other machines to identify the different parts of your website.
* It helps you as a developer keep your site organized, which, in turn, makes it easier to maintain.

---

### What tag should appear on every page?

To build any webpage you will need four primary tags: `<html>`, `<head>`, `<title>` and `<body>`

When you begin any new page, it must have a declaration: <!DOCTYPE html>. It's telling or declaring to the browser that the following file is an HTML file. 

---

## 3. What are some basic accessibility checks that can be included in all of our projects?
- HTML language 
- Use a structure of headings and paragraphs: 
    so screen reader users could use the headings of a document as a signpost to find the content they need more quickly:
    eg. 

---

```htmlmixed=
    <h1>My heading</h1> 
    <p>This is the first section of my document.</p> 
    <p>I'll add another paragraph here too.</p> 
    <h2>My subheading</h2>
```

---

Using native keyboard accessibility 
- Certain HTML features can be selected using only the keyboard - Default behaviour 
- The elements that have this capability are the common ones that allow user to interact with web pages, eg.  `<button>`s, and form elements like `<input>`.

---

Text resizing 
- Making sure that the website nicely renders according to different screen sizes etc.. 

---

Accessible colors 
- Contrast

---

Image with text description 
-alt=”description of the image”

---

Accessibility info 
-Provide key information about the accessibility features of a site for people that need it, preferably at the bottom of the page. 

---



---

# How can we make a navbar accessible?


---

## Basic principles

Use the `<nav>` semantic element
Use a list (probably `<ul>`)
Use labels for each option 

---

## Labelling
Could use
1. aria-label
2. aria-labelledby

(ARIA = Accessible Rich Internet Applications)


---

### 1. aria-label
Gives the element (could be whole nav, could be list item) an invisible label

```
<nav aria-label="toplevelnavigation">
<ul>
<li><a></a></li>
</ul>
</nav>
```

---

### 2. aria-labelledby
This is a bit more conceptual!

`<nav aria-labelledby="navheading">`

It points to an element with the same id... and the label will be the CONTENT of that element

---


```
<nav aria-labelledby="navheading">
<h3 id="navheading">Browse my website!</h3>
<ul>
<li><a></a></li>
</ul>
</nav>
```

What is the label in this example?

---

## Where are you now?

To help the user know where they currently are in the navigation, you can....

* remove the `<a>` tag so the link is no longer clickable
* alternativelty, add `aria-current="page"` in the `<a>` tag


---

### **MODALS**
### (aka Dialog Windows aka Pop-ups)

Modals are pieces texts that pop up inside of the main web page window, prompting you for an action or give you a reminder 

Eg. Are you sure you want to leave this page? 

Eg. Please complete ALL input fields before submitting. 
