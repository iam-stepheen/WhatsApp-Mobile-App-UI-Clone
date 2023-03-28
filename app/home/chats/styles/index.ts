import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../../constants/styles/colors";

const Homestyles = StyleSheet.create({
  // Index page styles
  headerColor: {
    color: GlobalColors.colors.primary,
    // fontSize: 21,
  },
  container: {
    paddingLeft: 13,
    paddingVertical: 13,
    flex: 1,
    backgroundColor: GlobalColors.colors.white,
    flexDirection: "column",
    gap: 25,
  },

  chatActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  chatActionsText: {
    color: GlobalColors.colors.primary,
    fontSize: 17,
  },
});

export default Homestyles;
