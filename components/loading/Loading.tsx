import { View, Text } from 'react-native'
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
    size: number
}

const Loading = ({ size }: Props) => {
  return (
    <View>
        <ClipLoader color='#5b50f7' size={ size } />
    </View>
  )
}

export default Loading