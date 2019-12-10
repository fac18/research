# 📦 Web storage 📦

Betania - Patricio - Reginaldo - Renata

---

## Web storage (DOM)

Allows web applications to store data locally within the user's browser.

Web storage provides two objects for storing data on the client:

### ```window.localStorage```
### ```window.sessionStorage```


---

## What are local storage and session storage?

---

## Local Storage

- Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data
- Storage limit is the maximum amongst local, session and cookies

---

## Session Storage

- The sessionStorage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
- Data is never transferred to the server.
- Storage limit is larger than a cookie (at least 5MB).

---

## What is the difference between the two?

<font color=yellow size=8>
Expiration time
</font>

<font size=6>

- **sessionStorage** will only be accessible while and by the window that created it is open
- It survives a browser refresh but not if that tab is closed

- **localStorage** lasts until you delete it or the user deletes it

Local = long term use
Session = temporary 

</font>

---

Using setItem() or getItem() you can add the data

Using removeItem() or clear() you can remove the data 

![](https://i.imgur.com/hISWqtz.png =500x)

---

# BUT WHY?
<font size=6 color=pink>

- Consider a site where you're buying a ticket 

- You can only buy one ticket, like an airline ticket flow, as opposed to a case with a shopping cart)

- If the user tries to buy two tickets in two different tabs, you wouldn't want the two sessions interfering with each other

- sessionStorage lets you track those session across multiple page loads independently

</font>

---

Why would you use cookies 🍪 vs local/session storage?

![](https://i.imgur.com/ogwUaUx.png =600x)

---

![](https://media.giphy.com/media/xUA7aPf8kouyzgbOXC/giphy.gif)

---

## Cookies

<font size=6.5>

*  used to store identifying tokens for authentication, session, and advertising tracking.
* all cookies valid for a page are sent from the browser to the server for every request to the same domain
* both for server-side and client-side reading 
* cookies can be made secure by setting the httpOnly flag as true; this prevents client-side access to it

</font>

---

## Local and Session Storage

<font size=6.5>

- if the data you are storing needs to be available on an ongoing basis then Local Storage is preferable to Session Storage (both can be cleared by the user)

- localStorage and sessionStorage are perfect for persisting **non-sensitive** data needed within client scripts between pages (for example: preferences, scores in games)

- data stored in localStorage and sessionStorage can easily be read or changed from within the client/browser (do not use it for sensitive data, both are vulnerable to XSS attacks)

</font>

---

### Demo a simple usage of localStorage and sessionStorage
![](https://media.giphy.com/media/dwmNhd5H7YAz6/giphy.gif)

---

# [QUIZ TIME!!!](https://play.kahoot.it/v2/?quizId=8213a484-58e9-4edc-b546-778cb567f94d)

---

![](https://media.giphy.com/media/3oEjHWXddcCOGZNmFO/giphy.gif)
