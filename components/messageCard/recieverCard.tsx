import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalColors } from "../../constants/styles/colors";

const RecieverCard: React.FC<{ text: string; time: string }> = ({
  time,
  text,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.timeWrapper}>
        <Text style={styles.timeWrapperText}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: GlobalColors.colors.white,
    maxWidth: "70%",
    borderRadius: 12,
    padding: 10,
    gap: 10,
  },
  text: {
    backgroundColor: GlobalColors.colors.white, // set background color
  },

  timeWrapper: {
    alignSelf: "flex-end",
  },

  timeWrapperText: {
    color: GlobalColors.colors.grey,
    fontSize: 10,
  },
});

export default RecieverCard;
