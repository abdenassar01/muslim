import { useEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const Home = ({ navigation }: any) => {

  useEffect(()=> {
    navigation.setOptions({
      title: "Muslim", 
      headerStyle: styles.header, 
      headerTitleStyle:{
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
        fontStyle: 'italic' 
      }
    });
  }, [])

  return (
    <View style={ styles.container }>
      <Text style={ styles.heading }>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</Text>
      <Text>what would you like to see?</Text>
      <View style={ styles.butons }>
        <Pressable onPress={ () => navigation.navigate('Quran') } style={ styles.button }>
          <Text style={styles.text}>القرآن الکریم</Text>
        </Pressable>
        <Pressable onPress={ () => navigation.navigate('Dua') } style={ styles.button }>
          <Text style={styles.text}>دعاء</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcebfc'
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
  button: {
    marginVertical: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#0276ff',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17
  },
  butons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#0276ff',
  }
})

export default Home