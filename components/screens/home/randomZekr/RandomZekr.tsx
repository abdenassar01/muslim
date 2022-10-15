import { View, Text, StyleSheet } from 'react-native'

type Zekr = {
    zekr: {
        category: string,
        zekr: string
    }
}

export default function RandomZekr({ zekr }: Zekr) {
  return (
    <View style={styles.zekrCard}>
        <Text style={[ styles.text, styles.category ]}>{ zekr.category }</Text>
        <Text style={styles.text}>
            { zekr.zekr }
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    zekrCard: {
        padding: 10,
        width: 350,
        backgroundColor: '#0B2239',
        marginVertical: 2,
        borderRadius: 10
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Amiri',
        textAlign: 'center'
    },
    category: {
        fontSize: 12,
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    }
})