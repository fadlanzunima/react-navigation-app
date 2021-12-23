import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Welcome() {
  const navigation = useNavigation();
  
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_user');
      navigation.dispatch(StackActions.replace('SignUp'));
      console.log('logout');
    } catch (e) {
      // remove error
      console.log(e);
    }

    console.log('Done.');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => removeValue()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C96FF',
  },
});

export default Welcome;
