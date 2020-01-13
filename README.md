# Algos
Solutions to famous algorithmic problems

Install Jest to test: (sudo) npm install -g jest ?
Run jest ??

DEBUGGER steps: 
To run in Debugger mode

1. Add a 'debugger' statement in your function:

 function reverse(str) {
   debugger;
   return blabla;
  }
  
 2. Call the function manually (after the function and before the module.export of course)
  
  reverse('asdf');
  
 3. At the terminal, run 'node inspect index.js':
  (first go to the relevant folder of course)
> cd reversestring
> node inspect index.js

4. To continue execution of the file, press 'c' then enter:
it will say: debug listening blabla 
then:
> c  (this is short for continue)

5. To launch a 'repl' session, type 'repl' then 'enter'

> repl 

it will show our str

6. 
copy paste your code in the function after return
> your code

it will show the result

7. To exit the 'repl', press 'Control' + c:
you will turn back to debug

8. To exit the debug, type 'exit' then 'enter'
