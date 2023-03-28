import { Stack, useRouter } from "expo-router";

const StatusLayout = () => {
  return (
    <Stack screenOptions={{headerStyle:{
      // backgroundColor:'#F6F6F6'
    }}} initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: "Status",
          // headerShown: true,
        }}
      />
    </Stack>
  );
};

export default StatusLayout;
