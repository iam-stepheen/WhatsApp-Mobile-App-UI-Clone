import { useNavigation, useSearchParams } from "expo-router";
import React, { useLayoutEffect } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
  ScrollView,
} from "react-native";
import ListCard from "../../../components/ListCard/ListCard";

import { GlobalColors } from "../../../constants/styles/colors";
const options = {
  main: [
    {
      id: 1,
      imageName: "contactInfoMedia",
      centerText: "Media , Links and Docs",
      rightText: "12",
    },
    {
      id: 2,
      imageName: "contactInfoStarredImage",
      centerText: "Starred Messages",
      rightText: "None",
    },
    {
      id: 3,
      imageName: "contactInfoSearch",
      centerText: "Chat Search",
      rightText: "",
    },
  ],
  secondary: [
    {
      id: 1,
      imageName: "contactInfoMute",
      centerText: "Mute",
      rightText: "No",
    },
    {
      id: 2,
      imageName: "contactInfoStarredImage",
      centerText: "Starred Messages",
      rightText: "None",
    },
    {
      id: 3,
      imageName: "contactInfoSearch",
      centerText: "Chat Search",
      rightText: "",
    },
  ],
};
const contactInfo: React.FC<{}> = () => {
  const navigation = useNavigation();
  const { name, phoneNo } = useSearchParams();
  console.log(phoneNo);

  const goBack = () => {
    navigation.goBack();
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Contact Info",
      headerRight: () => {
        return <Text style={styles.headerRightText}>Edit</Text>;
      },

      headerLeft: () => {
        return (
          <Pressable onPress={goBack}>
            <View style={styles.headerLeft}>
              <Image
                source={require("../../../assets/images/headerLeft.png")}
              />
              <Text style={styles.headerLeftText}>{name}</Text>
            </View>
          </Pressable>
        );
      },
    });
  });
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View>
          <Image
            style={{ width: "100%" }}
            source={require("../../../assets/images/contactInfo.png")}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.containerInner}>
            <View style={styles.contactInfo}>
              <Text style={styles.contactInfoName}>{name}</Text>
              <Text style={styles.contactInfoNumber}>+{phoneNo}</Text>
            </View>
            <View style={styles.contactInfoIcons}>
              <Image
                source={require("../../../assets/images/contactInfoChats.png")}
              />
              <Image
                source={require("../../../assets/images/contactInfoVideo.png")}
              />
              <Image
                source={require("../../../assets/images/contactInfoCall.png")}
              />
            </View>
          </View>

          <View style={styles.contactInfoDescription}>
            <Text style={styles.contactInfoDescriptionText}>
              Design adds value faster, than it adds cost
            </Text>
            <Text style={styles.contactInfoDescriptionDate}>Dec 18, 2018</Text>
          </View>
        </View>

        <View style={styles.spacer}></View>
        <View style={styles.contactInfoOptions}>
          {options.main.map((x) => {
            return (
              <View key={x.id}>
                <ListCard
                  imageName={x.imageName}
                  centerText={x.centerText}
                  rightText={x.rightText}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.spacer}></View>

        <View style={styles.contactInfoOptions}>
          {options.secondary.map((x) => {
            return (
              <View key={x.id}>
                <ListCard
                  imageName={x.imageName}
                  centerText={x.centerText}
                  rightText={x.rightText}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRightText: {
    color: GlobalColors.colors.primary,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  headerLeftText: {
    color: GlobalColors.colors.primary,
    fontSize: 15,
  },
  screen: {
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  container: {
    backgroundColor: GlobalColors.colors.white,
    //paddingHorizontal: 13,
  },
  containerInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: GlobalColors.colors.secondary,
    borderBottomWidth: 2,
    backgroundColor: GlobalColors.colors.white,
  },
  contactInfo: {
    paddingVertical: 15,
    flexDirection: "column",
    gap: 7,
    paddingLeft: 13,
  },
  contactInfoName: {
    fontSize: 20,
    fontWeight: "500",
  },
  contactInfoNumber: {
    color: GlobalColors.colors.grey,
  },
  contactInfoIcons: {
    flexDirection: "row",
    gap: 12,
    paddingRight: 13,
    backgroundColor: GlobalColors.colors.white,
  },

  contactInfoDescription: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 13,
    paddingVertical: 15,
    backgroundColor: GlobalColors.colors.white,
  },
  contactInfoDescriptionText: {
    fontSize: 16,
    fontWeight: "400",
  },
  contactInfoDescriptionDate: {
    color: GlobalColors.colors.grey,
  },
  spacer: {
    borderBottomColor: GlobalColors.colors.grey,
    borderBottomWidth: 0.2,
    borderTopColor: GlobalColors.colors.grey,
    borderTopWidth: 0.2,
    height: 20,
  },
  contactInfoOptions: {
    marginTop: 2,
    paddingHorizontal: 13,
    backgroundColor: GlobalColors.colors.white,
  },
});

export default contactInfo;
