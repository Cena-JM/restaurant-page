const locationsTab = (() => {
    // create elements
    const locations = document.createElement("div");
    const locationsHeading = document.createElement("h1");
    const locationsContent = document.createElement("div");

    locations.setAttribute("id", "locationsId");

    // assign classes elements
    locations.classList.add("locations");
    locationsHeading.classList.add("locationsHeading");
    locationsContent.classList.add("locationsContent");

    // organise and content to elements// locations
    locationsHeading.innerHTML = "LOCATIONS";

    locations.appendChild(locationsHeading);

    return locations;
});

export { locationsTab }