import { useNavigation } from "expo-router";
import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { GlobalColors } from "../../../constants/styles/colors";
import { AppContext } from "../../../store/context/appContext";
const headerTabs = [
  { sn: 1, name: "All", id: "all" },
  { sn: 2, name: "Missed", id: "missed" },
];
const Calls = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const navigation = useNavigation();
  const { calls } = useContext(AppContext);
  const [activeBar, SetActiveBar] = useState<string>("all");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <>
            {isEdit && (
              <Pressable
                onPress={() => {
                  setIsEdit(!isEdit);
                }}
              >
                <Text style={style.headerLeftText}>Done</Text>
              </Pressable>
            )}
            {!isEdit && (
              <Pressable
                onPress={() => {
                  setIsEdit(!isEdit);
                }}
              >
                <Text style={{ color: GlobalColors.colors.primary }}>Edit</Text>
              </Pressable>
            )}
            {}
          </>
        );
      },
      headerRight: () => {
        return (
          <>
            {isEdit && <Text style={style.headerRightText}>Clear</Text>}
            {!isEdit && (
              <Image
                source={require("../../../assets/images/callIconRight.png")}
              />
            )}
          </>
        );
      },
      headerTitle: () => {
        return (
          <View style={style.headerTitle}>
            {headerTabs.map((x) => (
              <Pressable key={x.sn} onPress={() => SetActiveBar(x.id)}>
                <Text
                  style={
                    x.id === activeBar
                      ? style.headerActiveTab
                      : style.headerTitleText
                  }
                >
                  {x.name}
                </Text>
              </Pressable>
            ))}
          </View>
        );
      },
    });
  });
  return (
   
      <FlatList
      style={style.container}
        data={calls}
        keyExtractor={() => Math.random().toFixed(9)}
        renderItem={(item) => (
          <View key={Math.random().toFixed(5)} style={style.cardContainer}>
            {isEdit && (
              <Image
                source={require("../../../assets/images/callEditIcon.png")}
              />
            )}
            <Image source={require("../../../assets/images/chatAvatar.png")} />
            <View style={style.secondColumnWrapper}>
              <View style={style.cardContainerSecondCol}>
                <Text
                  style={
                    item.item.type === "outgoing"
                      ? style.cardContainerSecondColText
                      : [style.cardContainerSecondColText, { color: "red" }]
                  }
                >
                  {`${item.item.firstName} ${item.item.lastName}`}
                </Text>
                <View style={style.cardContainerSecondColInner}>
                  <Image
                    source={require("../../../assets/images/callsIcon.png")}
                  />
                  <Text style={style.cardContainerSecondColInnerText}>
                    {item.item.type}
                  </Text>
                </View>
              </View>
              <View style={style.cardContainerThirdCol}>
                <Text style={style.cardContainerThirdColText}>10/13/19</Text>
                <Image
                  source={require("../../../assets/images/callsIconInfo.png")}
                />
              </View>
            </View>
          </View>
        )}
      />
     
    
  );
};

const style = StyleSheet.create({
  headerTitle: {
    flexDirection: "row",
    borderColor: GlobalColors.colors.primary,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
  headerTitleText: {
    minWidth: 80,
    textAlign: "center",
    paddingVertical: 5,
    color: GlobalColors.colors.primary,
  },
  headerActiveTab: {
    minWidth: 80,
    textAlign: "center",
    paddingVertical: 5,
    color: GlobalColors.colors.white,
    backgroundColor: GlobalColors.colors.primary,
  },
  headerLeftText: {
    color: GlobalColors.colors.primary,
    fontWeight: "600",
  },
  headerRightText: {
    color: GlobalColors.colors.primary,
  },
  container: {
    backgroundColor: GlobalColors.colors.white,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  secondColumnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    borderBottomColor: GlobalColors.colors.grey,
    borderBottomWidth: 0.2,
    paddingVertical: 10,
  },
  cardContainerSecondCol: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  },
  cardContainerSecondColText: {
    fontWeight: "500",
    fontSize: 16,
  },
  cardContainerSecondColInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  cardContainerSecondColInnerText: {
    color: GlobalColors.colors.grey,
  },
  cardContainerThirdCol: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  cardContainerThirdColText: {
    color: GlobalColors.colors.grey,
  },
});

export default Calls;
