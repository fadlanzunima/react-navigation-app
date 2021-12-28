import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
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

  const goToTopic = () => {
    navigation.dispatch(StackActions.replace('Topics'));
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => removeValue()}>
        <Text>Logout</Text>
      </TouchableOpacity> */}
      <View style={styles.wrapperLogo}>
        <Image
          style={styles.iconStarted}
          source={require('../assets/img/logo-app-started.png')}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.textHi}>Hi Afsar, Welcome </Text>
        <Text style={styles.silent}>to Silent Moon</Text>
        <Text style={styles.desc}>
          Explore the app, Find some peace of mind to prepare for meditation.
        </Text>
      </View>
      <View style={{position: 'relative'}}>
        <Image
          style={styles.meditation}
          source={require('../assets/img/image-meditation.png')}
          resizeMode="contain"
        />
        <View style={styles.wraperBtn}>
          <TouchableOpacity
            style={styles.btnStarted}
            onPress={() => {
              goToTopic();
            }}>
            <Text style={{fontSize: 14, color: '#3F414E'}}> GET STARTED </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C96FF',
  },
  wrapperLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    marginBottom: 20,
  },
  iconStarted: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.25,
  },
  textHi: {
    color: '#FFECCC',
    fontSize: 30,
    letterSpacing: 0.01,
    fontWeight: 'bold',
    fontFamily: 'FreeSans',
  },
  silent: {
    color: '#FFECCC',
    fontSize: 24,
    letterSpacing: 0.01,
    marginBottom: 30,
    fontFamily: 'FreeSans',
  },
  desc: {
    textAlign: 'center',
    marginHorizontal: 23,
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#EBEAEC',
    fontFamily: 'FreeSans',
  },
  meditation: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 1.5,
  },
  btnStarted: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 374,
    height: 63,
    backgroundColor: '#EBEAEC',
    borderRadius: 38,
  },
  wraperBtn: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    top: Dimensions.get('window').width * 1,
    zIndex: 1,
  },
});

export default Welcome;
