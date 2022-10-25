import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    forceNew: true,
    transports: ["websocket"],
  };

  return io(process.env.REACT_APP_BACKEND_URL, options); // Returning a Socket (Event-Emitter)
};
