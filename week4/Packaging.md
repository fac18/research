# Packaging


---

### Dependencies

---

### What is a dependency?

* In broad terms a dependency is when a piece of software relies on another piece(s) of software or code for part of its functionality.

* We refer to the packages that our software will rely on as _dependencies_.

* The code units that make up dependencies are often described as packages, libraries or modules. 

---

* In most cases a dependency will be third-party code package that is brought in to fulfill a particular task. 

* Dependencies are sometimes used only for testing, compiling or de-bugging (aka dev-dependencies), but can also be required for the software to run.

* There are dependency packages for most common code languages and they are used by all manner of software ranging from small apps to operating systems.

---

### Why use a dependency?

* Using dependencies allows us to access high-quality, debugged code that may otherwise require significant time or expertise to develop.

* Means we can save time not having to write common pieces of code and easily access useful functionality such as testing.

* Makes our uploads to hosts such as github much smaller, when the program can download the dependencies as required.

---

### Dependency management issues

* Different language structure libraries in different ways. e.g. javascript has many small libraries that do one small thing well, whereas python has more comprehensive standard libraries.

* As dependencies are largely third-party code by using them we may expose our program to any flaws in that code. Depending on the scale of our project this can have a differing impact on the time it takes to fix.

---

* Some dependencies may be required for a certain isolated task, but other dependencies may depend on other packages themselves.

* It is important to ensure dependencies are up-to-date. If package versions get mixed up and become incompatible, the chain of dependency can break and we end up in...

---

### :fire::fire::fire:Dependency Hell:fire::fire::fire:

---

### Dependency links

* [Intro to software dependencies](https://www.nexb.com/blog/introduction_to_software_dependencies.html)
* [.gov advice on dependency management](https://www.gov.uk/service-manual/technology/managing-software-dependencies)
* [Dependency Hell](https://en.wikipedia.org/wiki/Dependency_hell)
* [On dependency management and risks](https://queue.acm.org/detail.cfm?id=3344149)
* [FCC article on Dependencies](https://www.freecodecamp.org/news/code-dependencies-are-the-devil-35ed28b556d/)

---




### What is a Package Manager?

A package manager is a piece of software that lets you manage the dependencies (external code written by you or someone else) that your project needs to work correctly. It automates the downloading and installation of dependency packages.

Package Managers: NPM, Yarn, Gulp ...

---

![](https://i.imgur.com/XleX70T.png)

NPM (Node Package Manager) - It is the default package manager for the JavaScript runtime environment Node.js. It provides access to more than 750,000 packages. 

---

It is  defined in three different parts:

* The Website – It is the place where users can browse packages, read the docs, and find general info on npm.

* The Registry – It is the database that stores the information and the code for the packages.

* The npm client – It is the tool installed on the developer’s machine to allow them to install, publish, and update packages.

---

### What is package.json?

Package.json - holds various metadata relevant to the project. 

It is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. 

It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data. The package.json file is normally located at the root directory of a Node.js project.

---

### Examples of package.json files


![](https://i.imgur.com/qPWVfEA.png)

![](https://i.imgur.com/OW5KEWS.png)


---

### What does npm init do? 

```
npm init
```
The npm init command is a step-by-step tool to scaffold out your project. 

* The project's name,
* The project's initial version,
* The project's description,
* The project's entry point (meaning the project's main file),
* The project's test command (to trigger testing)
* The project's git repository (where the project source can be found)
* The project's keywords (basically, tags related to the project)
* The project's license (this defaults to ISC - most open-source Node.js projects are MIT)

---

#### faster version:
```
 npm init --yes
```
or even:
```
npm init -y
```

---

npm init <initializer> can be used to set up a new or existing npm package.

Create a new React-based project using create-react-app:
```
npm init react-app ./my-react-app
```

---

### How do you use an installed package in your code?


Once you have installed a package in node_modules, you can use it in your code.

If you are creating a Node.js module, you can use a package in your module by passing it as an argument to the require function.

---

For example, to use the lodash package in a Node.js module, in the root directory of the module, create a file named index.js with the following contents:

```
var lodash = require('lodash');

var output = lodash.without([1, 2, 3], 1);
console.log(output);
```

If we run the code using ```node index.js``` it should output [2, 3]

---

### npm install

![](https://i.imgur.com/C05THpF.png)

Installs all modules listed as dependencies. By default npm install, installs both devDependencies and Dependencies.  


---

#### global vs devDependency vs Dependency

1) global - you install it it globally on your machine, therefore you are able to use it for any project

2) devDependency - you install this package locally, as you would need it for development.

3) Dependency - You install this package, for production, therefore you would not need it as part of you development. 




---




#### command line 

npm install (package name) --save-dev
npm install (package name) --save
npm install -g (package name)

---



#### Package files

npm will create a node_modules folder at the root of your project. This is where any third party modules you install are stored. 

Node_modules could contain many folders, which require a lot of space, therefore you should never push it to Github. 

you use gitignore, and this will tell git to leave all of those folders alone. 










