import { Stack, Tabs } from "expo-router";
import { View, Text } from "react-native";
import { GlobalColors } from "../../constants/styles/colors";

const OnBoardingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalColors.colors.secondary,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Phone number",
        }}
      />
    </Stack>
  );
};

export default OnBoardingLayout;
