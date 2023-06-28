class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Send from ContactController');
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
