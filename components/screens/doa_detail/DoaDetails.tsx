import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Loading from '../../loading/Loading';

const DoaDetails = ({ navigation, route }: any) => {

  const { type } = route.params;

  const { data, isFetching, error } = useQuery("surahDetails", async () => {
    const response = await axios.get(`https://zakroon.com/main/data/azkar_${ type }.json`);
    return response?.data
  })

  type Doa = {
    count : string,
    desc : string,
    ref : string,
    zekr : string
  }

  useEffect(() => {
    navigation.setOptions({ 
        title: type === 's' ? "ادعية الصباح" : "ادعية المساء", 
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
  },[])

  if (isFetching) return <Loading size={70} />
  if (error) navigation.navigate('Error');

  return (
    <ScrollView style={ styles.container }>
      {
        data?.map((doa:Doa ) => (
          <View key={ doa.zekr } style={styles.zekrCard}>
            <View style={styles.zekr}>
              <Text style={styles.text}>{ doa.zekr }</Text>
            </View>
            <View style={styles.bottomSection}>
              <Text style={styles.desc}>{ doa?.desc }</Text>
              <Text style={styles.count}>{ doa.count }</Text>
            </View>
          </View>
        ))
      }
      <View style={styles.spacer}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  headerBtn: {
    marginRight: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'stretch'
  },
  zekrCard: {
    padding: 5,
    backgroundColor: '#0B2239',
    marginVertical: 5,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Amiri',
    lineHeight: 40
  },
  zekr: {
    paddingBottom: 20
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  desc: {
    color: 'white',
    width: '80%',
    textAlign: 'center',
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    fontFamily: 'Amiri',
    borderColor: '#fff',
    borderRadius: 10
  },
  count: {
    color: '#fff', 
    textAlign: 'center',
    fontSize: 20,
    width: 30,
    height: 30,
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#fff'
  },
  spacer: {
    height: 20
  }
})

export default DoaDetails