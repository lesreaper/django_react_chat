interface messageProps {
  messages: Array<Object>;
}

export const Messages = ({ messages }: messageProps) => {
    return (
        <div className="min-w-full lg:mx-4 lg:mt-0 mt-8">
        <ul>
          {messages.map((message: any, idx: number) => (
            <div
              className="border border-gray-200 p-3 rounded-md mt-1 whitespace-normal break-words"
              key={idx}
            >
              {message.name}: {message.message}
            </div>
          ))}
        </ul>
      </div>
    )
 
};
