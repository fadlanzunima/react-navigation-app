import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

function Login({navigation: {navigate}}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View style={{zIndex: 2}}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigate('SignUp')}>
            <Image
              style={{width: 18, height: 18}}
              source={require('../assets/img/arrow-right.png')}
            />
          </TouchableOpacity>

          <View style={styles.wrapperTitle}>
            <Text style={styles.welcomeText}>Welcome Back!</Text>

            <TouchableOpacity style={styles.fbBtn}>
              <Text style={styles.textFb}>CONTINUE WITH FACEBOOK</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleBtn}>
              <Text style={styles.textGoogle}>CONTINUE WITH GOOGLE</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          style={styles.headerBg}
          source={require('../assets/img/header-bg.png')}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: Dimensions.get('window').width * 0.1,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}>
        <Text>OR LOG IN WITH EMAIL</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapperHeader: {
    position: 'relative',
    height: 'auto',
    width: Dimensions.get('window').width,
    flex: 0.7,
  },
  backBtn: {
    position: 'absolute',
    zIndex: 2,
    top: Dimensions.get('window').width * 0.1,
    left: Dimensions.get('window').width * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderColor: '#EBEAEC',
    borderWidth: 1,
    borderRadius: 50,
  },
  wrapperTitle: {
    position: 'absolute',
    display: 'flex',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    top: Dimensions.get('window').width * 0.25,
  },
  welcomeText: {
    color: '#3F414E',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Neue',
    marginBottom: 15,
  },
  headerBg: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.6,
  },
  fbBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 20,
    backgroundColor: '#7583CA',
    borderRadius: 38,
    width: Dimensions.get('window').width - 40,
    height: 63,
    marginTop: 20,
  },
  textFb: {
    fontSize: 14,
    color: '#F6F1FB',
  },
  googleBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderColor: '#EBEAEC',
    borderWidth: 1,
    borderRadius: 38,
    width: Dimensions.get('window').width - 40,
    height: 63,
    marginTop: 20,
  },
  textGoogle: {
    fontSize: 14,
    color: '#3F414E',
  },
});

export default Login;
