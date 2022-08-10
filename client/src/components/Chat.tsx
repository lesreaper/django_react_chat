import { SyntheticEvent } from "react";

interface ChatProps {
    name: string;
    handleChangeName(event: SyntheticEvent): void;
    handleChangeMessage(event: SyntheticEvent): void;
    handleSubmit(event: SyntheticEvent): void;
    message: string; 
}


export const Chat = ({ name, handleChangeName, handleChangeMessage, handleSubmit, message }: ChatProps) => {
    return (
        <div className="flex flex-col">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChangeName}
            value={name}
            className="p-4 shadow-sm sm:text-sm border-gray-300 bg-gray-100 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChangeMessage}
            value={message}
            className="p-4 mt-4 shadow-sm sm:text-sm border-gray-300 bg-gray-100 rounded-md"
          />
          <button
            className="bg-indigo-800 px-3 py-2 text-white rounded-md mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
    )
}