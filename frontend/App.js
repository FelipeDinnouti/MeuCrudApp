import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddEditScreen from './src/screens/AddEditScreen';
import { View } from 'react-native-web';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="HomeScreen"
        >

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddEditScreen" component={AddEditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <View>
        <Text>"WJKAHSFkjh</Text>
      </View>
    </GestureHandlerRootView>
  );
}