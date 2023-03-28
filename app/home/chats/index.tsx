import { Link, useNavigation, useRouter } from "expo-router";
import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import ChatList from "../../../components/chatList/ChatList";
import { AppContext } from "../../../store/context/appContext";
import Homestyles from "./styles";
const Chats = ({ navigate }) => {
  const navigation = useNavigation();
  const ctx = useContext(AppContext);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const editChatHandler = () => {
    setIsEditClicked(!isEditClicked);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View>
            {!isEditClicked && (
              <Image source={require("../../../assets/images/editChat.png")} />
            )}
          </View>
        );
      },
      headerLeft: () => {
        return (
          <Pressable onPress={editChatHandler}>
            {!isEditClicked && <Text style={Homestyles.headerColor}>Edit</Text>}

            {isEditClicked && <Text style={Homestyles.headerColor}>Done</Text>}
          </Pressable>
        );
      },
    });
  });
  return (
    <View style={Homestyles.container}>
      {/* chat action */}
      <View style={Homestyles.chatActions}>
        <Text
          style={
            isEditClicked
              ? [Homestyles.chatActionsText, { color: "#C7C7CC" }]
              : [Homestyles.chatActionsText]
          }
        >
          Broadcast Lists
        </Text>
        <Text
          style={
            isEditClicked
              ? [
                  Homestyles.chatActionsText,
                  { color: "#C7C7CC", paddingRight: 13 },
                ]
              : [Homestyles.chatActionsText, { paddingRight: 13 }]
          }
        >
          New Group
        </Text>
      </View>

      {/* chat lists */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={ctx.chatList.chats}
          renderItem={({ item }) => (
            <ChatList
              name={item.contact.name}
              date={new Date(item.lastMessage.timestamp)}
              message={item.lastMessage.text}
              type={item.lastMessage.type}
              image={item.contact.avatar}
              isRead={item.lastMessage.isRead}
              isEdit={isEditClicked}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Chats;
