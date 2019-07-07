import _ from 'lodash';
import './style.css';
import Main from './main.jpg';

const component = (() => {
    const element = document.querySelector("#content");
    
    const myImage = new Image();
    myImage.src = Main;
    element.appendChild(myImage);
    
    return element;
})

component()

console.log("Hello webpack")