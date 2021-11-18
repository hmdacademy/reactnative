import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import BottomTabNavigation from './navigation/BottomTabNavigation';

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
      <BottomTabNavigation />
    </PaperProvider>
  );
}

export default App;