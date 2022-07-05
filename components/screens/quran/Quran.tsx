import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
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
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#f1faf9'
  },
  titleView: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 2,
    padding: 5,
    backgroundColor: '#0276ff',
    borderRadius: 5
  }
});

export default Quran