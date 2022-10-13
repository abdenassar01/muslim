import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { QueryClientProvider, QueryClient } from 'react-query'; 
import Loading from './components/loading/Loading';
import Azkar from './components/screens/Azkar/Azkar';
import Doa from './components/screens/doa/Doa';
import DoaDetails from './components/screens/doa_detail/DoaDetails';
import Error from './components/screens/error/Error';

import Home from './components/screens/home/Home';
import Quran from './components/screens/quran/Quran';
import Roqya from './components/screens/roqya/Roqya';
import Surah from './components/screens/surah/Surah';

const Stack = createNativeStackNavigator();
const client = new QueryClient();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Amiri': require('./assets/fonts/Amiri-Regular.ttf'),
  });

  return fontsLoaded ? (
   <NavigationContainer>
    <QueryClientProvider client={ client }>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Quran' component={ Quran } />
        <Stack.Screen name='Dua' component={ Doa } />
        <Stack.Screen name='DuaDetal' component={ DoaDetails } />
        <Stack.Screen name='Surah' component={ Surah } />
        <Stack.Screen name='Roqya' component={ Roqya } />
        <Stack.Screen name='Azkar' component={ Azkar } />
        <Stack.Screen name='Error' component={ Error } />
      </Stack.Navigator>
    </QueryClientProvider>
   </NavigationContainer>
  ) : <Loading size={ 50 } />;
}