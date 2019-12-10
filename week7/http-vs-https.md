# HTTP vs HTTPS

![](https://media3.giphy.com/media/NN6FcdirnkygE/giphy.gif?cid=790b7611670cf86f420535df5bd805ef2a551ad351e3611f&rid=giphy.gif)

---

## HTTP
* HTTP stands for Hypertext Transfer Protocol.
* HTTP uses TCP (Transmission Control Protocol) to send and receive data packets over the web.
* It is a protocol used by a client and server which allows you to communicate with websites via request methods such as GET, POST etc.

---

## HTTPS
* HTTPS stands for Hypertext Transfer Protocol Secure 
* Sites running HTTPS will often have a redirect if someone incorrectly attempts to access the site using HTTP.
* HTTPS also uses TCP to send and receive data packets, but it does so with a connection encrypted by TLS.

---

## How does HTTPS work?

 - SSL/TLS Puts the "S" in HTTPS!

- HTTP is just a protocol, but when paired with TLS it becomes encrypted.

![](https://love2dev.com/img/the-https-stack-807x519.jpg =300x)

---

- HTTPS requires a TLS certificate to be installed on your server. 

- You can apply certificates to different protocols, like: 
  - HTTP (web), 
  - SMTP (email) 
  - FTP (file transfer protocol)

---

- A TLS certificate works by storing your randomly generated keys (public and private) in your server. The public key is verified with the client and the private key used in the decryption process.

---

## The HTTPS Handshake


![](https://love2dev.com/img/https-connection-sequence-diagram-968x624.png =700x)

---

- When your browser connects to an HTTPS server, the server will answer with its certificate. The browser checks if the certificate is valid:

  - the owner information need to match the server name that the user requested.
  - the certificate needs to be signed by a trusted certification authority.

- If one of these conditions is not met, the user is informed about the problem.

---

- The initial request is sent to the server for a verification. When the server responds that it is the desired server the client then sends a hello message.

- At this point the communication becomes encrypted.

- At this point the reader communication can proceed. The initial handshakes steps take place in a matter of milliseconds.

---

## What are TLS/SSL certificates?

---

### SSL - Secure Sockets Layer

It's the standard technology for:
- keeping an internet connection **secure** 
- safeguarding **sensitive** data that is being sent between two systems 
- preventing criminals from reading and modifying any information transferred, including potential personal details.

---

### TLS - Transport Layer Security
- is an updated, more secure version of SSL

---

### If you have your certificates ready: 

- HTTP**S** appears in the URL when a website is secured by an SSL certificate.

---

## 5 Benefits of using an SSL Certificate:

---

**1. SSL protects data**

- On installing SSL, every bit of information is encrypted


---
    
    
**2. SSL affirms your identity**

- provides authentication to a website


---

**3. Better search engine ranking**

- In 2014, Google made changes to its algorithm in order to give the upper hand to HTTPS-enabled websites.

- from 2018 onwards, Google has decided to flag the websites which do not have an SSL/TLS Certificate installed on their website. If anyone fails to comply with this rule, all the popular web browsers used around the globe like Google Chrome & Firefox Mozilla will punish them by giving a warning message of **‘Not Secure’** on the URL bar.

---

**4. SSL helps you satisfy PCI (Payment Card Industry) requirements**

- to receive online payments, your website must be PCI complient. Therefore you must have an SSL cert.

---

**5. SSL improves customer trust**

- Apart from encryption and authentication, SSL certificates are vital from a customer trust point of view.
- The easy to identify signs inform the users that the data they send will be secured. 


---

When you visit a site via HTTP all communication takes place over plain text. 

This can be read easily by any hacker that breaks the connection between your browser and the website e.g. with a MITM attack. 

**HTTPS and TLS/SSL stop this information from being readable.**

---

It is now free and easy to get a HTTPS certificate for your site, and the performance drop in using the more secure protocol is negligible. 

Many hosting packages now come with HTTPS as standard.

---

## DEMO: Generating certificates

https://flaviocopes.com/express-https-self-signed-certificate/

---

## Get official TSL/SSL certificates from:

* https://letsencrypt.org/
* https://www.cloudflare.com/en-gb/ssl/

You may have to prove that you are legit.

---

# Thanks!


