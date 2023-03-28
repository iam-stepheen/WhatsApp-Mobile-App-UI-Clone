import React, { ReactElement } from "react";
import { View } from "react-native";
import { ICalls, IchatList, Imessages } from "../types/types";
import * as chatlists from "./data/chatList.json";
// import * as calls from "./data/calls.json";
// import * as message from "./data/message.json";
const messages = [
  {
    sender: "Alice",
    recipient: "Bob",
    timestamp: "2023-03-16T10:15:00",
    text: "Hey Bob, ",
    isRead: true,
    isSender: true,
  },
  {
    sender: "Bob",
    recipient: "Alice",
    timestamp: "2023-03-16T10:15:00",
    text: "I'm doing well, thanks for asking. How about you?",
    isRead: true,
    isSender: true,
  },
  {
    sender: "Alice",
    recipient: "Bob",
    timestamp: "2023-03-16T10:15:00",
    text: "I'm good too. Just wanted to check in and see how you were doing.",
    isRead: true,
    isSender: false,
  },
  {
    sender: "Bob",
    recipient: "Alice",
    timestamp: "2023-03-16T10:15:00",
    text: "I appreciate it. It's always good to hear from you.",
    isRead: false,
    isSender: true,
  },
];

const calls = [
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "missed",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "missed",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
  {
    firstName: "Okunade",
    lastName: "Stephen",
    type: "outgoing",
    timestamp: "2023-03-16T10:15:00",
  },
];

export const AppContext = React.createContext<{
  chatList: IchatList;
  messages: Imessages[];
  calls: ICalls[];
}>({
  chatList: chatlists,
  messages: messages,
  calls: calls,
});

const AppContextProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  return (
    <AppContext.Provider
      value={{ chatList: chatlists, messages: messages, calls: calls }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
