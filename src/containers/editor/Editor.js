import React, { useEffect, useRef, useState } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import EditorComponent from "../../components/editor/Editor";
import SideBar from "../sideBar/sideBar";
import { initSocket } from "../../socket";
import ACTIONS from "../../Action";

function Editor() {
  const location = useLocation();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const [socketRef, setSocketRef] = useState(null);
  const { roomId } = useParams();
  const flag = useRef(0);
  const codeRef = useRef(null);

  if (!location.state) {
    navigate(`/`, { state: null });
  }

  useEffect(() => {
    const init = async () => {
      const temp = await initSocket();
      setSocketRef(temp);
    };

    init();
  }, []);

  useEffect(() => {
    flag.current++;

    async function init() {
      if (flag.current === 1) {
        editorRef.current = await Codemirror.fromTextArea(
          document.getElementById("realtimeEditor"),
          {
            mode: { name: "javascript", json: true },
            theme: "dracula",
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
          }
        );
      }

      editorRef.current.on("change", (instance, changes) => {
        const { origin } = changes;
        const code = instance.getValue();
        codeRef.current = code;
        if (origin !== "setValue") {
          socketRef?.emit(ACTIONS.CODE_CHANGE, {
            roomId,
            code,
          });
        }
      });
    }

    init();
  }, [roomId, socketRef]);

  useEffect(() => {
    if (socketRef && editorRef.current) {
      socketRef?.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null && code !== undefined) {
          editorRef.current.setValue(code);
        }
      });
    }
  }, [socketRef]);

  return (
    <>
      <Toaster position="top-right" />
      <SideBar socketRef={socketRef} codeRef={codeRef} />
      <EditorComponent />
    </>
  );
}

export default Editor;
