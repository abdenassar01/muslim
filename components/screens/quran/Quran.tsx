import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from 'react-query';
import React from 'react';
import axios from 'axios';
import Loading from '../../loading/Loading';
 

const Quran = ({ navigation }: any) => {

const { data, isFetching, error } = useQuery("getAllSurah", async () => {
  const response = await axios.get('https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json');
  return response?.data
})

React.useEffect(() => {
  navigation.setOptions({ 
      title: "القرآن الکریم",
      headerTitleStyle:{
          color: '#0B2239',
          fontSize: 24,
          fontWeight: '700',
      },
      headerTintColor: '#0B2239',
      headerLeft: () => (
        <TouchableOpacity style={styles.headerBtn} onPress={ () => navigation.goBack() } >
          <Image style={styles.icon} source={require('../../../assets/back.png')} />
        </TouchableOpacity>
      )
   });
},[])

type El = {
      place: string,
      type: string,
      count: number,
      title: string,
      titleAr: string,
      index: string,
      pages: string,
      juz: [
          {
              index: string,
              verse: {
                  start: string,
                  end: string
              }
          }
      ]
  }

type Surah = {
  id: number,
  title: string,
  englishTitle: string,
  index: number,
}

const list: Surah[] = data?.map((surah: El) => ({
  id: Number(surah.index),
  title: surah.titleAr,
  englishTitle: surah.title,
  index: Number(surah.index)
}))


const renderItem = ({ item }: any) => {
  return (
    <TouchableOpacity
      style={ styles.button }
      onPress={ () => navigation.navigate('Surah', { index: item.index, nameAr: item.title }) }
    > 
    <View style={styles.titleView}>
      <Text style={ styles.text }>{item.englishTitle}</Text>
      <Text style={ styles.text }>{item.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

  if (isFetching) return ( 
   <Loading size={ 50 } /> 
  )

  if (error) return <Text>Error has accured</Text>
 
  return (
    <View style={styles.container}>
        <FlatList
          data={ list }
          renderItem={ renderItem }
          keyExtractor={(item) => item.id}
        />
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    padding: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#f1faf9',
    fontFamily: 'Amiri'
  },
  titleView: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 2,
    paddingHorizontal: 20,
    backgroundColor: '#0B2239',
    borderRadius: 10
  },
  headerBtn: {
    marginRight: 20,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'stretch'
  },
});

export default Quran