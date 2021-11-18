import React from 'react';
import { Appbar, Button } from 'react-native-paper';

function ProfileDetailScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile Detail" />
      </Appbar.Header>
    </>
  );
}

export default ProfileDetailScreen;