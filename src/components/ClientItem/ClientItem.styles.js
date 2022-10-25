import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h6 {
    font-size: 0.8rem;
  }
`;

export const Avatar = styled.div`
  background-color: ${(props) => props.theme.lightBlue};
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  width: fit-content;
  min-width: 4.375rem;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.darkBlue};
  }
`;
