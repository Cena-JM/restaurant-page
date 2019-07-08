const menuTab = (() => {
    // create elements
    const menu = document.createElement("div");
    const menuHeading = document.createElement("h1");
    const menuContent = document.createElement("div");

    menu.setAttribute("id", "menuId")

    // assign classes elements
    menu.classList.add("menu");
    menuHeading.classList.add("menuHeading");
    menuContent.classList.add("menuContent");

    // organise and content to elements// menu
    menuHeading.innerHTML = "RAMEN MENU";

    menu.appendChild(menuHeading);

    return menu;
});

export { menuTab }