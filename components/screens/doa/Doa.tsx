import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";

const Doa = ({ navigation }: any) => {

    useEffect(() => {
        navigation.setOptions({ 
            title: "ادعية ", 
            headerTitleStyle:{
                color: '#0B2239',
                fontFamily: 'Amiri',
                fontSize: 24,
                fontWeight: '200',
            },
            headerTintColor: '#0B2239',
            headerLeft: () => (
              <Pressable style={styles.headerBtn} onPress={ () => navigation.goBack() } >
                <Image style={styles.icon} source={require('../../../assets/back.png')} />
              </Pressable>
            )
         });
      },[])

  return (
    <View style={ styles.container }>
        <StatusBar style="dark"  />
        <Text style={ styles.heading }>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</Text>
        <View style={ styles.buttonWrapper }>
            <Pressable onPress={ () => navigation.navigate('DuaDetal', { type: 's' }) } style={ styles.button }>
                <Text style={styles.text}>ادعية الصباح</Text>
            </Pressable>
            <Pressable onPress={ () => navigation.navigate('DuaDetal', { type: 'm' }) } style={ styles.button }>
                <Text style={styles.text}>ادعية المساء</Text>
            </Pressable>
            <Pressable onPress={ () => navigation.navigate('Roqya') } style={ styles.button }>
                <Text style={styles.text}>رقية شرعية</Text>
            </Pressable>
        </View>  
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 34,
        fontFamily: 'Amiri',
        color: '#0B2239'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Amiri',
        textAlign: 'center',
        marginTop: -5
    },
    buttonWrapper: {
        marginTop: 20,
    },
    button: {
        marginVertical: 5,
        minWidth: 200,
        backgroundColor: '#0B2239',
        borderRadius: 50,
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
})

export default Doa