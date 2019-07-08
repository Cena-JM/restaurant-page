const aboutTab = (() => {
    // create elements
    const about = document.createElement("div");
    const aboutHeading = document.createElement("h1");
    const aboutContent = document.createElement("div");

    // assign classes elements
    about.classList.add("about");
    aboutHeading.classList.add("aboutHeading");
    aboutContent.classList.add("aboutContent");

    // organise and content to elements// about
    aboutHeading.innerHTML = "ABOUT";

    about.appendChild(aboutHeading);

    return about;
});

export { aboutTab }