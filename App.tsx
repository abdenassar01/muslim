import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider, QueryClient } from 'react-query'; 
import Doa from './components/screens/doa/Doa';
import DoaDetails from './components/screens/doa_detail/DoaDetails';

import Home from './components/screens/home/Home';
import Quran from './components/screens/quran/Quran';
import Surah from './components/screens/surah/Surah';

const Stack = createNativeStackNavigator();
const client = new QueryClient();

export default function App() {
  return (
   <NavigationContainer>
    <QueryClientProvider client={ client }>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Quran' component={ Quran } />
        <Stack.Screen name='Dua' component={ Doa } />
        <Stack.Screen name='DuaDetal' component={ DoaDetails } />
        <Stack.Screen name='Surah' component={ Surah } />
      </Stack.Navigator>
    </QueryClientProvider>
   </NavigationContainer>
  );
}