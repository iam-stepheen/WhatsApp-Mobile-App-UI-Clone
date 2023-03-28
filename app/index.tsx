import { Redirect } from "expo-router";
import { View, Text } from "react-native";
import AppContextProvider from "../store/context/appContext";
const App = () => {
  return (
    <AppContextProvider>
      <View>
        <Redirect href={"./onboarding"} />
      </View>
    </AppContextProvider>
  );
};

export default App;
