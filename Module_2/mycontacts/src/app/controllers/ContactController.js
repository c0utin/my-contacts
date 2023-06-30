const ContactsResitory = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactsResitory.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsResitory.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(contact);
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um programa
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsResitory.findById(id);

    if (!contact) {
      // 404: not found
      return response.status(404).json({ error: 'User not found' });
    }
    await ContactsResitory.delete(id);
    // 204: no content
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
