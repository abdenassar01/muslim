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
          <Text style={styles.text}>أذكار و أدعية</Text>
        </Pressable>
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
    width: 150,
    backgroundColor: '#0B2239',
    borderRadius: 50,
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