import React from "react";
import { ThemeProvider } from "styled-components";

import { PageWrapper } from "./EditorPage.styles";
import SideBar from "../../containers/sideBar/sideBar";
import Editor from "../../containers/editor/Editor";
import { theme } from "../../theme";

function EditorPage() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Editor />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default EditorPage;
