import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Home from './screen/Home';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'pink',
    accent: 'red',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="dark" />
      <Home />
    </PaperProvider>
  );
}