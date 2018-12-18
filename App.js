import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import Button from 'apsl-react-native-button'
import CountdownCircle from 'react-native-countdown-circle'
// import CountDown from './components/CountDown'

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container} >
        <Text style={{color : 'red', marginTop : 160}}>Lorem Ricksum : dont come at me like a little ***** ass motherf*ucker</Text>
        <View style={styles.cssButton}>
        <View style={styles.trucB}>
        <Button 
        title="TEST"
        style={{borderRadius : 20}}>Alezan</Button>
        </View>
        <View style={styles.trucB}>
        <Button 
        title="TEST"
        style={{borderRadius : 20}}>Noire</Button>
        </View>
        <View style={styles.trucB}>
        <Button 
        title="TEST"
        style={{borderRadius : 20}}>Baie</Button>
        </View>
        <View style={styles.trucB}>
        <Button 
        title="TEST"
        style={{borderRadius : 20}}>Palomino</Button>
        </View>
       
        </View>
        <View style={styles.trucC}>
        <CountdownCircle 
        second={10} 
        radius={30}
        borderWidth={8}
        color="#0c0c0c"
        bgColor="#fff"
        textStyle={{ fontSize : 20 }}
        onTimeElapsed={() => alert('Ecoute : KING - Only U')}
        />
        </View>
        <View>
          <Button 
          title="TEST"
          style={{borderRadius : 20,
                  width : 130,
                  borderColor : 'yellow',
                  position : 'absolute',
                  top : 300,
                  }}>Valider</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position : 'absolute',
    top : 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cssButton: {
    position : 'absolute',
    top : 230,
    borderRadius: 10
  },
  trucB : {
    marginBottom : 10,
    width: 300,
    borderRadius: 50
  },
  trucC: {
    position: 'absolute',
    top : 480,
    left : 260
  }
});
