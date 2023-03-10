import { View, Text, StyleSheet } from 'react-native'
import { useRootStore } from '../../../../model/root'

type Zekr = {
    zekr: {
        category: string,
        zekr: string
    }
}

export default function RandomZekr({ zekr }: Zekr) {

    const root = useRootStore();

  return (
    <View style={styles.zekrCard}>
        <Text style={[ styles.text, styles.category ]}>{ zekr.category }</Text>
        <Text style={[styles.text, { fontSize: root.fontSize }]}>
            { zekr.zekr }
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    zekrCard: {
        padding: 10,
        width: '95%',
        backgroundColor: '#0B2239',
        marginVertical: 2,
        borderRadius: 5
    },
    text: {
        color: '#fff',
        fontFamily: 'Amiri',
        textAlign: 'center'
    },
    category: {
        fontSize: 12,
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    }
})