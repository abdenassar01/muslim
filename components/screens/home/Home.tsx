import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import instance from '../../../axios/axios';
import requests from '../../../axios/requests';
import { useQuery } from 'react-query';
import React from 'react'
 

const Home = ({ navigation }) => {

const { data } = useQuery("getAllSurah", async () => {
  const response = await instance.get(requests.all);
  return response?.data.data
})

type El = {
  number : number,
  name : string,
  englishName : string,
  englishNameTranslation : string,
  numberOfAyahs : number,
  revelationType : string
}

type Surah = {
  id: number,
  title: string
}

const list: Surah[] = data?.map((surah: El) => ({
  id: surah.number,
  title: surah.name
}))

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={ styles.button }
      onPress={ () => navigation.navigate('Surah', { id: item.id }) }
    >
      <Text style={ styles.text }>{item.title}</Text>
    </TouchableOpacity>
  )
}

  return (
    <View style={styles.container}>
        <FlatList
          data={ list }
          renderItem={ renderItem }
          keyExtractor={item => item.id}
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
    fontSize: 20
  }
});

export default Home