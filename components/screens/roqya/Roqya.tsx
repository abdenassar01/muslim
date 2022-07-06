import { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import Loading from '../../loading/Loading';

import axios from 'axios';
import { useQuery } from 'react-query';

const Roqya = ({ navigation }: any) => {

    useEffect(() => {
        navigation.setOptions({ 
            title: "رقية شرعية", 
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

      const { data, isFetching, error } = useQuery("surahDetails", async () => {
        const response = await axios.get(`https://zakroon.com/main/data/roqya_s.json`);
        return response?.data
      })
    
      type Doa = {
        count : string,
        desc : string,
        ref : string,
        zekr : string
      }

    if (isFetching) return <Loading size={70} />
    if (error) return <Text>an error accured check your network status</Text>
  
      
  return (
    <ScrollView style={ styles.container }>
      {
        data?.map((doa:Doa ) => (
          <View key={ doa.zekr } style={styles.zekrCard}>
            <View style={styles.zekr}>
              <Text style={styles.text}>{ doa.zekr }</Text>
            </View>
            <View style={styles.bottomSection}>
              <Text style={styles.desc}>{ doa.desc }</Text>
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
        padding: 15
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
        padding: 10,
        backgroundColor: '#0d82f0',
        marginVertical: 5,
        borderWidth: 2,
        borderColor: '#ffd518',
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
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
        width: '70%'
    },
    count: {
        color: '#ffd518', 
        textAlign: 'center',
        fontSize: 20,
        width: 30,
        height: 30,
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ffd518'
    },
    spacer: {
        height: 20
    }
})

export default Roqya