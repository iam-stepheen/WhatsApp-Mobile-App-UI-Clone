interface Ichats {
  contact: {
    name: string;
    avatar: string;
  };
  lastMessage: {
    text: string;
    timestamp: string;
    isRead: boolean;
    type: string;
  };
}

export interface IchatList {
  user: {
    name: string;
    avatar: string;
  };
  chats: Ichats[];
}

export interface Imessages {
  sender: string;
  recipient: string;
  timestamp: string;
  text: string;
  isRead: boolean;
  isSender: boolean;
}

export interface ICalls {
  firstName: string;
  lastName: string;
  type: string;
  timestamp: string;
}
