import React from "react";
import { ThemeProvider } from "styled-components";

import Form from "../../containers/form";
import {
  HomePageWrapper,
  FormContainer,
  Description,
  Heading,
} from "./HomePage.styles";
import { theme } from "../../theme";

function HomePage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePageWrapper>
          <FormContainer>
            <header>
              <Heading>Join Now !!</Heading>
              <Description>Paste Invitation Room ID</Description>
            </header>
            <Form />
          </FormContainer>
        </HomePageWrapper>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
