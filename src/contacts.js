const contactsTab = (() => {
    // create elements
    const contacts = document.createElement("div");
    const contactsHeading = document.createElement("h1");
    const contactsContent = document.createElement("div");

    // assign classes elements
    contacts.classList.add("contacts");
    contactsHeading.classList.add("contactsHeading");
    contactsContent.classList.add("contactsContent");

    // organise and content to elements// contacts
    contactsHeading.innerHTML = "Contacts";

    contacts.appendChild(contactsHeading);

    return contacts;
});

export { contactsTab }