import { Link } from "react-router-dom";

import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from "./styles";

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Search by name..." />
      </InputSearchContainer>
      <Header>
        <strong>3 Contacts</strong>
        <Link to="/new">New contact</Link>
      </Header>
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
          <Link to="/edit/123">
            <img src={edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
