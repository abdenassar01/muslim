import Slider from '@react-native-community/slider';
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useRootStore } from '../../../model/root';
import { observer } from 'mobx-react-lite';

const Home = observer(({ navigation }: any) => {
  
  const root = useRootStore();

  const [ value, setValue ] = useState<number>()

  const onChange = (value: number) => {
    setValue(value)
    root.setFontSize(Math.floor(value))
  }

  useEffect(()=> {
    setValue(root.fontSize)
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
  }, [ root ])

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

      <View style={{ alignItems: "center"  }}>
        <Text style={{ fontWeight: "bold", color: "#0B2239" }}>Change font size</Text>
        <View style={{ flexDirection: 'row', alignItems: "center", width: "50%" }}>
            <Slider 
              style={{width: "90%", height: 40}}
              minimumValue={12}
              maximumValue={30}
              value={ value }
              thumbTintColor="#0B2239"
              minimumTrackTintColor="#0B2239"
              maximumTrackTintColor="#000000"
              onValueChange={ onChange }
          />
          <Text>{ root.fontSize }</Text>
        </View>
      </View>
    </View>
  )
})

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