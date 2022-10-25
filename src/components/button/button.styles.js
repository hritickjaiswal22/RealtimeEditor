import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${(props) => props.theme.lightBlue};
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${(props) => props.theme.white};
  display: ${(props) => (props.inCenter ? "block" : "inherit")};
  margin: ${(props) => (props.inCenter ? "1rem auto" : "")};

  &:hover {
    background-color: ${(props) => props.theme.darkBlue};
  }
`;

export const LinkBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  color: ${(props) => props.theme.darkBlue};
  text-decoration: underline;
  cursor: pointer;
  font-size: inherit;
`;
