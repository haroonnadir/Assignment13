// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {NavigationContainer} from '@react-navigation/native'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Home from '../Home/Home';
// import Wallet from '../Wallet/Wallet';
// import Guide from '../Guide/Guide';
// import Chart from '../Chart/Chart';



// export default function BottomNavigator() {
//   const Tab = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name='home' component={Home} />
//         <Tab.Screen name='wallet' component={Wallet} />
//         <Tab.Screen name='guide' component={Guide} />
//         <Tab.Screen name='chart' component={Chart} />


//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({})





// BottomNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Wallet from '../Wallet/Wallet';
import Guide from '../Guide/Guide';
import Chart from '../Chart/Chart';
import { Image, View  } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomNavigator({ navigation }) {
  return (
    <Tab.Navigator  screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name='home' component={Home} options={{
        tabBarIcon:({focused}) =>(
          <View>
         <Image source={require('../../assets/home.png')} />
          </View>
        )
      }} />
      <Tab.Screen name='wallet' component={Wallet}  options={{
        tabBarIcon:({focused}) =>(
          <View>
         <Image source={require('../../assets/wallet.png')} />
          </View>
        )
      }} />
      <Tab.Screen name='guide' component={Guide}  options={{
        tabBarIcon:({focused}) =>(
          <View>
         <Image source={require('../../assets/guide.png')} />
          </View>
        )
      }} />
      <Tab.Screen
        name='chart'
        component={Chart}
        options={{
          tabBarIcon:({focused}) =>(
            <View>
           <Image source={require('../../assets/chart.png')} />
            </View>
          )
        }}
        
      />
    </Tab.Navigator>
  );
}
