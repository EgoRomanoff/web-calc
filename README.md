<h1 align="center">
  <a href="https://egoromanoff.github.io/web-calc/" target="_blank" title="'WebCalc' Demo Link">
    WebCalc
  </a>
</h1>
<br>
<div align="center">

  ![html](https://user-images.githubusercontent.com/67374276/189624538-7f47e804-3498-4d1c-9cf2-b1ba9b778eaf.svg)
  ![javascript](https://user-images.githubusercontent.com/67374276/189316388-4182d570-0a10-4dcf-9568-d13e7c6b5c56.svg)&nbsp;
  ![sass-scss](https://user-images.githubusercontent.com/67374276/189319440-79881be3-d7db-4506-87b8-57044a88b167.svg)

</div>

## Content
1. [Demo](#demo)
2. [Features](#features)
3. [Realizing](#realizing)
4. [Difficulties](#difficulties)

## Demo
![WebCalc](https://user-images.githubusercontent.com/67374276/189625375-c7953947-787a-4109-8192-1da5ec27bb75.png)

[**WebCalc**](https://egoromanoff.github.io/web-calc/) - styled WEB digit calculator.

## Features

This web application has the basic functionality of a standard calculator:
- ***basic binary*** arithmetic operations:
  - *addition* - `+`
  - *subtraction* - `-`
  - *multiplication* - `*`
  - *division* - `/`
- ***advanced unary*** operations:
  - *factorial* - `!`
  - *calculating 1% of the number* - `%`
  - *the square* - `x²`
  - *the square root* - `√`
- and functions ***for inputting values***:
  - *clear* - `C`
  - *backspace* - `←`
  - *changing the sign* - `+/-`
  - *output of the result* (equal) - `=`
  - *input decimal separator* (point) - `.`

## Realizing

In the process of creating this application, I have learned the base of [React.js](https://reactjs.org/) in practice :
* [functional components](https://reactjs.org/docs/components-and-props.html#function-and-class-components);
* [react-hooks (*useState, useEffect, useRef*)](https://reactjs.org/docs/hooks-faq.html#gatsby-focus-wrapper);
* [Context API](https://reactjs.org/docs/context.html#gatsby-focus-wrapper);
* [JSX](https://reactjs.org/docs/introducing-jsx.html);
* [css-modules](https://habr.com/ru/post/335244/).

I also used the [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get tasks data from a [fake json server](https://jsonbin.io) when the application is starting.  
I used [SASS (SCSS)](https://sass-lang.com/) for creating the styles of react-components as a scss-modules.

## Difficulties


