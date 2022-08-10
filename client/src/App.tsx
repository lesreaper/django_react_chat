import React, { useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Chat } from "./components/Chat";
import { Messages } from "./components/Messages";
import { NavBar } from "./components/Navbar";
import { SubMenu } from "./components/SubMenu";

export default function App() {
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState<any>([]);
  const [name, setName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const { readyState } = useWebSocket("ws://127.0.0.1:8000/", {
    onOpen: () => {
      console.log("Connected!");
    },
    onClose: () => {
      console.log("Disconnected!");
    },
    // New onMessage handler
    onMessage: (e) => {
      const data = JSON.parse(e.data);
      switch (data.type) {
        case "welcome_message":
          setWelcomeMessage(data.message);
          break;
        case "chat_message_echo":
          setMessageHistory((prev: any) => prev.concat(data));
          break;
        default:
          console.error("Unknown message type!");
          break;
      }
    },
  });

  const { sendJsonMessage } = useWebSocket("ws://127.0.0.1:8000/");

  function handleChangeMessage(e: any) {
    setMessage(e.target.value);
  }

  function handleChangeName(e: any) {
    setName(e.target.value);
  }

  function handleSubmit() {
    sendJsonMessage({
      type: "chat_message",
      message,
      name,
    });
    setMessage("");
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div>
      <NavBar />
      <SubMenu
        connectionStatus={connectionStatus}
        welcomeMessage={welcomeMessage}
      />
      <div className="flex flex-col max-w-sm m-auto mt-8 lg:flex-row lg:justify-between lg:max-w-xl lg:m-auto lg:mt-16">
        <Chat
          name={name}
          handleChangeName={handleChangeName}
          handleChangeMessage={handleChangeMessage}
          handleSubmit={handleSubmit}
          message={message}
        />
        <Messages messages={messageHistory} />
      </div>
    </div>
  );
}
