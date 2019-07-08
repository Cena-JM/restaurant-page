import _ from 'lodash';
import './reset.css';
import './style.css';
import { myFunction } from "./sticky_nav";
import { aboutTab } from "./about";
import { contactsTab } from "./contacts";
import { locationsTab } from "./locations";
import { menuTab } from "./menu";
const tab = (e) => document.getElementById(`${e}`);
const elementId = (e) => document.getElementById(`${e}Id`);
let appendedElement = 0;

const render = (() => {
//     // select element
    const mainElement = document.querySelector("#content");
//     // create elements
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

    navbar.setAttribute("id", "navbar");

//     // assign classes elements
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

//     // organise and content to elements

    mainElement.appendChild(topElement);
    mainElement.appendChild(instructions);
    mainElement.appendChild(bottomElement);

//     // topElement
    headElement.appendChild(nav);

    topElement.appendChild(headElement);
    topElement.appendChild(welcome);

    navbar.innerHTML =` 
                <li><a href="#menuId" id="menu">Menu</a></li>
                <li><a href="#locationsId" id="locations">Locations</a></li>
                <li><a href="#aboutId" id="about">About</a></li>
                <li><a href="#contactsId" id="contacts">Contacts</a></li>
                <li class="order">Order online</li>`;
    nav.appendChild(navbar);

    titleName.innerHTML =  "MICHI RAMEN";
    description.innerHTML = "ANDERSON MILL / TUES & WED 5 PM - 10 PM / THURS - SUN 11 AM - 10 PM";

    welcome.appendChild(titleName);
    welcome.appendChild(description);

    // instructions
    insHeading.innerHTML = "HOW TO ORDER AT MICHI";

    instructions.appendChild(insHeading);

    // bottomElement
    footerHeading.innerHTML = "FOOTER";
    
    bottomElement.appendChild(footerHeading);

    // add events
        // menu
    tab("menu").addEventListener("click", () => {
        if (appendedElement !== elementId("menu")) {
            if (appendedElement !== 0){
                mainElement.removeChild(appendedElement);
            }
            mainElement.insertBefore(menuTab(), bottomElement);
        }
        appendedElement = elementId("menu")
    });

        // contacts
    tab("contacts").addEventListener("click", () => {
        if (appendedElement !== elementId("contacts")) {
            if (appendedElement !== 0){
                mainElement.removeChild(appendedElement);
            }
            mainElement.insertBefore(contactsTab(), bottomElement);
        }
        appendedElement = elementId("contacts");
    });
    
        // about
    tab("about").addEventListener("click", () => {
        if (appendedElement !== elementId("about")) {
            if (appendedElement !== 0){
                mainElement.removeChild(appendedElement);
            }
            mainElement.insertBefore(aboutTab(), bottomElement);
        }
        appendedElement = elementId("about");
    });

    // locations
    tab("locations").addEventListener("click", () => {
        if (appendedElement !== elementId("locations")) {
            if (appendedElement !== 0){
                mainElement.removeChild(appendedElement);
            }
            mainElement.insertBefore(locationsTab(), bottomElement);
        }
        appendedElement = elementId("locations");
    });



    // let navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    let sticky = navbar.offsetTop;
    window.onscroll = function() {myFunction(sticky)};

    return mainElement;
});


render();
