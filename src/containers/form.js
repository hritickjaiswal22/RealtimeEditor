import React from "react";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import FormComponent from "../components/form/form";

function Form() {
  const navigate = useNavigate();

  function notify(res, message) {
    switch (res) {
      case "success":
        toast.success(message);
        break;

      case "fail":
        toast.error(message);
        break;

      default:
        break;
    }
  }

  async function submitHandler(roomId, username) {
    if (username && roomId) {
      navigate(`editor/${roomId}`, { state: { username } });
    } else notify("fail", "Joining failed");
  }

  function createRoom(setRoomId) {
    setRoomId(uuidV4());
    notify("success", "New Room Created");
  }

  return (
    <>
      <Toaster position="top-right" />
      <FormComponent submitHandler={submitHandler} createRoom={createRoom} />
    </>
  );
}

export default Form;
