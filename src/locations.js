const locationsTab = (() => {
    // create elements
    const locations = document.createElement("div");
    const locationsHeading = document.createElement("h1");
    const locationsContent = document.createElement("div");

    locations.setAttribute("id", "locationsId");

    // assign classes elements
    locations.classList.add("locations");
    locationsHeading.classList.add("locationsHeading");
    locationsContent.classList.add("locationsContent", "content");

    // organise and content to elements// locations
    locationsHeading.innerHTML = "LOCATIONS";
    locationsContent.innerHTML = `Address<br>
                                  3005 South Lamar Blvd. D-114B<br><br>
                                  Austin, TX 78704<br>
                                  Corners Shopping Center<br>`;

    locations.appendChild(locationsHeading);
    locations.appendChild(locationsContent);

    return locations;
});

export { locationsTab }