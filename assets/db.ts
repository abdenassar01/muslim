// export const getFont = async () => {
//     try {
//       const value = await AsyncStorage.getItem('fontSize')
//       if(value !== null) {
//         setFontSize(Math.floor(parseInt(value)))
//       }else{
//         storeData("16")
//       }
//     } catch(e) {
//       navigation.navigate('Error');
//     }
//   }

//   const storeData = async (value: string) => {
//     try {
//       await AsyncStorage.setItem('fontSize', value)
//     } catch (e) {
//       navigation.navigate('Error');
//     }
//   }