const aboutTab = (() => {
    // create elements
    const about = document.createElement("div");
    const aboutHeading = document.createElement("h1");
    const aboutContent = document.createElement("div");

    about.setAttribute("id", "aboutId");

    // assign classes elements
    about.classList.add("about");
    aboutHeading.classList.add("aboutHeading");
    aboutContent.classList.add("aboutContent", "content");

    // organise and content to elements// about
    aboutHeading.innerHTML = "ABOUT";
    aboutContent.innerHTML = `The Michi story is a wild ride to say the least. 
                              When we started in 2012 with a food truck, we couldn't 
                              have imagined being named the best Ramen in Austin by our 
                              fans two short years later. In a town long dominated by 
                              enchiladas and burgers, we've loved introducing Austinites 
                              and Texans to our favorite food. `

    about.appendChild(aboutHeading);
    about.appendChild(aboutContent);

    return about;
});

export { aboutTab }