import { Camera, CameraType } from 'expo-camera';
import { useNavigation, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image, Pressable } from 'react-native';
import { GlobalColors } from '../../../constants/styles/colors';

export default function Cameraaa() {
  const navigation = useNavigation()
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
console.log(permission)
  if (!permission) {}

  if (!permission) {
    requestPermission()
  } 

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraHeader}>
      <Pressable onPress={()=>navigation.goBack()} >
       <Image source={require('../../../assets/images/cameraCancel.png')} />
       </Pressable>
       <Pressable>
       <Image source={require('../../../assets/images/CameraFlash.png')} />
       </Pressable>
        
      </View>
      <Camera style={styles.camera} type={type}>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.cameraContainer} >
          <View style={styles.cameraContainerInner}>
          <View style={styles.cameraFirstCol}>
          <Image source={require('../../../assets/images/CameraPhoto.png')} />
          </View>
          <View style={styles.cameraSecondCol}>
          <Image source={require('../../../assets/images/cameraCapture.png')} />
          </View>
          <Pressable onPress={toggleCameraType} style={styles.cameraThirdCol} >
          <Image source={require('../../../assets/images/CameraSwitch.png')} />
          </Pressable>
          </View>
         
        </View>
      </Camera>
      <View >
        <Text style={styles.bottomText}>Hold for Video, tap for photo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    paddingVertical:60
    
  },
  camera:{
    flex:1
  },
  cameraHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
    paddingVertical:15
    
  },
  bottomText:{
    color:GlobalColors.colors.white,
    textAlign:"center",
    paddingVertical:20
  },
  cameraContainer:{
    flexDirection:"column",
    justifyContent:"center",
    position:"absolute",
    bottom:0,
    paddingVertical:20,
    width:"100%",
    paddingHorizontal:15
  },
  cameraContainerInner:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    flex:1

  },
  cameraFirstCol:{},
  cameraSecondCol:{
    flexGrow:1,
    flexDirection:"row",
    justifyContent:"center"
   
  },
  cameraThirdCol:{},
 }); 

