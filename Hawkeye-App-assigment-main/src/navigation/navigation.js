// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BottomNavigator from '../screens/BottomNavigator/BottomNavigator.';
// import FirstScreen from '../screens/FirstScreen/FirstScreen';
// import Thirdscreen from '../screens/ThirdScreen/Thirdscreen';
// import SecondScreen from '../screens/SecondScreen/SecondScreen';

// export default function Navigation() {
  
// const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator  
//       screenOptions={{
//         headerShown: false, // This will hide the header for all screens in this stack
//       }} 
//        >
//         <Stack.Screen name="first" component={FirstScreen} />
//         <Stack.Screen name="second" component={SecondScreen} />
//         <Stack.Screen name="third" component={Thirdscreen} />

//       </Stack.Navigator>
//       <BottomNavigator />
//     </NavigationContainer>
//   )
// }





// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from '../screens/BottomNavigator/BottomNavigator';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import ThirdScreen from '../screens/ThirdScreen/ThirdScreen'; // Correct import name
import SecondScreen from '../screens/SecondScreen/SecondScreen';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="first" component={FirstScreen} />
        <Stack.Screen name="second" component={SecondScreen} />
        <Stack.Screen name="bottom" component={BottomNavigator} />
        {/* Note: Rename the screen to "bottom" or any name you prefer */}
        <Stack.Screen name="third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
