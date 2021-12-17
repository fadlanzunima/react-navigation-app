import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';

function HeaderTop(props) {
  return (
    <View style={styles.wrapperHeader}>
      <View style={{zIndex: 2}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(props.goToScreen)}
          style={styles.backBtn}>
          {/*  */}
          <Image
            style={{width: 18, height: 18}}
            source={require('../../assets/img/arrow-right.png')}
          />
        </TouchableOpacity>

        <View style={styles.wrapperTitle}>
          <Text style={styles.welcomeText}>{props.title}</Text>

          <TouchableOpacity style={styles.fbBtn}>
            <View style={styles.iconWrapperFb}>
              <Image
                style={{width: 12, height: 24}}
                source={require('../../assets/img/fb.png')}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.textFb}>CONTINUE WITH FACEBOOK</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleBtn}>
            <View style={styles.iconWrapperGoogle}>
              <Image
                style={{width: 24, height: 25}}
                source={require('../../assets/img/google.png')}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.textGoogle}>CONTINUE WITH GOOGLE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        style={styles.headerBg}
        source={require('../../assets/img/header-bg.png')}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperHeader: {
    position: 'relative',
    height: 'auto',
    width: Dimensions.get('window').width,
    flex: 0.7,
  },
  wrapperTitle: {
    position: 'absolute',
    display: 'flex',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    top: Dimensions.get('window').width * 0.25,
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
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  iconWrapperFb: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    left: 30,
    zIndex: 1,
  },
  iconWrapperGoogle: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    left: 25,
    zIndex: 1,
  },
});

export default HeaderTop;
