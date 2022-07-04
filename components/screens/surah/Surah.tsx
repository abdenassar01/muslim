import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import React from 'react';
import instance from '../../../axios/axios';
import Loading from '../../loading/Loading';

const Surah = ({ route, navigation }: any) => {

  const { id } = route.params;

  const { data, isFetching, error } = useQuery("surahDetails", async () => {
    const response = await instance.get(`/surah/${id}`);
    return response?.data.data
  })

  navigation.setOptions({ title: data?.name })

  type Ayah = {
    number: number,
    text: string,
    numberInSurah: number,
    juz: number,
    manzil: number,
    page: number,
    ruku: number,
    hizbQuarter: number,
    sajda: boolean
  }

  if (isFetching) return <Loading size={70} />
  
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.surah }>
        {
          data?.ayahs.map((item:Ayah) => (
            <View key={item.number}>
              <Text  
                style={ styles.text } 
              >
                { item.text }
              </Text>  
              <Text style={ styles.ayah } >&nbsp;{ item.numberInSurah }&nbsp;</Text>
            </View> 
          ))
        }
      </ScrollView> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  surah: {
    backgroundColor: '#0276ff',
    width: '100%',
    borderRadius: 5,
    alignContent: 'center',
    paddingBottom: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  ayah: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    color: '#070606',
    borderRadius: 50,
    padding: 5,
    textAlign: 'center',
    marginHorizontal: 130,
    marginVertical: 10
  }
});

export default Surah