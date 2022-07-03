import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import React from 'react';
import instance from '../../../axios/axios';

const Surah = ({ route, navigation }: any) => {

  const { id } = route.params;

  const { data } = useQuery("surahDetails", async () => {
    const response = await instance.get(`/surah/${id}`);
    return response?.data.data
  })

  navigation.setOptions({ title: data?.name })



  type Sora = {
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
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.surah }>
        {
          data?.ayahs.map((item:Sora) => (
            <View key={item.number}>
              <Text  
                style={ styles.text } 
              >
                {item.text}
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
    backgroundColor: '#004d49',
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
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  ayah: {
    backgroundColor: '#5b50f7',
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 50,
    padding: 5,
    textAlign: 'center',
    marginHorizontal: 150
  }
});

export default Surah