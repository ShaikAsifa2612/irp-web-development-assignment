# Responsive Web Design and JavaScript Foundations

Technical practical assignment with two parts:

- **Part A:** a responsive IRP LMS Home Page built with HTML5 and CSS3.
- **Part B:** a JavaScript Bank Account Simulator that fixes types, coercion, scope and hoisting problems.

## Project Structure

```
irp-web-development-assignment/
  part-a-responsive-ui/
    index.html
    style.css
  part-b-javascript/
    bank.js
  README.md
```

## Part A: Responsive IRP LMS Home Page

### What it includes
- A navigation bar fixed to the top using `position: sticky; top: 0; z-index: 100;`
- A hero banner with a two-column layout (text on the left, illustration on the right)
- A Learning Journey section with five step cards
- Colors stored as CSS custom properties in `:root`
- Layout built with Flexbox, CSS Grid and media queries

### Responsive behavior

| Screen | Navbar | Hero | Step cards |
| --- | --- | --- | --- |
| Desktop (above 1024px) | Logo, links, Sign In | 2 columns | 5 columns |
| Tablet (768px to 1024px) | Logo, links, Sign In | 2 columns | 3 columns |
| Mobile (768px and below) | Logo and Sign In only | Stacked | 1 column |

### Setup and testing steps
1. Open `part-a-responsive-ui/index.html` in Google Chrome (or use the Live Server extension in VS Code).
2. Scroll the page and check that the navbar stays at the top.
3. Press F12 and turn on the Device Toolbar.
4. At 1200px width or more, check that the step cards sit in 5 columns.
5. At 375px or 390px width, check that the nav links are hidden, the cards stack in 1 column, and there is no horizontal scrolling.

## Part B: JavaScript Bank Account Simulator

### What it covers
- **Part 1, Types and Coercion:** `parseAmount(input)` checks a user's input and returns a valid number or throws a clear error. It handles `null`, `undefined`, wrong types, extra spaces, empty strings, `NaN` and zero or negative amounts.
- **Part 2, Scoping and Hoisting:**
  - `const` and `let` declarations
  - Hoisting demo for `var`, `let` (Temporal Dead Zone), function declarations and function expressions
  - The `var` versus `let` loop bug with `setTimeout`

The code uses `"use strict";` and only strict equality (`===` and `!==`).

### Execution instructions
Make sure Node.js is installed, then run this from the project root:

```
node part-b-javascript/bank.js
```

All test cases run one after another and print to the console without crashing.

## Author

Asifa
