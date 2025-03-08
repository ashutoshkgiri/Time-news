
import { StyleSheet, View } from "react-native"
import LottieView from "lottie-react-native"
import { useEffect } from "react";

export const SplashScreen=({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Home");
        },4000)
    },[]);
    //dependency list

    return (
    
      <View style={styles.container}>
             <LottieView
                 source={require('../assets/lottie.json')}
                 autoPlay
                 loop
                 style={styles.SplashCard}
             />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SplashCard:{
     width:300,
     height:300
  }
});