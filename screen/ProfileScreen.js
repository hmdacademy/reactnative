import React from 'react';
import { Appbar, Button } from 'react-native-paper';

function ProfileScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>

      <Button icon="content-save" mode="contained" onPress={() => navigation.navigate('HomeScreen')} style={{margin:10}}>
        Kembali
      </Button>
    </>
  );
}

export default ProfileScreen;