# 20-days_-javascript_20_project_challenge
Day-01
# Drum Kit Web App Documentation

This documentation provides an overview and explanation of the Drum Kit web app, along with the HTML, CSS, and JavaScript code used to create it. The Drum Kit is a simple web application that allows users to play drum sounds by clicking on different buttons.

## Table of Contents

1. [Introduction](#introduction)
2. [HTML Structure](#html-structure)
3. [CSS Styling](#css-styling)
4. [JavaScript Functionality](#javascript-functionality)
5. [Conclusion](#conclusion)

## 1. Introduction

The Drum Kit web app is designed to create a fun and interactive experience for users who want to play drum sounds using their mouse or touch input. The app consists of five buttons, each associated with a different drum sound. When the user clicks on a button, the corresponding drum sound is played.

## 2. HTML Structure

The HTML structure of the Drum Kit web app is quite simple. It consists of a single HTML file with the following elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drum Kit</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <button class="btn-1" id="btn">Button 1</button>
        <button class="btn-2" id="btn">Button 2</button>
        <button class="btn-3" id="btn">Button 3</button>
        <button class="btn-4" id="btn">Button 4</button>
        <button class="btn-5" id="btn">Button 5</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

Explanation:

- The `<!DOCTYPE html>` declaration specifies the document type and version (HTML5).
- The `<html>` tag wraps the entire HTML content, and `lang="en"` attribute defines the language as English.
- The `<head>` section contains meta information, including character encoding and viewport settings.
- The `<title>` tag sets the title of the web page displayed in the browser tab.
- The `<link>` tag links the external CSS file, `style.css`, to the HTML document.
- The `<body>` tag contains the visible content of the web page.
- The `<div class="container">` creates a container to group the drum buttons together.
- Each `<button>` tag represents a drum button with a unique class (`btn-1`, `btn-2`, etc.) and a shared ID (`btn`).

## 3. CSS Styling

The CSS file `style.css` contains styles for the Drum Kit web app, making it visually appealing and responsive. Here is the CSS code:

```css
*{
    margin: 0;
    padding: 0;
}
.container{
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
#btn{
    border: 4px solid rgb(228, 240, 92);
    box-shadow: 2px 2px 10px rgb(234, 246, 99);
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgb(0, 0, 0);
    color: white;
    cursor: pointer;
    transition: 0.5s;
}
#btn:active{
    background-color: white;
    color: black;
    border: 4px solid rgb(166, 181, 0);
    scale: 1.1;
    font-size: 40px;
}
```

Explanation:

- `*` is a wildcard selector that resets all margin and padding to zero, ensuring a consistent layout.
- `.container` styles the drum buttons container, setting its background color, layout, and spacing.
- `#btn` styles the drum buttons with a border, box-shadow, padding, and background color.
- `#btn:active` styles the drum buttons when they are clicked (active state), changing the background color, text color, border, and scaling the size.

## 4. JavaScript Functionality

The functionality of the Drum Kit web app is implemented using JavaScript. The `script.js` file contains the JavaScript code responsible for playing the drum sounds when the buttons are clicked:

```js
document.querySelector('.btn-1').addEventListener("click",function(){
    var audio = new Audio("song/bit1.mp3");
    audio.play();
})

document.querySelector('.btn-2').addEventListener("click",function(){
    var audio = new Audio("song/bit2.wav");
    audio.play();
})

document.querySelector('.btn-3').addEventListener("click",function(){
    var audio = new Audio("song/bit3.mp3");
    audio.play();
})

document.querySelector('.btn-4').addEventListener("click",function(){
    var audio = new Audio("song/bit4.wav");
    audio.play();
})

document.querySelector('.btn-5').addEventListener("click",function(){
    var audio = new Audio("song/bit5.mp3");
    audio.play();
})
```

Explanation:

- `document.querySelector('.btn-1')` selects the button with the class `.btn-1`.
- The `addEventListener` method is used to attach a click event listener to the selected button.
- When the button is clicked, an audio element is created with the corresponding sound file (e.g., `"song/bit1.mp3"`).
- The `play` method is called on the audio element, which plays the associated drum sound.

## 5. Conclusion

The Drum Kit web app is a fun and interactive application that allows users to play different drum sounds by clicking on buttons. The app is built using HTML, CSS, and JavaScript, with each drum button associated with a unique sound file. When a button is clicked, the corresponding drum sound is played, creating a virtual drumming experience.

Please note that the code provided is a basic example and can be extended or customized further to add more features and improve the user experience. Additionally, ensure that you have the drum sound files (e.g., `bit1.mp3`, `bit2.wav`, etc.) and the correct file paths set in the JavaScript code.

Feel free to modify, enhance, and have fun with the Drum Kit web app!
