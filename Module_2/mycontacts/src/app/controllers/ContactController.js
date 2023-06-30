const ContactsResitory = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactsResitory.findAll();

    response.json(contacts);
  }

  show() {
    // obter UM registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um programa
  }
}

module.exports = new ContactController();
