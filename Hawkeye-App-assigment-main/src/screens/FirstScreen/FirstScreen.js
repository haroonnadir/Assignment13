import { StyleSheet, Text, View, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FirstScreen() {

  const navigation = useNavigation()

  const Gothird =()=>{
navigation.navigate("second")
  }

  return (
    <View style={styles.container}>
    <View style={styles.one}>
      <Image source={require('../../assets/one.png')}/>
    </View>
    <View style={styles.two}>
      <Text style={styles.text2}>Make your own private</Text>
      <Text style={styles.text3}> travel plan</Text>
      <Text style={styles.text4}>Formulate your strategy to receive{'\n'}wonderful gift packs</Text>
      

    </View>
    <View style={styles.three}>
      {/* <Text style={styles.text4}>Formulate your strategy to receive wonderful gift packs</Text> */}
    </View>

<View style={styles.four}>
    <TouchableOpacity style={styles.four} onPress={Gothird} >
      <View style={styles.button}>
        <Image source={require('../../assets/Arrow.png')} />
      </View> 
      
    </TouchableOpacity>
    <View style={styles.five}>
     
     <Text style={styles.text5}>  
     <Image  source={require('../../assets/Zaps.png')} />
      Nordic Vacation Sponsor</Text>
    </View>
</View>
   

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 101,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  one: {
    flex: 3,
    paddingTop: 45,
    alignItems: 'center',
    justifyContent: 'center',

  },
  two: {
    flex: 2,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent:'center'

  },
  text2: {

    
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000', // Text color should be set in the Text component, not here
    fontFamily: 'Poppins-Normal', // Make sure 'Poppins' font is correctly installed on your device
    fontSize: 28, // Font size in device-independent pixels (dp)
    fontStyle: 'normal',
    fontWeight: '600', // Font weight should be a string
    lineHeight: 30, // You can specify line height as a number
    letterSpacing: -0.42,
  },
  text3: {


    alignItems: 'center',
    justifyContent: 'center',
    color: '#000', // Text color should be set in the Text component, not here
    fontFamily: 'Poppins', // Make sure 'Poppins' font is correctly installed on your device
    fontSize: 28, // Font size in device-independent pixels (dp)
    fontStyle: 'normal',
    fontWeight: '600', // Font weight should be a string
    lineHeight: 30, // You can specify line height as a number
    letterSpacing: -0.42,
  },
  three: {
    flex: 1,
    paddingTop: 12,
    alignItems: 'center',
  }, text4: {
    paddingTop: 12,
    // flex: 1,
    alignItems: 'center',
    color: '#B4B4B4', // Text color in React Native
    fontFamily: 'Poppins', // Use a valid font family if it's available on your device
    fontSize: 18, // Font size in device-independent pixels (dp)
    fontStyle: 'normal', // Font style
    fontWeight: '400', // Font weight
    lineHeight: 22, // Line height in dp (adjust as needed)
    letterSpacing: -0.27, // Letter spacing (adjust as needed)
    textAlign: 'center', // Text alignment
  },
 
  four: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0373F3',
    width: 76,
    height: 76,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  five:{
    // padding:10 ,
    // flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text5:{
    color: '#595959',
    fontFamily: 'Poppins',
    fontSize: 14,
    padding: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20, 
  }
})