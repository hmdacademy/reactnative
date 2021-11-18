import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import MainNavigation from './navigation/MainNavigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'pink',
    accent: 'red',
  },
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="dark" />
      <MainNavigation />
    </PaperProvider>
  );
}

export default App;