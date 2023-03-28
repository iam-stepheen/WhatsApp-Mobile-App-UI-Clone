import { Formik } from "formik";
import { View, Text, Pressable, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import OnboardingStyles from "../../constants/styles/onboarding";
import { GlobalColors } from "../../constants/styles/colors";
// import { } from '../../assets/images'

const dd = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const handleRightHeaderClick = () => {
    router.replace("/home");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={handleRightHeaderClick}
            style={({ pressed }) => (pressed ? { opacity: 0.75 } : null)}
          >
            <View>
              <Text style={{ color: GlobalColors.colors.primary }}>Done</Text>
            </View>
          </Pressable>
        );
      },
    });
  });

  return (
    <View style={OnboardingStyles.container}>
      <Text style={OnboardingStyles.containerInnerText}>
        Please confirm your country code and enter your phone number
      </Text>

      <Pressable
        // onPress={() => router.push("/onboarding/country/countryOptions")}
      >
        <View style={OnboardingStyles.countryContainer}>
          <Text style={OnboardingStyles.countryContainerTextInner}>
            United States
          </Text>
          <Image source={require("../../assets/images/rightArrow.png")} />
        </View>
      </Pressable>
      <View style={OnboardingStyles.phoneContainer}>
        <Pressable style={OnboardingStyles.phoneContainerColOne}>
          <View>
            <Text style={OnboardingStyles.phoneContainerText}>+1</Text>
          </View>
        </Pressable>
        <View style={OnboardingStyles.phoneContainerCol2}>
          <TextInput
            style={OnboardingStyles.phoneContainerCol2Input}
            placeholder="phone number"
            keyboardType="number-pad"
          />
        </View>
      </View>
    </View>
  );
};

export default dd;
