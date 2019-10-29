# Command line workshop

This workshop is geared towards Mac and Linux terminal users, but will include a short introduction to the Windows command line as well.

## Linux / Mac

### Getting started

Good news! Your operating system has a command line interface (**CLI**) built in :)

To raise the terminal, press the following keys in concert:

> CTRL + ALT + T

You should now be looking at something that looks a bit like this:

![](https://i.imgur.com/Fkx2dkz.png)

The prompt above displays as `dan@zenith` because my name is Dan, my computer is called 'zenith', and I am sitting in my home directory, represented by the ``~``.

### Basic commands

Once you're in the terminal, the first trick is navigating your file system with ease!

#### Show the present working directory: pwd

To display the directory you're currently sitting in, write

`pwd`

and press Enter.

The next line that appears is your present working directory! For me, what appears is:

```bash
dan@zenith:~$ pwd
/home/dan
```

#### List contents of directory: ls

To see what files and directories (that is, folders) we have, use `ls`

(I'm going to stop telling you to press Enter after entering commands now...)

#### Choose a directory: cd

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
