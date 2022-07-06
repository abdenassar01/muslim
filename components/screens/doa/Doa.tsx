import { View, Text, StyleSheet, Pressable } from 'react-native'

const Doa = ({ navigation }: any) => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.heading }>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</Text>
        <View style={ styles.buttonWrapper }>
            <Pressable onPress={ () => navigation.navigate('DuaDetal', { type: 's' }) } style={ styles.button }>
                <Text style={styles.text}>ادعية الصباح</Text>
            </Pressable>
            <Pressable onPress={ () => navigation.navigate('DuaDetal', { type: 'm' }) } style={ styles.button }>
                <Text style={styles.text}>ادعية المساء</Text>
            </Pressable>
            <Pressable onPress={ () => navigation.navigate('Quran') } style={ styles.button }>
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
        alignItems: 'center'
    },
    heading: {
        fontSize: 24
    },
    text: {
        color: '#fff',
        fontSize: 18
    },
    buttonWrapper: {
        marginTop: 20,
    },
    button: {
        marginVertical: 5,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#0276ff',
        borderRadius: 5,
    }
})

export default Doa