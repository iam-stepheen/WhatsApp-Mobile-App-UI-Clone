import { View, Text, StyleSheet, Image } from "react-native";
import { GlobalColors } from "../../constants/styles/colors";

const ListCard: React.FC<{
  imageName: string;
  centerText: string;
  rightText: string;
}> = ({ imageName, centerText, rightText }) => {
  const path = `../../assets/images/${imageName}.png`;
  console.log(path);
  return (
    <View>
      <View style={styles.container}>
      {imageName === "starredMessage" && (
          <Image source={require(`../../assets/images/settingsStarredMessage.png`)} />
        )}
         {imageName === "whatsAppWeb" && (
          <Image source={require(`../../assets/images/settingsWhatsAppWeb.png`)} />
        )}
         {imageName === "Account" && (
          <Image source={require(`../../assets/images/settingsAccount.png`)} />
        )}
         {imageName === "Chat" && (
          <Image source={require(`../../assets/images/settingsChat.png`)} />
        )}
         {imageName === "Notification" && (
          <Image source={require(`../../assets/images/settingsNotification.png`)} />
        )}
         {imageName === "DataStorage" && (
          <Image source={require(`../../assets/images/SettingsData.png`)} />
        )}
         {imageName === "help" && (
          <Image source={require(`../../assets/images/help.png`)} />
        )}
         {imageName === "tellAFreind" && (
          <Image source={require(`../../assets/images/SettingsTellAFreind.png`)} />
        )}



        {imageName === "contactInfoMedia" && (
          <Image source={require(`../../assets/images/contactInfoMedia.png`)} />
        )}

        {imageName === "contactInfoStarredImage" && (
          <Image
            source={require(`../../assets/images/contactInfoStarredImage.png`)}
          />
        )}

        {imageName === "contactInfoSearch" && (
          <Image
            source={require(`../../assets/images/contactInfoSearch.png`)}
          />
        )}

        {imageName === "contactInfoMute" && (
          <Image source={require(`../../assets/images/contactInfoMute.png`)} />
        )}

        <View style={styles.contentWrapper}>
          <Text style={styles.centerText}>{centerText}</Text>
          <View style={styles.rightContainer}>
            <Text style={styles.rightContainerText}>{rightText}</Text>
            <Image
              source={require("../../assets/images/contactInfoRightIcon.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.colors.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  contentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: GlobalColors.colors.secondary,
  },

  centerText: {
    // color: GlobalColors.colors.grey,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rightContainerText: {
    color: GlobalColors.colors.grey,
  },
});

export default ListCard;
