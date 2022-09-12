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

| ***Basic binary***   | ***Advanced unary***               | ***For inputting values***            |
| -------------------- | ---------------------------------- | ------------------------------------- |
| `+` - addition       | `!` - factorial                    | `C` - clear                           |
| `-` - subtraction    | `%` - calculating 1% of the number | `←` - backspace                       |
| `*` - multiplication | `x²` - the square                  | `+/-` - changing the sign             |
| `/` - division       | `√` - the square root              | `=` - output of the result (equal)    |
|                      |                                    | `.` - input decimal separator (point) |

The user can enter numbers sequentially - after each operation it is not required to press `=`

The application takes into account the **sequence** of operations.  
This means that sequential input `2` `+` `2` `*` `2` will return the result `8` and not `6` - operation `*` will be applied to the sum of `2 + 2`

<div align="center">
  <img src="https://user-images.githubusercontent.com/67374276/189635149-6514df33-2b11-4b6c-8f0f-232a5f949ddf.png" alt="WebCalc (sequence of operations)">
</div>

## Realizing

***My main goal*** is to try to create a full-fledged application without using frameworks.  
Also I wanted to realize modern design - here I decided to use neomorphism and smooth shadows.

During the creation of this application, ***I mastered***:
- [event bubbling and capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)
- [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Difficulties

### **Known bugs**:
- [ ] incorrect display of `%` `√` and `+/-` operation;
- [ ] incorrect display of overflowing *result string* and *expression string*;
- [ ] incorrect display of floating numbers with zero in the integer part;
- [ ] no rounding of floating number (JavaScript specifics);
