import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Loading from '../../loading/Loading';
import { useRootStore } from '../../../model/root';

const DoaDetails = ({ navigation, route }: any) => {

  const { type } = route.params;

  const root = useRootStore();
  
  const { data, isFetching, error } = useQuery("surahDetails", async () => {
    const response = await axios.get(`https://raw.githubusercontent.com/abdenassar01/muslim/main/data/azkar_${ type }.json`);
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
              <Text style={styles.desc}>{ doa?.desc ?  doa?.desc : type === 's' ? "ادعية الصباح" : "ادعية المساء" }</Text>
              <Text style={[styles.text, { fontSize: root.fontSize }]}>{ doa.zekr }</Text>
            </View>
            <View style={styles.bottomSection}>
              <Text style={styles.count}>{ (parseInt(doa.count) > 1) ? `تكرار: ${ doa.count } مرات`  : "تكرار: مرة واحدة" }</Text>
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
    padding: 5,
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
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Amiri',
    lineHeight: 40,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    borderTopColor: "#fff",
    borderTopWidth: 1,
    paddingTop: 10
  },
  zekr: {
    paddingBottom: 20
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 12,
    fontFamily: 'Amiri',
  },
  count: {
    color: '#fff', 
    textAlign: 'center',
    fontFamily: 'Amiri',
    fontSize: 12
  },
  spacer: {
    height: 20
  }
})

export default DoaDetails