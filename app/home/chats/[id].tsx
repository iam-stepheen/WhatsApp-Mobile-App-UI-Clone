import { useNavigation, useRouter, useSearchParams } from "expo-router";
import { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RecieverCard from "../../../components/messageCard/recieverCard";
import SenderCard from "../../../components/messageCard/senderCard";
import { GlobalColors } from "../../../constants/styles/colors";
import { AppContext } from "../../../store/context/appContext";

const userMessage = () => {
  const navigation = useNavigation();
  const { name } = useSearchParams();
  const { messages } = useContext(AppContext);
  const router = useRouter();

  const contactInfoHandler = () => {
    router.push({
      pathname: "/home/chats/contactInfo",
      params: {
        name: name,
        phoneNo: "+234 810 202 2543",
      },
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              paddingRight: 13,
            }}
          >
            <Image source={require("../../../assets/images/video.png")} />
            <Image
              source={require("../../../assets/images/callHeaderRight.png")}
            />
          </View>
        );
      },

      headerLeft: () => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 30,
            }}
          >
            <Pressable
              style={{ paddingLeft: 13 }}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require("../../../assets/images/headerLeft.png")}
              />
            </Pressable>

            <Pressable onPress={contactInfoHandler}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 9,
                }}
              >
                <Image
                  style={{
                    height: 40,
                    width: 40,
                  }}
                  source={require("../../../assets/images/chatAvatar.png")}
                />
                <View>
                  <Text style={{ fontSize: 15, fontWeight: "600" }}>
                    {name || "Okunade Stephen"}
                  </Text>
                  <Text
                    style={{ color: GlobalColors.colors.grey, fontSize: 12 }}
                  >
                    tap here for contact info
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        );
      },
    });
  });

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../../assets/images/chatBackground.png")}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.messagesWrapper}>
              {messages.map((x) => {
                if (x.isSender) {
                  return (
                    <View key={Math.random().toFixed(5)} style={styles.messagesWrapperSender}>
                      <SenderCard
                        text={x.text}
                        time={x.timestamp}
                        isRead={x.isRead}
                      />
                    </View>
                  );
                } else {
                  return (
                    <View key={Math.random().toFixed(5)} style={styles.messagesWrapperReciever}>
                      <RecieverCard time={x.timestamp} text={x.text} />
                    </View>
                  );
                }
              })}
            </View>
            <View style={styles.chatWrapper}>
              <View style={styles.chatWrapperInner}>
                {/* add image icons */}
                <View style={styles.leftIcon}>
                  <Image
                    source={require("../../../assets/images/addImageChat.png")}
                  />
                </View>
                {/* Input Field */}
                <View style={styles.textInput}>
                  <TextInput />
                </View>
                {/* Camera anfd button icon */}
                <View style={styles.rightIcon}>
                  <Image
                    source={require("../../../assets/images/cameraChat.png")}
                  />
                </View>
                <View>
                  <Image
                    source={require("../../../assets/images/recordChat.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 13,
  },
  chatWrapper: {
    backgroundColor: GlobalColors.colors.white,
    position: "absolute",
    bottom: 0,
    height: 70,
    width: "100%",
  },
  chatWrapperInner: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  leftIcon: {},
  textInput: {
    borderColor: GlobalColors.colors.grey,
    borderWidth: 0.75,
   
    flexGrow: 1,
    borderRadius: 10,
    paddingHorizontal:13,
    paddingVertical:5
    // flexDirection:"row",
    // alignItems:"center",
    // paddingHorizontal:12
  },
  rightIcon: {},

  messagesWrapper: {
    flexDirection: "column",
    gap: 5,
    paddingHorizontal: 13,
  },

  messagesWrapperSender: {
    alignItems: "flex-end",
  },
  messagesWrapperReciever: {
    alignItems: "flex-start",
  },
});

export default userMessage;
