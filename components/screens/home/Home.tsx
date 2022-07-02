import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import instance from '../../../axios/axios';
import requests from '../../../axios/requests';
import { useQuery } from 'react-query';
import React from 'react'
 
// const renderItem = (item) => {

// }

// const Data = [

// ]



const Home = () => {
  return (
    <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        {/* <FlatList
          data={ Data }
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> */}
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home