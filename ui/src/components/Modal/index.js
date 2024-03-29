import { Container, Overlay, Footer } from "./styles";

import Button from "../Button";

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Modal title</h1>
        <p>Modal body</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancel
          </button>

          <Button>Delete</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
