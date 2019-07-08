import _ from 'lodash';
import './reset.css'
import './style.css';
import { aboutTab } from "./about"
import { contactsTab } from "./contacts"
import { locationsTab } from "./locations"
import { menuTab } from "./menu"
const menuT = () => document.getElementById("menu");
const elementId = (e) => document.getElementById(`${e}Id`);
let appendElement = true;

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
    bottomElement.classList.add("footer");
    footerHeading.classList.add("footerHeading");

    // organise and content to elements

    mainElement.appendChild(topElement);
    mainElement.appendChild(instructions);
    mainElement.appendChild(bottomElement);

    // topElement
    headElement.appendChild(nav);

    topElement.appendChild(headElement);
    topElement.appendChild(welcome)

    navbar.innerHTML =` 
                <li><a id="menu">Menu</a></li>
                <li><a href="#" id="locationso>Locations</a></li>
                <li><a href="#" id=">About</a></li>
                <li><a href="#" id=">Contacts</a></li>
                <li class="order">Order online</li>`;
    nav.appendChild(navbar);

    titleName.innerHTML =  "MICHI RAMEN";
    description.innerHTML = "ANDERSON MILL / TUES & WED 5 PM - 10 PM / THURS - SUN 11 AM - 10 PM";

    welcome.appendChild(titleName);
    welcome.appendChild(description);

    // bottomElement
    footerHeading.innerHTML = "FOOTER";
    
    bottomElement.appendChild(footerHeading);

    // add events
        // menu
    menuT().addEventListener("click", () => {
        if (appendElement === true) {
            mainElement.insertBefore(menuTab(), bottomElement);
            scrollToDiv();
        }
        appendElement = false
    });

        // contacts
    menuT().addEventListener("click", () => {
        if (appendElement === true) {
            mainElement.insertBefore(menuTab(), bottomElement);
            scrollToDiv();
        }
        appendElement = false
    });

    console.log(appendElement);
    
    return mainElement();
});

const scrollToDiv = (() => {
    window.scrollTo(0, elementId("menu").offsetTop);
})
render();
