import { useState } from "react";
import { View } from "react-native";
import CheckBox from "react-native-check-box";

const CheckBoxIcon = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <View>
      <CheckBox
        style={{ flex: 1, padding: 10, borderRadius: 10 }}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
        isChecked={isChecked}
        leftText={"CheckBox"}
      />
    </View>
  );
};

export default CheckBoxIcon;
