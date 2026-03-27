import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import AddEditScreen from './src/screens/AddEditScreen.js';
import { View } from 'react-native-web';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
      <Text>ASDLKJ</Text>
    </View>
  );
}