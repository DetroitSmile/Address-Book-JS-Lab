//class for contact establishing the constructor variables
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

//class for the address book which assigns actions to the contact variables
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1)
    }
    print() {
        for (let i=0; i < this.contacts.length; i++) {
            console.log(this.contacts[i])
        }
    }
}

// adds addresses to the original document and calls implementation of new addresses
const book = new AddressBook();
book.add(new Contact("Tyler Harrigan", "TylerHarrigan@icloud.com", "248-915-0139", "self"));
book.add(new Contact("Alex Enache", "Alex@gmail", "555-345-8468", "Coding buddy"));
book.add(new Contact("Matthew Mroue", "Matt@icloud.com", "248-234-0849", "High school pal"));

// while loops which runs the prompts for user input
while (true) {
    const choice = prompt("Would you like to Add, Print, Delete, or Quit");
    if (choice === "add") {
        const name = prompt ("Enter name: ");
        const email = prompt ("Enter email: ");
        const phone = prompt ("Enter phone: ");
        const relation = prompt ("Enter relation: ");
        book.add(new Contact(name,email,phone,relation));
    }else if (choice === "print") {
        book.print();
    }else if (choice === "delete") {
        const del = prompt ("which index?");
        book.deleteAt(del)
    }else if (choice === "quit") {
        console.log("Later, hater!");
        break;
    }
}