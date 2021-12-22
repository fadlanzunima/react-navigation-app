import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import HeaderTop from './Component/HeaderTop';
import {SignupUser} from '../config/auth';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValidasi, setusernameValidasi] = useState(true);
  const [show, setShow] = useState(true);

  const checkText = (value, name) => {
    switch (name) {
      case 'inputUsername':
        setUsername(value);
        break;
      case 'inputPassword':
        setPassword(value);
        break;
      default:
        break;
    }

    if (!value && name === 'inputUsername') {
      setusernameValidasi(true);
    } else {
      setusernameValidasi(false);
    }
  };

  const FunctionSignUp = () => {
    const body = {
      username,
      password,
    };
    SignupUser(body).then(data => {
      console.log(data);
    });
  };

  const ChangeShowPassword = () => {
    setShow(!show);
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderTop
        navigation={navigation}
        title="Create your account"
        goToScreen="SignInNSignUp"
      />
      <View
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          top: Dimensions.get('window').width * 0.85,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 14, color: '#A1A4B2', fontWeight: 'bold'}}>
          OR SIGN UP WITH EMAIL
        </Text>

        <View style={{marginTop: 20}}>
          <View style={styles.inputText}>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={value => checkText(value, 'inputUsername')}
            />
            {usernameValidasi === false ? (
              <Icon
                name="check"
                style={{paddingTop: 10}}
                color="#6CB28E"
                size={18}
                style={{paddingVertical: 15}}
              />
            ) : null}
          </View>

          <View style={styles.inputText}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={value => checkText(value, 'inputPassword')}
              secureTextEntry={show}
            />
            <TouchableOpacity
              style={{paddingVertical: 15}}
              onPress={ChangeShowPassword}>
              {show ? (
                <Icon name="eye" type="font-awesome" color="#000" size={15} />
              ) : (
                <Icon
                  name="eye-slash"
                  type="font-awesome"
                  color="#000"
                  size={15}
                />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.login}
            onPress={() => FunctionSignUp()}>
            <Text style={styles.textLogIn}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
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
  inputText: {
    position: 'relative',
    width: Dimensions.get('window').width - 40,
    height: 50,
    backgroundColor: '#F2F3F7',
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  textLogIn: {
    fontSize: 14,
    color: '#F6F1FB',
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#8E97FD',
    borderRadius: 38,
    width: Dimensions.get('window').width - 40,
    height: 63,
    marginBottom: 10,
  },
});

export default SignUp;
