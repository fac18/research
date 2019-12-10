
# Research brief
### Attacks
- What are the following types of attack?
    - Man In The Middle (MITM)
    - Cross Site Scripting (XSS)
    - Cross Site Request Forgery (CSRF)
- How can you defend against each of them?

---

# TEAM ATTACK!!!!

![](https://media.giphy.com/media/QObPo575HQHlGMhbae/giphy.gif)

**K**in**R**osa**A**yub**G**illian

---

### What are web attacks?

![](https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif)
* Attacks that exploit weeknesses or vulnerabilities in code
* DDoS is a common type of web attack ([Labour party cyber systems attacked twice in two days](https://www.theguardian.com/politics/2019/nov/12/labour-reveals-large-scale-cyber-attack-on-digital-platforms)) which aims to disrupt systems by overwhelming the server or network
* People often use web attacks to gain access to databases in order to obtain sensitive data
* Web applications have direct access to backend data such as databases, which makes it more difficult to secure them against attacks
* Firewalls and SSL provide no protection against a web application attack, because access to the website has to be made public. Certain ports are needed and remain open for legitimate access to databases, but this presents a vulnerability
* SQL Injection attacks (targets databases directly) are the most common and the most dangerous type of vulnerability

---

### Fun stats!

* there is a hacker attack every 39 seconds
* half a billion personal record stolen in 2018 - 25% more than the previous year
* 90% of cybersecurity breaches are due to human error - e.g. clicking on a malicious link, replying to a fake email, leaving laptop on train
* 95% of breached records are from government, retail, and technology - not because less secure, but they're high value targets with personal information
* most companies take nearly 6 months to detect a data breach (even major ones) - by the time you're notified that there's a breach, your data is probably already compromised


---

### Man in the Middle 

![](https://media.giphy.com/media/gfMdQ0dgId2Te/giphy.gif)

---

- the hacker intercepts communication between two parties, or they manage to gain access to their device.
- In order for this attack to be successful you must interception and decryption.
- the hacker needs a way of injecting malicious software into the device.
- the victim isn't aware of the man in the middle 


---

### example

- wifi WiFi eavesdropping.
- email phishing.
- Paul and Ann Lupton

---

### how to prevent 

- always check before you use public wifi
- always be careful of phishing emails
- use HTTPS because of the extra layer of security.


---

## XSS - Cross Site Scripting

* Injections 💉
* Malicious code sent
* If successful, system will run the malicious code as intended (e.g. script tags as Javascript)

---

* Stored attacks: bad script stored on server
    * E.g. posting message
    <br>
* Reflected attacks: bad script put in request and reflected straight back in response
    * E.g. search term

---

## Why?

Get personal data e.g. cookies: login data

Manipulate behaviour e.g. redirect unsuspecting users to bad places e.g. phishing sites

![](https://sophosnews.files.wordpress.com/2012/10/ebay-logos-thumb.jpg)

---

Demonstration!

![](https://media.giphy.com/media/gLREH1v1Z78tJckuii/giphy.gif)

---

## Defences

![](https://media.giphy.com/media/4IkpVa1GvRt16/giphy.gif)

---

Encoding against problematic characters like < >

![](https://i.imgur.com/PeWfmOF.png)

---

![](https://i.imgur.com/KKTOjxS.png)

search result:
![](https://i.imgur.com/RWjobRu.png)


---

Make it text!

E.g. put user input into quotation marks (store/write as strings)

---

![](https://i.imgur.com/pNrJiN0.png)

---

![](https://i.imgur.com/STTIRjR.png)

---

![](https://i.imgur.com/lvQuTkR.png)
![](https://i.imgur.com/pNrJiN0.png =450x200)
![](https://i.imgur.com/zqRPtgY.png)
![](https://i.imgur.com/STTIRjR.png =450x200)

---

### URLs

Check is valid URL format before using?

---

## Further Reading

This website is very comprehensive!

https://cheatsheetseries.owasp.org/

(not just for XSS attacks)

---

## Cross browser website forgery: A HOW TO GUIDE

![](https://media.giphy.com/media/Y48GNO7DnvGsU/giphy.gif)

---

![](https://i.imgur.com/3g9GLb3.png)

---

## STEP ONE

``GET http://netbank.com/transfer.do?acct=AttackerA&amount=$100 HTTP/1.1``


---

## STEP TWO (GET)

``<a href="http://netbank.com/transfer.do?acct=AttackerA&amount=$100">Read more!</a>``


---

## STEP TWO (POST)

```<body onload="document.forms[0].submit()">
   <form action="http://netbank.com/transfer.do" method="POST">
     <input type="hidden" name="acct" value="AttackerA"/>
     <input type="hidden" name="amount" value="$100"/>
     <input type="submit" value="View my pictures!"/>
   </form>
 </body> 
 ```

---

## How do i defend against it? 

![](https://media.giphy.com/media/TJaNCdTf06YvwRPCge/giphy.gif)

---

## Synchroniser token pattern

A token, secret and unique value for each request, is embedded by the web application in all HTML forms and verified on the server side.

The token will then be included as a request parameter when the form is submitted.

``<input type="hidden" name="csrfmiddlewaretoken" value="KbyUmhTLMpYj7CD2di7JKP1P3qmLlkPt" />``

This token is generated by any method that ensures unpredictability and uniqueness.

---

![](https://i.imgur.com/RKiwDPy.png)


---

![](https://i.imgur.com/PLaI8By.png)


---

## Extra reading

- https://portswigger.net/web-security/csrf
- https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html

---
