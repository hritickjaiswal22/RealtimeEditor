import React from "react";

import { Container, Avatar } from "./ClientItem.styles";

function ClientItem({ name = "*" }) {
  const arr = name.split(" ");
  let str = arr[0][0];
  str = arr[1] ? str + arr[1][0] : str;

  return (
    <Container>
      {str && <Avatar>{str.toUpperCase()}</Avatar>}
      <h6>{name}</h6>
    </Container>
  );
}

export default ClientItem;
