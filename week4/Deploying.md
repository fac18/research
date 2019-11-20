# Deploying

---

# Cloud Platforms

---

### What is PaaS?
<font size = '6' color= yellow>

Platform as a Service(PaaS) is one of four types of cloud services, along with:

 - Software as a Service (SaaS);
 - Infrastructure as a Service (IaaS);
 - and Serverless.

PaaS is a complete development and deployment environment in the cloud.
 </font>

---

<font size = '6' color= yellow>

- PaaS allows you to avoid the expense and complexity of buying and managing software licences and the underlying application infrastructure, middleware, container orchestrators or development tools and other resources.
</font>

---

### Among the leading PaaS providers are:

<font color= yellow>

* Amazon Web Services (AWS)
* Microsoft
* Google
* IBM
* Salesforce
* Red Hat
* Pivotal
* Heroku

</font>

---

#### They offer cloud-based services that include:
<font color= yellow>

* storage
* databases
* compute
* analytics
* networking
* mobile back-end
* developer tools
* management tools
* security

</font>

---

## AWS Elastic Beanstalk

<font size = '6' color= yellow> Companies can quickly deploy and manage applications in the AWS Cloud without having to learn about the infrastructure that runs the applications. 

It automatically handles the details of ***capacity provisioning***, ***load balancing***, ***scaling,*** and  ***application health monitoring***. </font> 

---

## Google Cloud Functions

<font size = '6' color= yellow> Designed to make it easy for developers to ***run and scale code*** in the cloud and ***build event-driven serverless*** applications.</font>

---

## Salesforce 

<font size = '6' color= yellow> A company that sells a complementary suite of enterprise applications focused on ***customer service, marketing automation, analytics*** and ***application development***.</font>

---

# Environment Variables

---

### What is environment variable

<font color= yellow>
 Wherever you needs to hide sensitive data in your configuration file, you use environment variables. 
 
They are simply a name mapped to a value that are external to our application which reside in the OS or the container of the app it is running in.
</font>

---

### Why might some variables in your code need to change for different environments? 

<font color= yellow>
So when pushing the code to GitHub we have to make sure passwords, tokens, or databases don't get pushed where it can get leaked. So it is important to store them in a configuration file and put the file in .gitignore.
</font>

---

### Why is it a bad idea to include those variables in a public repository? 

---

#### Example 1
![](https://i.imgur.com/9aHPFez.png)

---

#### Example 2
![](https://i.imgur.com/wyXEgI7.png)

---

### What modules might you use to help manage environment variables? 

---

#### env2 Module

<font size = '6' color= yellow>
env2 allows you to store your environment variables in an env.json or a .env file which gets loaded when your app starts.
</font>

---

#### the .env File

filename.env
```
export DB_HOST=127.0.0.1
export DB_PORT=9200
export DB_USER=anon
export DB_PASS=password
```

---

### Code Along

---

#### Go to Node-Intro-Workshop
![](https://i.imgur.com/6dUJA5i.png)

#### Install 
![](https://i.imgur.com/mrzVk9t.png)

#### Create your file
![](https://i.imgur.com/88NhyRC.png)


#### Export it to your server
```
const env = require('env2')(__dirname + "/democonfig.env")
```

#### You can now access your sensitive info
```
console.log(process.env.DB_USERNAME)
```

---

## Deploy a Simple Server to Heroku as a Demo


![Fingers crossed gif](https://media.tenor.com/images/39b5ee497d8860bea9d79463518220f1/tenor.gif)


<font size = '6'>Heroku Documentation
[https://devcenter.heroku.com/articles/deploying-nodejs#overview](https://)</font>
