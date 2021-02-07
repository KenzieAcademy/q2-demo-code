# Asynchronous JavaScript

## Outline

1. Synchronous Code (Blocking)
1. Asynchronous Code (Non-Blocking)
1. Promises
1. Async-Await

## Instructions

Copy the code snippits from the JavaScript files and try running them in an online editor like [jsfiddle](https://jsfiddle.net/) or [codepen](https://codepen.io/).

## Synchronous Code

The code is executed in order from top to bottom; line one, then line two, then line three, and so on. This is called **blocking** code because the following line cannot begin to execute until the previous line is finished.

See [synchronous.js](synchronous.js) for an example.

## Asynchronous Code

Asynchronous code takes a variable amount of time to execute, so it doesn't stop the rest of your code from continueing to execute as normal; this is called **non-blocking**. This is particulary import in the browser. If we could only write synchronous code, some events could take several seconds or longer to run and make the user interface completely freeze while it's waiting for JavaScript to finish executing. With asynchronous code, users can perform many actions like clicking on multiple different buttons, and navigate around the website or application while having a smooth experience.

What happens when asynchronous code is done executing? Well, there are special ways to handle this. In some cases, you can tell your asynchronous code to call a specific function when it stops executing, which is called a **callback** function.

See [asynchronous.js](asynchronous.js) for an example.

## Promises

Promises are a way to handle asynchronous code that was introduced into JavaScript officially in ES2015 (formerly called ES6). This has replaced the use of callbacks to handle asynchronous code in most use cases.

A promise is a statement saying something will happen in the future. There are two outcomes: either the promise is fullfilled, `resolved`, or unfulfilled, `rejected`.

See [promises.js](promises.js) for an example.

## Async-Await

This is a new-ish syntax introduced into the JavaScript ecosystem, after Promises, that allows you to write asynchronous code inline, very much like you would write synchronous code. This makes it much easier to do things like store data from a network request in a variable and use it elsewhere in your program.

*While you can use the standard promises syntax, the industry standard has shifted to preferring async-await so we recommend you learn and practice this style as well.*

See [async-await.js](async-await.js) for an example.
