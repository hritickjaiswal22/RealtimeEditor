import React from "react";

import { Aside, List } from "./sideBar.styles";
import Item from "../ClientItem/ClientItem";
import Button from "../button/button";

function SideBar({ list = [], copyToClipboard }) {
  return (
    <Aside>
      <header>
        <h3>Connected</h3>
      </header>

      <List>
        {list.map(({ socketId, username }) => (
          <Item key={socketId} name={username} />
        ))}
      </List>

      <Button onClick={copyToClipboard}>Copy Room Id</Button>
    </Aside>
  );
}

export default SideBar;
