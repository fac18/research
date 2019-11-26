# Node Shell project

### What is a shell? 
Shell is a program which interprets user commands through CLI like Terminal. It is named a shell because it is the outermost layer around the operating system kernel.

![](https://i.imgur.com/0KwBqPG.png)
A kernel connects the application software to the hardware of a computer.

### What is shell scripting?

Shell scripting is writing a series of command for the shell to execute. It can combine lengthy and repetitive sequences of commands into a single and simple script, which can be stored and executed anytime. This reduces the effort required by the end user.
It can help you create complex programs containing conditional statements, loops, and functions.

CLI shells require the user to be familiar with commands and their calling syntax, and to understand concepts about the shell-specific scripting language (for example bash).

- mkdir 
- ls 
- cd 
- pwd
- touch filename
- grep
- cat
More commands [here ](https://www.geeksforgeeks.org/basic-shell-commands-in-linux/)

### PROJECT: create your own test output formatter (a test output formatter is a program that when you pipe the results of your tests into, will read the results of those tests and provide you with useful information about them e.g. tap-spec, tap-nyan)
### Example project
![](https://i.imgur.com/e7SDtVj.png)

### Code along: 

![](https://media.giphy.com/media/ukMiDlCmdv2og/giphy.gif)

1. Create a variable that includes ```process.openStdin();``` so you can open up and read the tests output
2. Create an empty variable that holds an empty str
3. Access the data in the variable (step 2) in chunks and append it to it.
4. Get the last element of the data array after splitting the string.
5. Have fun with ASCII ヽ(•‿•)ノ
6. Have fun adding colors with chalk by doing: 
    ```const chalk = require('chalk');```
   e.g.: chalk.green('CONGRATS, YOU PASS!!! ヽ(•‿•)ノ'));
