import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { GlobalColors } from "../../constants/styles/colors";

const SenderCard: React.FC<{ isRead: boolean; text: string; time: string }> = ({
  isRead,
  text,
  time,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.timeWrapper}>
        <Text style={styles.timeWrapperText}>{time}</Text>
        <Image
          style={{
            tintColor: isRead
              ? GlobalColors.colors.primary
              : GlobalColors.colors.grey,
            height: 10,
          }}
          source={require("../../assets/images/seenCheck.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: GlobalColors.colors.sederColor,
    borderRadius: 12,
    padding: 10,
    maxWidth: "70%",
    gap: 10,
  },
  text: {
    backgroundColor: GlobalColors.colors.sederColor,
  },

  timeWrapper: {
    alignSelf: "flex-end",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  timeWrapperText: {
    color: GlobalColors.colors.grey,
    fontSize: 10,
  },
});
export default SenderCard;
