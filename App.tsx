import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import thema from './src/global/styles/teme'
import { Register } from './src/screens/Register';


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
    <ThemeProvider theme={thema}>
      <Register/>
    </ThemeProvider>
    )
}

