import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function Home({navigation: {navigate}}) {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() =>
          navigate('Profile', {
            nama: 'fadlan',
          })
        }>
        <Text>Pindah ke Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
