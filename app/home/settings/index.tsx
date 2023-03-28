import { View, Text, StyleSheet,Image } from "react-native";
import ListCard from "../../../components/ListCard/ListCard";
import { GlobalColors } from "../../../constants/styles/colors";
const lists={
  primary:[
    {id:1, name:"Starred Messages", image:"starredMessage"},
    {id:2, name:"WhatsAppWeb / Desktop", image:"whatsAppWeb"}
  ],
  secondary:[ 
    {id:1, name:"Account", image:"Account"},
    {id:2, name:"Chat", image:"Chat"},
    {id:3, name:"Notification", image:"Notification"},
    {id:4, name:"Data & Storage Usage", image:"DataStorage"}
  ],
  tetiary:[
    {id:1, name:"Help", image:"help"},
    {id:2, name:"Tell a Freind", image:"tellAFreind"},
   
  ]
}
const Settings = () => {
  return (
    <View style={style.container} >
      <View style={style.headerContainer} >
      <View style={style.header}  >
      <View  >
        <Image source={require('../../../assets/images/chatAvatar.png')} />
      </View>
      <View style={style.headerSecondCol} >
        <Text style={style.headerSecondColTextHeader}>Okunade Stephen</Text>
        <Text style={style.headerSecondColTextSub}>Software Engineer at Amazon & Meta</Text>
      </View>
      <View>
        <Image source={require('../../../assets/images/rightArrow.png')} />
      </View>
    </View>
      </View>

      <View style = {style.listsContainer}>
      <View style={style.listPaddingHorizontal} >
        {lists.primary.map(x=><ListCard key={x.id} imageName={x.image} centerText={x.name} rightText="" />)}
      </View>

      <View style={style.listPaddingHorizontal}>
        {lists.secondary.map(x=><ListCard key={x.id} imageName={x.image} centerText={x.name} rightText="" />)}
      </View>


      <View style={style.listPaddingHorizontal}>
        {lists.tetiary.map(x=><ListCard key={x.id} imageName={x.image} centerText={x.name} rightText="" />)}
      </View>
      </View>

     
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor:"#EFEFF4",
    
  },
  headerContainer:{
    backgroundColor:GlobalColors.colors.white,
    paddingHorizontal:13,
    paddingVertical:10
  },
  header:{
    flexDirection:"row",
    gap:15,
    alignItems:"center",
    
  
    
  },
  headerSecondCol:{
    flexGrow:1,
    flexDirection:"column",
    gap:5
  },
  headerSecondColTextHeader:{
    fontWeight:'500',
    fontSize:16
  },
  headerSecondColTextSub:{
    color:GlobalColors.colors.grey
  },
  listsContainer:{
    marginTop:30,
   flexDirection:"column",
   gap:30,
 },
 listPaddingHorizontal:{
  backgroundColor:GlobalColors.colors.white,
  paddingHorizontal:13
 },
 
})

export default Settings;
