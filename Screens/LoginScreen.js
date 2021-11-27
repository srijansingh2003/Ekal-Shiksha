import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FormButton from '../components/FormButton';
import Forminput from '../components/Forminput';
import Socialbutton from '../components/SocialButton';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.text}>Ekal Shiksha</Text>
            <Forminput
              labelValue={email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              placeholderText='Email'
              iconType='user'
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
            />
            <Forminput
              labelValue={password}
              onChangeText={(userPassword) => setPassword(userPassword)}
              placeholderText='Password'
              iconType='lock'
              secureTextEntry={true}
            />

            <FormButton
              buttonTitle='Sign In'
              onPress={() => {}}
            />

            <TouchableOpacity 
            style={styles.forgotButton} 
            onPress={() => {}}
            >
              <Text style={styles.navButtonText}>Forgot Password ?</Text>
            </TouchableOpacity>

            <Socialbutton
              buttonTitle='Sign In with Google'
              btnType='google'
              color='#de4d41'
              backgroundColor='#f5e7ea'
              onPress={() => {}}
            />

            <Socialbutton
              buttonTitle='Sign In with Facebook'
              btnType='facebook'
              color='#4867aa'
              backgroundColor='#e6eaf4'
              onPress={() => {}}
            />

            <TouchableOpacity 
            style={styles.forgotButton} 
            onPress={() => navigation.navigate('Signup')}
            >
              <Text style={styles.navButtonText}>
                Create a new account
              </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
      text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 30,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5'
      },
    });