/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

const contactList = [  
    { 
        name: "Oliver Queen", 
        phone: "778-555-1234", 
        address: "101 Main St, Star City, USA",    
        email: "greenarrow@watchtower.com",  
    },   
    {    
        name: "Jessica Cruz",    
        phone: "123-555-5555",    
        address: "Portland Oregon",    
        email: "greenlantern@watchtower.com",  
    }
]


function cleanUpIndex() {
    const main = document.querySelector('.main')
    main.remove()
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend', '<div class="main"></div>')
}

function cleanUpCreate() {
    const main = document.querySelector('.main')
    main.remove()
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend', '<div class="main"></div>')
}

function cleanUpView() {
    const main = document.querySelector('.main')
    main.remove()
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend', '<div class="main"></div>')
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

function renderIndex(contact_array) {
    let contact = document.querySelector('.main')
    let html = '';
    for(let i = 0; i < contact_array.length; i++ ) {
        html += ('beforeend', `<a href="page3.html"><div class="contact"><p>${contact_array[i].name}</p></div></a>`);
    }
    contact.insertAdjacentHTML('beforeend', html)
}





/*function renderIndex(contact_array) {
    for (i = 0; i++; i < length(contact_array) ) {
        let contactcard = document.createElement("div")
        contactcard.classList.add('contactinfo')
        let contactname = contactcard.createElement("div")
        let contactemail = contactcard.createElement("div")
        let contactphone = contactcard.createElement("div")
        let contactname = contactcard.createElement("div")
        contactname.classList.add("contactname")
        contactname.appendChild(contact_array[i].name)
        contactemail.classList.add("contactemail")
        contactname.appendChild(contact_array[i].email)
        contactphone.classList.add("contactphone")
        contactname.appendChild(contact_array[i].phone)
        contactaddress.classList.add("contactaddress")
        contactname.appendChild(contact_array[i].address)
    }
}*/