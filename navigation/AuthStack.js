import  React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboradingUI from '../Screens/OnboardingUI';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const[isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
    if(value === null){
      AsyncStorage.setItem('alreadyLaunched', 'true');
      setIsFirstLaunch(true);
    } else {
      setIsFirstLaunch(false);
    }  
    });
  }, []);

  if( isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return(
      <Stack.Navigator initialRouteName={routeName}>
          <Stack.Screen
            name = "OnboradingScreen"
            component = {OnboradingUI}
            options = {{Header: () => null}}
          />
          <Stack.Screen
            name = "Login"
            component = {LoginScreen}
            options = {{Header: () => null}}
          />
          <Stack.Screen
            name = "Signup"
            component = {SignupScreen}
            options = {({navigation}) => ({
              title: ' ',
              headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0
              },
              headerLeft: () => (
                <View>
                  <FontAwesome
                    name='long-arrow-left'
                    size={24}
                    backgroundColor='#f9fafd'
                    color='#333'
                    onPress={() => navigation.navigate('Login')}
                  />
                </View>
              )
            })}
          />
      </Stack.Navigator>
  );
};
export default AuthStack;