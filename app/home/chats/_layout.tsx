import { Stack, useRouter } from "expo-router";

const ChatLayout = () => {
  const route = useRouter();

  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: "chats",
          // headerShown: false,
        }}
      />
      {/* <Stack.Screen name="[id]" options={{}} /> */}
    </Stack>
  );
};

export default ChatLayout;
