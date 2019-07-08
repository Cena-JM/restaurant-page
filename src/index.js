import _ from 'lodash';
import './reset.css'
import './style.css';
// import { component } from "./initial"
// import Main from './main.jpg';

const render = (() => {
    // select element
    const mainElement = document.querySelector("#content");
    // create elements
    const topElement = document.createElement("div");
    const headElement = document.createElement("header");
    const nav = document.createElement("nav");
    const navbar = document.createElement('ul');
    const welcome = document.createElement("section");
    const titleName = document.createElement("h2");
    const description = document.createElement("p");
    const instructions = document.createElement("div");
    const insHeading = document.createElement("h1");
    const insBody = document.createElement("div");
    const menu = document.createElement("div");
    const menuHeading = document.createElement("h1");
    const menuContent = document.createElement("div");
    const bottomElement = document.createElement("footer");
    const footerHeading = document.createElement("h1");

    // assign classes elements
    topElement.classList.add("top-section");
    headElement.classList.add("banner");
    nav.classList.add("nav");
    navbar.classList.add("navbar");
    welcome.classList.add("welcome");
    titleName.classList.add("titleName");
    description.classList.add("description");
    instructions.classList.add("instructions");
    insHeading.classList.add("insHeading");
    insBody.classList.add("insBody");
    menu.classList.add("menu");
    menuHeading.classList.add("menuHeading");
    menuContent.classList.add("menuContent");
    bottomElement.classList.add("footer");
    footerHeading.classList.add("footerHeading");

    // organise and content to elements

    // topElement
    headElement.appendChild(nav);

    topElement.appendChild(headElement);
    topElement.appendChild(welcome)

    mainElement.appendChild(topElement);
    mainElement.appendChild(instructions);
    mainElement.appendChild(menu);
    mainElement.appendChild(bottomElement);

    navbar.innerHTML =` 
                <li>Menu</li>
                <li>Locations</li>
                <li>About</li>
                <li>Contacts</li>
                <li class="order">Order online</li>`;
    nav.appendChild(navbar);

    titleName.innerHTML =  "MICHI RAMEN";
    description.innerHTML = "ANDERSON MILL / TUES & WED 5 PM - 10 PM / THURS - SUN 11 AM - 10 PM";

    welcome.appendChild(titleName);
    welcome.appendChild(description);

    // instructions
    insHeading.innerHTML = "HOW TO ORDER AT MICHI";

    instructions.appendChild(insHeading);

    // menu
    menuHeading.innerHTML = "RAMEN MENU";

    menu.appendChild(menuHeading);

    // bottomElement
    footerHeading.innerHTML = "FOOTER";
    
    bottomElement.appendChild(footerHeading);

    return mainElement();
});

render();