import styled from "styled-components";

export const HomePageWrapper = styled.article`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.main`
  width: 90%;
  max-width: 31.25rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.lightGray};
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
`;

export const Description = styled.p``;
