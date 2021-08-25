import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity,Image,Animated,Keyboard} from 'react-native';
import logo from './assets/logo2.png'

export default function App() {

  const [offset]= useState(new Animated.ValueXY({X: 0, Y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({X: 130, Y: 155}));

  useEffect(()=>{
 
   KeyboardDidShowListener = keyboard.addListener('keyboardDidShow', keyboardDidShow)
   KeyboardDidShowListener = keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 30
    }),
    Animated.timing(opacity,{
      toValue: 1,
      speed: 200,
    })
  ]).start();
  }, []);


function keyboardDidShow(){
  Animated.parallel([
    Animated.timing(logo.x,{
      toValue: 55,
      duration: 100,
    }),
    Animated.timing(logo.y, {
      toValue: 65,
      duration: 100,
    }),
    
  ]).start();
}

function keyboardDidHide(){
  Animated.parallel([
    Animated.timing(logo.x,{
      toValue: 130,
      duration: 100,
    }),
    Animated.timing(logo.y, {
      toValue: 155,
      duration: 100,
    }),
    
  ]).start();
}


  return (
       
         <KeyboardAvoidingView style={styles.container}> 
             <View style={ styles.ContainerLogo}>
                <Animated.Image 
                 
                  source={logo} 
                  style={{
                    width: logo.x,
                    height: logo.y,
                  }}
                />
             </View>

             <Animated.View 
             style={[
               styles.container2,
               {
                 opacity: opacity,
                 transform: [
                   { translateY: offset.y }
                 ]
               }
              ]}
             
             >
                <TextInput 
                   style={styles.input}
                   placeholder="Email"
                   autoCorrect={false}
                   onChange={()=> {}}
                />

                <TextInput 
                   style={styles.input}
                   placeholder="Senha"
                   autoCorrect={false}
                   onChange={()=> {}}
                />

                <TouchableOpacity style={styles.btnSubmit}>
                   <Text style={styles.btnText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                   <Text style={styles.registerText}>Criar conta gratuita!</Text>
                </TouchableOpacity>

             </Animated.View>
         </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   containerLogo:{
    
    flex: 1,
    justifyContent: 'center'
   },

  logo:{
    marginTop: 15,
    width: 250,
    height: 250,
   
  },
  container2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
input:{
    backgroundColor: '#b5f0f7',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 5,
    padding: 10
},
btnSubmit:{
  backgroundColor: '#ff00d9',
  width: '90%',
  height: 45,
  alignContent: 'center',
  alignItems: 'center',
  borderRadius: 15,
  padding: 10
  
},
btnText:{
  color: '#fff',
  fontSize: 18
},
btnRegister:{
  marginTop: 10,
},
registerText:{
  color: '#35aaff'
}



});
