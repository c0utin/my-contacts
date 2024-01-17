<<<<<<< HEAD
import { Container, Header, ListContainer, Card } from "./styles";

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
=======
import { Container, Header } from "./styles";
>>>>>>> 6849c52 (feat: header contacts list)

export default function ContatcsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contacts</strong>
        <a href="/">New contact</a>
      </Header>
<<<<<<< HEAD
      <ListContainer>
        <header>
          <button type="button">
            <span>Name</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Rafael Montenegro</strong>
            <small>instagram</small>
          </div>
          <span>rafael@dev.com</span>
          <span>(99) 999999-999999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
=======
>>>>>>> 6849c52 (feat: header contacts list)
    </Container>
  );
}
