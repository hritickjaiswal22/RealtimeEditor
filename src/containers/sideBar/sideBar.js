import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import ACTIONS from "../../Action";
import Aside from "../../components/sidebar/sideBar";

function SideBar({ socketRef, codeRef }) {
  const { roomId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [connectedClients, setConnectedClients] = useState([]);

  useEffect(() => {
    const init = async () => {
      socketRef?.on("connect_error", (err) => handleErrors(err));
      socketRef?.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(err) {
        toast.error("Socket connection failed,please try again");
        navigate(`/`, { state: null });
      }

      // Emitting the JOIN event for the server
      socketRef?.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
      });

      // Listening for JOINED event from server to update the client list
      socketRef?.on(ACTIONS.JOINED, ({ clients, socketId, username }) => {
        if (username !== location.state.username) {
          toast.success(`${username} has joined!`);
        }

        setConnectedClients(clients);
        socketRef?.emit(ACTIONS.SYNC_CODE, { code: codeRef.current, socketId });
      });

      // Listening for DISCONNECTED event from server to update the client list
      socketRef?.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast.success(`${username} left the room`);

        setConnectedClients((prevClients) => {
          return prevClients.filter((client) => client.socketId !== socketId);
        });
      });
    };

    init();

    return () => {
      socketRef?.off(ACTIONS.JOINED);
      socketRef?.off(ACTIONS.DISCONNECTED);
      socketRef?.disconnect();
    };
  }, [socketRef]);

  function copyToClipboard() {
    navigator.clipboard.writeText(roomId);
    toast.success("Copied Room Id");
  }

  return (
    <>
      <Aside copyToClipboard={copyToClipboard} list={connectedClients} />
    </>
  );
}

export default SideBar;
