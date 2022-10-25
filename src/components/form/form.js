import React, { useState } from "react";

import { Form as FormHtml, Input } from "./form.styles";
import { Description } from "../../pages/HomePage/HomePage.styles";
import Button from "../button/button";

function Form({ submitHandler, createRoom }) {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  function formHandler(e) {
    e.preventDefault();
    submitHandler(roomId, username);
    setRoomId("");
    setUsername("");
  }

  return (
    <>
      <FormHtml onSubmit={formHandler}>
        <Input
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Room ID"
        />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Button>Join</Button>
      </FormHtml>
      <footer>
        <Description onClick={() => createRoom(setRoomId)}>
          If you don't have an invite then create &nbsp;
          {<Button isLink>new room</Button>}
        </Description>
      </footer>
    </>
  );
}

export default Form;
