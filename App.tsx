import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import thema from './src/global/styles/teme'

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoades] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoades){
    return <AppLoading />
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <ThemeProvider theme={thema}>
        <NavigationContainer>
          <AppRoutes/>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
    )
}

