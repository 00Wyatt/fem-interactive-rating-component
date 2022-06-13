# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![The Interactive Rating Component](./images/screenshot-interactive-rating-component.png)

### Links

- Solution URL: [Interactive Rating Component using CSS-Grid](https://www.frontendmentor.io/solutions/interactive-rating-component-using-cssgrid-AWF1mkzz47)
- Live Site URL: [Frontend Mentor | Interactive rating component](https://00wyatt.github.io/fem-interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow

### What I learned

Using the Radial-Gradient was interesting because I haven't used it before. This took a bit of hunting around online to figure out how (I think) they are doing it in the design.

```css
.card {
  background: radial-gradient(circle at top, var(--dark-blue) 1%, var(--very-dark-blue) 140%);
}
```

The Javascript part of this challenge was a good test to see if I could remember what I'd learned from previous tutorials. I had to use Google a few times, but I made notes explaining what most of the JS I used is doing, for reference later, and anyone else interested can have a look.

I am happy with how the user isn't able to click on submit without first selecting a number rating.

```js
function onSubmit() {
    if (yourRating) {
        ratingState.classList.add('hide');
        score.textContent = yourRating;
        thankYouState.classList.remove('hide');
    };
};
```

One issue I did run into was centering the star and the numbers inside their divs. Even with using CSS grid, I couldn't seem to get them perfectly center, the numbers seemed to have some unknown space underneath. I ended up using padding to do it. But I want to know is there an easier way?

### Continued development

I want to keep working on my Javascript skills. I'll try some more challenges that require it, in the future, for further practice.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - So helpful, as I'm sure everyone knows, for reading up on and better understanding CSS properties. And pretty much anything else web developement related.

## Author

- Frontend Mentor - [@00Wyatt](https://www.frontendmentor.io/profile/00Wyatt)