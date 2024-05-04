import styled from "styled-components";

export const ButtonView = styled.button`
  background-color: ${(props) => (props.filled ? props.bg : "#fff")};
  color: ${(props) => (props.filled ? props.color : "#000")};
  border: ${(props) => (props.filled ? "none" : "1px solid #000")};
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.filled ? props.bg : "#f0f0f0")};
  }
`;