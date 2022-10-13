import Slider from '@react-native-community/slider';
import { useEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const Home = ({ navigation }: any) => {

  useEffect(()=> {
    navigation.setOptions({
      title: "Muslim", 
      headerStyle: styles.header, 
      headerTitleStyle:{
        color: '#fff',
        fontFamily: 'Amiri',
        fontSize: 24,
        fontWeight: '200',
      },
      headerTintColor: '#0B2239',
    });
  }, [])

  return (
    <View style={ styles.container }>
      <Text style={ styles.heading }>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</Text>
      <Text style={{ color: "#0B2239" }}>what would you like to see?</Text>
      <View style={ styles.butons }>
        <Pressable onPress={ () => navigation.navigate('Quran') } style={ styles.button }>
          <Text style={styles.text}>القرآن الکریم</Text>
        </Pressable>
        <Pressable onPress={ () => navigation.navigate('Dua') } style={ styles.button }>
          <Text style={styles.text}>دعاء</Text>
        </Pressable>   
      </View>
      <Pressable onPress={ () => navigation.navigate('Azkar') } style={ styles.button }>
        <Text style={styles.text}>أذكار و أدعية بدون أنترنت</Text>
      </Pressable>
      <Slider 
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#770303"
        maximumTrackTintColor="#000000"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  heading: {
    fontSize: 30,
    fontFamily: 'Amiri',
    fontWeight: '600',
    color: '#0B2239'
  },
  button: {
    marginVertical: 20,
    minWidth: 150,
    backgroundColor: '#0B2239',
    borderRadius: 50,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Amiri',
    textAlign: 'center'
  },
  butons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: "#0B2239",
  }
})

export default Home