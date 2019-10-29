# Command line research

## Brief

* What is the command line?
* Why might you want to customize it?
* Research how to: customise your command line to make it pretty and useful (ie. git branch/branch status parser)
* Install using a package manager
* Create a "workshop", designed to walk the rest of your cohort through the steps (this doesn't need to be long - just one markdown file)
* Finally we will present findings in 10 minutes, with 5 for Q&A

---

## What is the command line?

![](https://media.giphy.com/media/12W5Sg2koWYnwA/giphy.gif)

---

![](https://fossbytes.com/wp-content/uploads/2016/06/CLIvsGUI-IntroductionToLinuxShell.png)
Unlike a GUI (graphical user interface) operating system, a command line only 
uses a keyboard to navigate by entering commands.

---

## Advantages to using the command line over the GUI

* You can manage files faster and easier on your computer.
* It's easier to work with computers remotely and manage files on a file server or web server.
* You can easily automate commonly performed tasks.
* If you forget a command option, just run it with -h, —help, or man/info.
* man pages can be a lot easier to read, and more concise than, standard Help on GUI software.
* You can do a bunch of very interesting things using  simple ops like |, &&, ||, and redirection.
* Sitting in front of a black screen with scrolling text looks cool. 

---

## Workshop: basic commands

One of the tough things to get used to is navigating your computer in the terminal!

So we've prepared a [workshop](https://github.com/fac18/research/blob/master/week1/command-line-workshop.md) to skill you up in the basics.

Let's get started by opening up the terminal. On Linux, hit the following keys:

>  CTRL + ALT + T

---

You should now be looking at something that looks a bit like this:

![](https://i.imgur.com/Fkx2dkz.png)

The prompt above displays as `dan@zenith` because my name is Dan, my computer is called 'zenith', and I am sitting in my home directory, represented by the ``~``.

---

To display the directory you're currently sitting in, write

`pwd`

and press Enter.

The next line that appears is your present working directory! For me, what appears is:

```bash
dan@zenith:~$ pwd
/home/dan
```

---

To see what files and directories (that is, folders) we have, use:

```bash
ls
```
We can then move around the file system by specifying a path to a directory.

Starting from home, some of the following operations and see where they lead you:

```bash
cd Documents
```

```bash
cd @/Desktop
```

```bash
cd ..
```

---

## Customisation
The command line is obviously has many different uses, however 
It has the same background and white text. You can customise many aspects
In order to make it more personal. You can add different fonts, colours and window layouts. 

---

The example we used is editing the prompt. 
1) when editing the prompt you will use the PS1 variable. PS1="change is to whatver you like" 

2) There are common special characters:

\d - the current date
\e - escape character
\h - the hostname
\n - a newline
\t - current time 24-hour HH:MM:SS
\T - 12-hour HH:MM:SS
\@ - 12-hour HH:MM am/pm
\u - username of current user
\w - path to current working directory

---

3) you can change the colour of your prompt

Black: \e[30m
Blue:  \e[34m
Cyan:  \e[36m
Green:  \e[32m
Magenta:  \e[35m
Red:  \e[31m
White:  \e[37m
Yellow:  \e[33m

\[ - start of non-printing sequence
\] - end of non-printing sequence

Example: PS1="\[\e[33m\]MAKE ME YELLOW"

---

### Making everything stick:

1) ls -a : this is to access your bash profile as it is hidden
2) open your profile - open .the name of your profile
3) this will open an editor and you write what you wnated to change, it will stick after that.

---

## Managing packages

* What are packages and package managers?

* npm (Node Package Manager) and nvm (Node Version Manager)

* Why do you need a package manager?

* Installing npm and downloading/installing packages
    * open your command line
    * type in: npm install <package>

---

## Further notes

### What is the command line?

The Command Line - is a text-based application for viewing, handling, and manipulating files on your computer. It's much like Windows Explorer or Finder on the Mac, but without the graphical interface. Other names for the command line are: cmd, CLI, prompt, console or terminal.

The user interface is navigated by typing commands at prompts(text or symbols), instead of using the mouse.

Unlike a GUI (graphical user interface) operating system, a command line only uses a keyboard to navigate by entering commands"Using a command line, you can perform almost all the same tasks that can be done with a GUI. However, many tasks can be performed quicker and can be much easier to automate and do remotely."

"For example, users who have Microsoft Windows may find a task such as renaming 100+ files in a folder, a very time intensive task. However, renaming 100+ files in a directory can be done in less than a minute with a single command in the command line.

"However, many software developers, system administrators and advanced users still rely heavily on command-line interfaces to perform tasks more efficiently, configure their machine, or access programs and program features that are not available through a graphical interface.

These are a few advantages to using the command line over a GUI:
* You can manage files faster and easier on your computer
* It's easier to work with computers remotely
* Manage files on a file server or web server (e.g., managing a web page)
* Need to automate commonly performed tasks
* If you forgot a command option, just run it with -h, —help, or man/info it
* I find man pages a lot easier to read, and more concise than, standard Help on PS GUI software
* Shell programming language. You can do a bunch of very interesting things using simple ops like |, &&, ||, and redirection
* Sitting in front of a black screen with scrolling text looks cool. Like a movie “hacker” (it is actually “cracker”)

### Package management

A package is a program that you can install locally onto your operating system.

A package manager helps to automate the installation/upgrading/configuring/removing of these packages from a global registry, so there's no need for manual install and updates.

You will have come across nvm, we should have all installed it as part of the course pre-requisites. nvm stands for Node Version Manager, this is different from npm (Node Package Manager). You need nvm to keep and use multiple versions of Node.js.

npm (Node Package Manager) is a package manager with the world's largest library of software, over 800,000 packages.

npm is a tool for installing JavaScript packages, and is automatically installed when you install Node.js.

[You can check if you have npm installed: open command line and type `npm version`]

Why do you need a package manager?
- for basic JS you just need a html file linked to a JavaScript file
- your code may rely on add-ons for additional features; this is called your project's dependencies
- when you install a package using a package manager, it helps you keep track of your project's dependencies in a file called package.json

To install npm:
- install node.js

To download/install packages:
- Open command line
- type in: npm install <package>
