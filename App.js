import { NavigationContainer } from '@react-navigation/native';


import Routers from './src/routers/routers';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/contexts/auth';
export default function App() {
  return (
    <NavigationContainer> 
        <AuthProvider >
       <Routers />
       <StatusBar style ="auto"/>
       </AuthProvider>
    </NavigationContainer>    
  );
}