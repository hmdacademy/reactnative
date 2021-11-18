import React from 'react';
import { Appbar, Button } from 'react-native-paper';

function Home() {
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

export default Home;
