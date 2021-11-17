import React from 'react';
import { Appbar, Button } from 'react-native-paper';

export default function App() {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="delete" onPress={() => {}} />
      </Appbar.Header>

      <Button icon="content-save" mode="contained" onPress={() => console.log('Pressed')} style={{margin:10}}>
        Save
      </Button>
    </>
  );
}