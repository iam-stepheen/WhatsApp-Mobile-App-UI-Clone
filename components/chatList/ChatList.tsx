import { useRouter } from "expo-router";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { GlobalColors } from "../../constants/styles/colors";
import CheckBoxIcon from "../UI/CheckBox";
const ChatList: React.FC<{
  name: string;
  date: Date;
  message: String;
  type: string;
  image: string;
  isRead: boolean;
  isEdit: boolean;
}> = ({ name, date, message, type, image, isRead, isEdit }) => {
  const chatDate = new Date(date);
  const month = chatDate.getMonth() + 1;
  const year = chatDate.getFullYear();
  const day = chatDate.getDate();
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);
  const rightWidth = useSharedValue(0);
  const router = useRouter();

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      if (Math.sign(event.translationX) === -1) {
        translateX.value = event.translationX;
        rightWidth.value = -event.translationX;
        opacity.value = 1;
      }
    },
    onEnd: (event) => {
      translateX.value = withTiming(0);
      opacity.value = withTiming(0);
    },
  });

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    width: Number(rightWidth.value),
    display: Math.sign(translateX.value) === 1 ? "none" : "flex",
  }));

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const viewMessageHandler = (name: string) => {
    router.push({
      pathname: `/home/chats/${name}`,
      params: {
        name: name,
      },
    });
  };

  return (
    <Pressable onPress={viewMessageHandler.bind(this, name)}>
      <View style={{ position: "relative" }}>
        <Animated.View
          style={[
            {
              position: "absolute",
              height: "100%",
              right: 0,
              flexDirection: "row",
              alignItems: "center",
              zIndex: 0,
              backgroundColor: "yellow",
            },
            opacityStyle,
          ]}
        >
          <View
            style={{
              backgroundColor: "#C6C6CC",
              height: "100%",
              width: "50%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              paddingTop: 10,
            }}
          >
            <View style={{ height: 20 }}>
              <Image
                source={require("../../assets/images/slide-right-more.png")}
              />
            </View>
            <Text style={{ color: "white" }}>More</Text>
          </View>
          <View
            style={{
              backgroundColor: "#3E70A7",
              height: "100%",
              width: "50%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              paddingTop: 10,
            }}
          >
            <View style={{ height: 20 }}>
              <Image
                source={require("../../assets/images/slide-right-archive.png")}
              />
            </View>

            <Text style={{ color: "white" }}>Archive</Text>
          </View>
        </Animated.View>
        <View style={{ zIndex: 1 }}>
          <PanGestureHandler onGestureEvent={panGesture}>
            <Animated.View style={[rStyle]}>
              <View style={styles.container}>
                {/* Selected Icon */}
                {/* show when edit is clicked */}
                {isEdit && (
                  <View>
                    <Animated.View>
                      <CheckBoxIcon />
                    </Animated.View>
                  </View>
                )}

                {/* Image Container */}
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/images/chatAvatar.png")}
                  />
                </View>
                {/* Message & Content */}
                <View style={styles.contentWrapper}>
                  <View style={styles.messageWrapper}>
                    <View style={styles.messageHeader}>
                      <Text style={styles.messageName}>{name}</Text>
                      <Text
                        style={styles.messageDate}
                      >{`${day}/${month}/${year}`}</Text>
                    </View>
                    <View style={styles.messageWrapperInner}>
                      <View>
                        {/* chat status icon */}
                        {type === "image" && (
                          <Image
                            source={require("../../assets/images/camera-sm.png")}
                          />
                        )}
                        {type === "text" && isRead === true && (
                          <Image
                            style={{ tintColor: GlobalColors.colors.primary }}
                            source={require("../../assets/images/seenCheck.png")}
                          />
                        )}

                        {type === "text" && isRead === false && (
                          <Image
                            style={{ tintColor: GlobalColors.colors.grey }}
                            source={require("../../assets/images/seenCheck.png")}
                          />
                        )}

                        {type === "recording" && (
                          <Image
                            source={require("../../assets/images/record-sm.png")}
                          />
                        )}
                      </View>
                      <Text style={styles.messageContent} numberOfLines={1}>
                        {message}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      source={require("../../assets/images/rightArrow.png")}
                    />
                  </View>
                </View>
              </View>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    minWidth: 10,
    marginRight: 13,
  },

  contentWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: GlobalColors.colors.grey,
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    paddingRight: 15,
  },

  messageWrapper: {
    flexDirection: "column",
    flex: 1,
    gap: 12,
    paddingRight: 7,
  },

  messageWrapperInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  messageName: {
    fontWeight: "600",
    fontSize: 16,
  },

  messageDate: {
    color: GlobalColors.colors.grey,
  },

  messageContent: {
    flex: 1,
    width: "85%",
    color: GlobalColors.colors.grey,
    alignItems: "flex-start",
  },

  chatIconsText: {
    flexDirection: "row",
    alignItems: "center",

    gap: 5,
  },
});
export default ChatList;
