const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Matheus',
    email: 'matheus@mail.com',
    phone: '1212121231',
    category_id: uuid(),
  },
];

class ContactsResitory {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsResitory();
