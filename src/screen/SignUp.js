import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderTop from './Component/HeaderTop';

function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderTop
        navigation={navigation}
        title="Create your account"
        goToScreen="SignInNSignUp"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default SignUp;
