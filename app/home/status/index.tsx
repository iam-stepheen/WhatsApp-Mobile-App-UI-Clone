import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { GlobalColors } from "../../../constants/styles/colors";
const Status = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <View>
            <Text style={{ color: GlobalColors.colors.primary }}>Privacy</Text>
          </View>
        );
      },
    });
  });
  return (
    <View style={styles.container}>
      <View style={styles.statusCard}>
        <Image source={require("../../../assets/images/addStatus.png")} />
        <View style={styles.centerWrapper}>
          <Text style={styles.centerWrapperMain}>My Status</Text>
          <Text style={styles.centerWrapperSecondary}>Add to my status</Text>
        </View>
        <View style={styles.rightWrapper}>
          <Image source={require("../../../assets/images/statusCamera.png")} />
          <Image source={require("../../../assets/images/statusPencil.png")} />
        </View>
      </View>

      <View style={styles.statusDetails}>
        <Text style={styles.statusDetailsText}>
          No recent updates to show right now
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    flex: 1,
  },
  statusCard: {
    backgroundColor: GlobalColors.colors.white,
    flexDirection: "row",
    paddingHorizontal: 13,
    paddingVertical: 10,
    alignItems: "center",
    gap: 15,
    marginVertical: 30,
  },
  centerWrapper: {
    flexGrow: 1,
    flexDirection: "column",
    gap: 5,
  },
  centerWrapperMain: {
    fontWeight: "600",
    fontSize: 18,
  },
  centerWrapperSecondary: {
    color: GlobalColors.colors.grey,
  },
  rightWrapper: {
    flexDirection: "row",
    gap: 15,
  },

  statusDetails: {
    backgroundColor: GlobalColors.colors.white,
    paddingVertical: 18,
  },
  statusDetailsText: {
    textAlign: "center",
    color: GlobalColors.colors.grey,
  },
});
export default Status;
