import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container } from "./styles";

import arrow from "../../assets/images/icons/arrow.svg";

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Back</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.PropTypes = {
  title: PropTypes.string.isRequired,
};