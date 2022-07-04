import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import instance from '../../../axios/axios';
import { useQuery } from 'react-query';
import React from 'react';
import Loading from '../../loading/Loading';
 

const Home = ({ navigation }) => {

const { data, isFetching, error } = useQuery("getAllSurah", async () => {
  const response = await instance.get('/surah');
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
  title: surah.name,
  englishTitle: surah.englishName
}))


const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={ styles.button }
      onPress={ () => navigation.navigate('Surah', { id: item.id }) }
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

export default Home