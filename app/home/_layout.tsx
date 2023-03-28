import { useRoute } from "@react-navigation/core";
import { Tabs, useNavigation, usePathname, useRouter, useSearchParams } from "expo-router";
import { View, Image } from "react-native";
import { GlobalColors } from "../../constants/styles/colors";
import { Linking } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
// import { } from "../../assets/images"
const HomeLayout = () => {
  const pathName = usePathname();
  const {camera} = useSearchParams()
  const [showTabBar, setShowTabBar] = useState<boolean>(true);
  console.log(pathName)
  console.log(camera)

  useLayoutEffect(() => {
    if (pathName.includes("/home/chats/")|| camera==='on') {
      setShowTabBar(false);
    } else {
      setShowTabBar(true);
    }
  }, [pathName]);

  return (
    <Tabs
      id="homeTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GlobalColors.colors.primary,
        tabBarStyle: {
          display: showTabBar ? "flex" : "none",
        },
      }}
    >
      <Tabs.Screen
        name="status"
        options={{
          title: "status",
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Image
                  style={{ tintColor: color }}
                  source={require("../../assets/images/status.png")}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: "calls",
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Image
                  style={{ tintColor: color }}
                  source={require("../../assets/images/calls.png")}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="camera/index"
        initialParams={{camera:'on'}}
        options={{
          title: "camera",
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Image
                  style={{ tintColor: color }}
                  source={require("../../assets/images/camera.png")}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "chats",
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Image
                  style={{ tintColor: color }}
                  source={require("../../assets/images/chats.png")}
                />
              </View>
            );
          },
        }}
      />
      {/* <Tabs.Screen
        name="chats/[id]"
        options={{
          // presentation: "modal",
          tabBarItemStyle: {
            display: "none",
          },
          tabBarStyle: {
            display: "none",
            // tabBarVisible: false,
          },

          title: "messageRoom",

          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Image
                  style={{ tintColor: color }}
                  source={require("../../assets/images/chats.png")}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="chats/styles/index"
        options={{
          tabBarItemStyle: {
            display: "none",
          },
          tabBarStyle: {
            display: "none",
            // tabBarVisible: false,
          },

          title: "messageRoom",

          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Image
                  style={{ tintColor: color }}
                  source={require("../../assets/images/chats.png")}
                />
              </View>
            );
          },
        }}
      /> */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Image
                  style={{ tintColor: color }}
                  source={require("../../assets/images/settings.png")}
                />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
