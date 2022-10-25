import React from "react";

import { Btn, LinkBtn } from "./button.styles";

function Button({ children, isLink, onClick }) {
  if (isLink) {
    return <LinkBtn>{children}</LinkBtn>;
  }

  return (
    <Btn onClick={onClick} inCenter>
      {children}
    </Btn>
  );
}

export default Button;
