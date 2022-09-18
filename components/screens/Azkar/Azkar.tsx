import { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AZKARSALAT } from '../../../assets/AzkarSalat';

const Azkar = ({ navigation }: any) => {

  useEffect(() => {
    navigation.setOptions({ 
        title:  "أذكار و أدعية", 
        headerTitleStyle:{
            color: '#0B2239',
            fontFamily: 'Amiri',
            fontSize: 24,
            fontWeight: '200',
        },
        headerTintColor: '#0B2239',
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBtn} onPress={ () => navigation.goBack() } >
            <Image style={styles.icon} source={require('../../../assets/back.png')} />
          </TouchableOpacity>
        )
     });
  },[])

  return (
    <ScrollView style={ styles.container }>
      { 
        AZKARSALAT.map(item => (
          <View key={ Math.random() * Math.random() } style={styles.zekrCard}>
              <View>
                <Text style={styles.desc}>{ item.category }</Text>
              </View>
              <View style={styles.zekr}>
                <Text style={styles.text}>{ item.zekr }</Text>
              </View>
          </View>
        ))
      }
      <View style={styles.spacer}></View>
    </ScrollView>
  )
}

export default Azkar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerBtn: {
    marginRight: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'stretch'
  },
  zekrCard: {
    padding: 5,
    backgroundColor: '#0B2239',
    marginVertical: 2,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Amiri',
    lineHeight: 40
  },
  zekr: {
    paddingBottom: 20
  },
  desc: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    padding: 5,
    borderColor: '#fff',
  },
  spacer: {
    height: 20
  }
})