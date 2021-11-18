import React from 'react';
import { Appbar, Button } from 'react-native-paper';

function ProfileScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Profile" />
      </Appbar.Header>

      <Button icon="arrow-right" mode="contained" onPress={() => navigation.navigate('ProfileDetailScreen')} style={{margin:10}}>
        Go to Detail
      </Button>
    </>
  );
}

export default ProfileScreen;