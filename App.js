import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from './components/Header';
import GlobalHeader from './components/GlobalHeader';
import IndoHeader from './components/IndoHeader';
import ApiGlobal from './components/ApiGlobal';
import ApiIndo from './components/ApiIndo';
const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Header/>
        </View>
        <View style={styles.boxSub}>
            <GlobalHeader/>
            <ApiGlobal/>
        </View>
        <View style={styles.boxSubBody}>
        <IndoHeader/>
        </View>
        <View style={styles.boxBody}>
          <ApiIndo/>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'white',
      alignItems: 'stretch',
      justifyContent: 'space-evenly'
  },
  boxHeader: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSub: {
      flex: 4,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSubBody: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'white'
},
  boxBody: {
      flex: 10
  }
})

export default App;