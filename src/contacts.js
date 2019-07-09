const contactsTab = (() => {
    // create elements
    const contacts = document.createElement("div");
    const contactsHeading = document.createElement("h1");
    const contactsContent = document.createElement("div");

    contacts.setAttribute("id", "contactsId");

    // assign classes elements
    contacts.classList.add("contacts");
    contactsHeading.classList.add("contactsHeading");
    contactsContent.classList.add("contactsContent", "content");

    // organise and content to elements// contacts
    contactsHeading.innerHTML = "Contacts";
    contactsContent.innerHTML = `Phone Number<br>
                                (512) 386-1908<br><br>
                                Mobile Number<br>
                                (728) 873-8430<br><br>
                                Email<br>
                                michiramen@gmail.com<br>`

    contacts.appendChild(contactsHeading);
    contacts.appendChild(contactsContent);

    return contacts;
});

export { contactsTab }