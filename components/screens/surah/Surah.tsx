import axios from 'axios';
import { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useQuery } from 'react-query';

import Loading from '../../loading/Loading';

const Surah = ({ route, navigation }: any) => {

  const { index, nameAr } = route.params;

  const { data, isFetching, error } = useQuery("surahDetails", async () => {
    const response = await axios.get(`https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${ index }.json`);
    return response?.data
  })

  useEffect(() => {
    navigation.setOptions({ 
        title: " سورة" + nameAr , 
        headerTitleStyle:{
            color: '#0d82f0',
            fontSize: 24,
            fontWeight: '700',
        },
        headerTintColor: '#0d82f0',
        headerLeft: () => (
          <TouchableOpacity style={styles.headerBtn} onPress={ () => navigation.goBack() } >
            <Image style={styles.icon} source={require('../../../assets/back.png')} />
          </TouchableOpacity>
        )
     });
  },[])

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
                <>
                  { item } &nbsp;{ "\u06DD" }&nbsp;
                </>
              ))
            }
          </Text>
        }
        <View style={styles.spacer}></View>
      </ScrollView> 
      <View style={styles.bottomBar}>
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
    backgroundColor: '#0276ff',
    width: '100%',
    height: '85%',
    alignContent: 'center',
    paddingBottom: 10,
    borderWidth: 2,
    borderColor: '#ffd518',
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
    paddingHorizontal: 10
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
    backgroundColor: '#0276ff',
    flexDirection: 'row',
    color: '#000000',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 5,
    borderWidth: 2,
    borderColor: '#ffd518',
    borderRadius: 10
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
  }
});

export default Surah