import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { useQuery } from 'react-query';
import { useFonts } from 'expo-font';

import Loading from '../../loading/Loading';
import { Sound } from 'expo-av/build/Audio';

const Surah = ({ route, navigation }: any) => {

  const [fontsLoaded] = useFonts({
    'Amiri': require('../../../assets/fonts/Amiri-Regular.ttf'),
  });

  const { index, nameAr } = route.params;
  const [ audio, setAudio ] = useState<Sound>()
  const [ isPlayed, setPlayed ] = useState<boolean>(false)

  const { data, isFetching, error } = useQuery("surahDetails", async () => {
    const response = await axios.get(`https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${ index }.json`);
    return response?.data
  })

  async function playSurah() {
    try{
      const { sound } = await Audio.Sound.createAsync({
        uri: `https://download.quranicaudio.com/quran/sa3d_al-ghaamidi/complete/${ index }.mp3`
      }, {
        shouldPlay: true
      })
      setAudio(sound);
      await audio?.playAsync();
    }catch(ex){
      console.log(ex)
    }
  }

  useEffect((): any => {
    navigation.setOptions({
        title: " سورة" + nameAr ,
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
     return audio ?  () => {
      audio.unloadAsync()
    } : undefined
  },[audio])

  if (isFetching) return <Loading size={70} />
  if (error) return <Text>an error accured check your network status</Text>

  const ayahs: string[] = Object.values(data?.verse)

  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.surah }>
        <View style={styles.spacer}></View>
        {
          <Text style={ styles.text } >
            {
              ayahs.map((item:string) => (
                <Text key={ Math.random() } style={ styles.ayahText } >
                  { item } &nbsp;{ "\u06DD" }&nbsp;
                </Text>
              ))
            }
          </Text>
        }
        <View style={styles.spacer}></View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <Pressable onPress={ playSurah } >
          <Text style={ styles.play }>▶</Text>
        </Pressable>
        <Text style={styles.text}> { data?.name } </Text>
        <Text style={styles.text}> { data?.count } </Text>
        <Text style={styles.text}> { nameAr } </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  surah: {
    backgroundColor: '#0B2239',
    width: '100%',
    height: '80%',
    alignContent: 'center',
    paddingBottom: 10,

    borderRadius: 10
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
    paddingHorizontal: 10,
    fontFamily: 'Amiri'
  },
  ayahText: {
    fontFamily: 'Amiri',
    fontSize: 25,
    lineHeight: 50
    // color: "blue"
  },
  ayah: {
    fontWeight: 'bold',
    color: '#ffffff',
    borderRadius: 50,
    padding: 2,
    textAlign: 'center',
    marginHorizontal: 130,
    marginVertical: 5
  },
  bottomBar: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0B2239',
    flexDirection: 'row',
    color: '#0B2239',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 5,
    borderRadius: 50
  },
  headerBtn: {
    marginRight: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'stretch'
  },
  spacer: {
    height: 30
  },
  play: {
    fontSize: 25,
    color: 'white',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 7,
    paddingVertical: 3,
    textAlign: 'center',
  }
});

export default Surah