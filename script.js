/* This file is where all your work should go for Assignment 2.  Please remove this comment. */


function cleanUpIndex() {
    const clean = document.querySelectorAll()
    clean.remove()
}

function createSingleIndex(contact) {
    const contactList = [ {
        name: contact.name,
        phone: contact.phone,
        address: contact.address,
        email: contact.email
    } ]
    return contactList
}