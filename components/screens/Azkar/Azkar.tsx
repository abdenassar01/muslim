import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AZKARSALAT } from '../../../assets/AzkarSalat';
import { useRootStore } from '../../../model/root';

const Azkar = ({ navigation }: any) => {

  const root = useRootStore()

  useEffect(() => {
    navigation.setOptions({ 
        title:  "أذكار و أدعية", 
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

  const renderItem = ({ item }: any) => (
          <View style={styles.zekrCard}>
              <View>
                <Text style={styles.desc}>{ item.category }</Text>
              </View>
              <View style={styles.zekr}>
                <Text style={[styles.text, { fontSize: root.fontSize }]}>{ item.zekr }</Text>
              </View>
          </View>
        )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <FlatList
        data={AZKARSALAT}
        renderItem={renderItem}
        keyExtractor={item => (Math.random() * item.id).toString()}
      />
  </SafeAreaView>
  )
}

export default Azkar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  headerBtn: {
    marginTop: 15,
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
    marginVertical: 2,
    borderRadius: 10
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Amiri',
    lineHeight: 40
  },
  zekr: {
    paddingBottom: 20
  },
  desc: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    padding: 5,
    borderColor: '#fff',
  }
})