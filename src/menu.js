const menuTab = (() => {
    // create elements
    const menu = document.createElement("div");
    const menuHeading = document.createElement("h1");
    const menuContent = document.createElement("div");

    menu.setAttribute("id", "menuId")

    // assign classes elements
    menu.classList.add("menu");
    menuHeading.classList.add("menuHeading");
    menuContent.classList.add("menuContent", "content");

    // organise and content to elements// menu
    menuHeading.innerHTML = "RAMEN MENU";
    menuContent.innerHTML = `<div id="1" class="cell"><h3>MICHI</h3>
                                                      <p class="price">9.95</p>
                                                      CHOICE OF CHASHU:<br>
                                                      lean pork<br>
                                                      pork belly</div>

                             <div id="2" class="cell"><h3>DIPPING</h3>
                                                      <p class="price">9.95</p>
                                                      CHOICE OF CHASHU:<br>
                                                      lean pork<br>
                                                      pork belly</div>

                             <div id="3" class="cell"><h3>MEAT LOVER'S</h3>
                                                      <p class="price">9.95</p>
                                                      CHOICE OF CHASHU:<br>
                                                      lean pork<br>
                                                      pork belly</div>

                             <div id="4" class="cell"><h3>VEGGIE</h3>
                                                      <p class="price">9.95</p>
                                                      CHOICE OF CHASHU:<br>
                                                      lean pork<br>
                                                      pork belly</div>

                             <div id="5" class="cell"><h3>JUNGLE</h3>
                                                      <p class="price">9.95</p>
                                                      CHOICE OF CHASHU:<br>
                                                      lean pork<br>
                                                      pork belly</div>
                             <div id="6" class="cell"><h3>TORI</h3>
                                                      <p class="price">9.95</p>
                                                      CHOICE OF CHASHU:<br>
                                                      lean pork<br>
                                                      pork belly</div>`;

    menu.appendChild(menuHeading);
    menu.appendChild(menuContent);

    return menu;
});

export { menuTab }