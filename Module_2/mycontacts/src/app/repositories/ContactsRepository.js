const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Matheus',
    email: 'matheus@mail.com',
    phone: '1212121231',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Juca',
    email: 'juca@mail.com',
    phone: '121212312121231',
    category_id: v4(),
  },
];

class ContactsResitory {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsResitory();
