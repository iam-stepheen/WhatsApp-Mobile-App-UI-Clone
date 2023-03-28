import { StyleSheet } from "react-native";
import { GlobalColors } from "./colors";

const OnboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,

    backgroundColor: "white",
  },
  containerInnerText: {
    textAlign: "center",
    paddingHorizontal: 65,
    paddingVertical: 20,
    fontSize: 14,
    fontWeight: "500",
  },
  countryContainer: {
    borderTopColor: GlobalColors.colors.secondary,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  countryContainerTextInner: {
    color: GlobalColors.colors.primary,
    fontSize: 21,
  },
  phoneContainer: {
    flexDirection: "row",
    borderTopColor: GlobalColors.colors.secondary,
    borderBottomColor: GlobalColors.colors.secondary,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 50,
    alignItems: "center",
    // paddingVertical: 10,

    // height: 32,
  },
  phoneContainerColOne: {
    borderRightColor: GlobalColors.colors.secondary,
    borderRightWidth: 1,
    width: "20%",
    flexDirection: "row",
    justifyContent: "center",
  },
  phoneContainerCol2: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  phoneContainerCol2Input: {
    fontSize: 30,
    fontWeight: "400",
    flexDirection: "row",
    alignItems: "center",
  },
  phoneContainerText: {
    fontSize: 35,
    fontWeight: "400",
    borderRightColor: "red",
    borderRightWidth: 1,
  },
});

export default OnboardingStyles;
