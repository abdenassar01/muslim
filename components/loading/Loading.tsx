import { View, Text, StyleSheet } from 'react-native'
import { Circle } from 'react-native-animated-spinkit';

type Props = {
    size: number
}

const Loading = ({ size }: Props) => {
  return (
    <View style={ styles.loader }>
        <Circle color='#0276ff' size={ size } />
        <Text>Please Wait. We are getting it ready for you</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  }
})

export default Loading