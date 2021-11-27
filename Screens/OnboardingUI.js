import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from 'react-native-onboarding-swiper';

const Dots =({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return(
      <View
        style={{width:5,
                marginHorizontal:3,
                backgroundColor
        }}
      />
  );
}

const Skip = ({...props}) => (
  <TouchableOpacity
  style={{marginHorizontal:10}}
  {...props}
>
  <Text style={{fontSize:16}}>Skip</Text>
</TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
  >
    <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
  >
    <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);

const OnboradingUI = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#0093E9',
            image: <Image  source={require('../assets/OBU1.png')}/>,
            title: <OTOS/>,
            subtitle: '',  
          },
          {
            backgroundColor: '#80D0C7',
            image: <Image  source={require('../assets/OBU2.png')}/>,
            title: <CWFT/>,
            subtitle: <CWFST/>,
          },
          {
            backgroundColor: 'white',
            image: <Image  source={require('../assets/OBU3.png')}/>,
            title: <WCU/>,
            subtitle: '',
          }, 
        ]}
      />
    );
};

const OTOS = () => (
  <Text style={styles.text}>
    One Teacher{"\n"}{"\n"}One Student
  </Text> 
);

const CWFT = () => (
  <Text style={styles.text}>Classes We Offer!!!</Text>
);

const CWFST = () => (
  <Text
  style={{fontSize:22, fontWeight:"bold" ,color:"#000000"}}
  >
    • Grade 6 - Grade 10{"\n"}
    • Grade 11 Science{"\n"}
    • Grade 11 Commerce{"\n"}
    • Grade 11 Humanities{"\n"}
    • Grade 12 Science{"\n"}
    • Grade 12 Commerce{"\n"}
    • Grade 12 Humanities
  </Text>
);

const WCU = () => (
  <Image source={require('../assets/WCU1.png')}/>
);

export default OnboradingUI

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: "contain",
    },
    text: {
      color: "white",
      fontSize: 33,
      lineHeight: 43,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
})
