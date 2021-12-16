import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

function Profile() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View>
      <Text>Profile {route.params.nama}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Button Kembali ke home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
