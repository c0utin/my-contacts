import styled from "styled-components";

export default styled.button`
  width: 100%;
  height: 52px;
  border: none;
  background: ${(props) => props.theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgbs(0, 0, 0, 0.04);
  font-weigth: bold;
  color: #fff;
  border-radius: 4px;
  trasition: background 0.2 ease-in;

  &:hover {
    background: ${(props) => props.theme.colors.primary.light};
  }

  &:active {
    background: ${(props) => props.theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }
`;
