import cn from "classnames";

interface SubMenuProps {
  connectionStatus: string;
  welcomeMessage: string;
}

export const SubMenu = ({ connectionStatus, welcomeMessage }: SubMenuProps) => {
  return (
    <div className="bg-slate-100 py-4">
      <div className="px-4 py-4">
        Websocket status:{" "}
        <span
          className={cn("", {
            "text-green-500": connectionStatus === "Open",
            "text-blue-500": connectionStatus !== "Open",
          })}
        >
          {connectionStatus}
        </span>
      </div>
      <div className="px-4 my-4">
        <div className="font-bold">Server Logs:</div>
        <p>{welcomeMessage}</p>
      </div>
    </div>
  );
};
