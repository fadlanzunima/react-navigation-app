import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';

function Topics() {
  return (
    <View style={styles.container}>
      <View style={{position: 'relative'}}>
        <View style={{marginHorizontal: 20, zIndex: 1, marginTop: 40}}>
          <Text style={styles.textTop}>What Brings you</Text>
          <Text style={styles.textBottom}>to Silent Moon?</Text>
          <Text
            style={{
              fontFamily: 'HelveticaNeue',
              fontWeight: '300',
              fontSize: 20,
              lineHeight: 50,
              color: '#A1A4B2',
            }}>
            choose a topic to focuse on:
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: Dimensions.get('window').width * -0.2,
            left: 0,
            zIndex: 0,
          }}>
          <Image
            style={{width: Dimensions.get('window').width}}
            source={require('../assets/img/cloud.png')}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textTop: {
    fontFamily: 'Helvetica-Neue',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#3F414E',
  },
  textBottom: {
    fontFamily: 'Helvetica-Neue',
    fontWeight: '300',
    fontSize: 25,
    color: '#3F414E',
  },
});

export default Topics;
