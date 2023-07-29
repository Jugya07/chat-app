import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

// eslint-disable-next-line react/prop-types
const ChatProvider = ({ children }) => {
  const [check, setCheck] = useState(0);
  return (
    <ChatContext.Provider value={(check, setCheck)}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
