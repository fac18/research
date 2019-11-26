Here is our presentation and our code demonstration!

To run the code files, run 

`node streamFile.js bigtextfile.txt`

in the command line

Changing the `highWaterMark` value in streamFile.js changes how large the streamed 'chunk' is (it is in bytes, we used 34 for the bigtextfile.txt and 59 for picture.txt so that one whole line came up at a time (the number is the number of characters per line + a new line since each character is 1 byte)


The briefing was:

Streams and Buffers
Research what streams and buffers are in Node. Why are they needed, when do we use them, and how are they used in conjunction with eachother?
Create a file streamFile.js, so that when a user runs the command node streamFile.js bigtextfile.txt, it streams the contents of the file to the users terminal.
Need a big file? How about a book.
To start with, you could hardcode the file path bigtextfile.txt into the js file instead of passing it as a command-line argument.
(Bonus) Allow an additional argument to be provided in the command to specify a time interval of how often a chunk of text from the file is streamed to the terminal. E.G node streamFile.js bigtextfile.txt 1s
