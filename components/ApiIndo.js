import React,{ Component } from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';


class ApiIndo extends Component{
  constructor(){
    super();
    this.state={
        FullIndo: [],
        refreshing: false
    }
}
renderItem=({item})=>
  <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.box1}><Text>{item.provinsi}</Text></View>
      <View style={styles.box2}><Text>{item.kasusPosi}</Text></View>
      <View style={styles.box3}><Text>{item.kasusSemb}</Text></View>
      <View style={styles.box4}><Text>{item.kasusMeni}</Text></View>
    </View>
  </SafeAreaView>
  
  
onRefresh= () =>{
    this.getDataApi();
}

componentDidMount = () =>{
    this.getDataApi();
}

getDataApi = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
  const FullIndo = await response.json()
  const { data } = await FullIndo
  this.setState({
      FullIndo: {
          Data: await data,
      }
  })
}

render(){
    if (!this.state.FullIndo) {
      
    }
    return (
        <View>
          <View style={styles.covidContainer}>
          <Text styles={styles.text}> Positif :</Text>
              <View style={styles.box2}></View>
              <Text styles={styles.text}> Sembuh :</Text>
              <View style={styles.box3}></View>
              <Text styles={styles.text}> Meninggal :</Text>
              <View style={styles.box4}></View>
          </View>
          <View>
            <FlatList 
                data={this.state.FullIndo.Data}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
          </View>
        </View>

        
        
    )
}
};
export default ApiIndo;

const styles = StyleSheet.create({
  returnContainer: {
    flex: 2,
    flexDirection:'row',
    padding:3,
    borderWidth:1,
    backgroundColor: 'white',
  },
  container: {
    flex: 10,
    flexDirection: 'row',
    padding:1,
    borderWidth:1,
    borderRadius: 15,
    backgroundColor: 'white',
  },
    indoContainer:{
    flexDirection:'row-reverse',
    marginTop:20,
    marginBottom:15
  },
  text:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:28,
    marginTop: 10,
    fontFamily:'sans-serif-light'
  },

  box1:{
    width:170,
    marginBottom:7,
    marginLeft:0,
    height:10
  },
  box2:{
    width: 50,
    height: 20,
    alignSelf: 'center',
    marginLeft:0,
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor:'yellow'
  },
  box3:{
    width:50,
    height:20,
    alignSelf: 'center',
    marginLeft:10,
    marginBottom:5,
    borderRadius: 15,
    backgroundColor:'lime'
  },
  box4:{
    width:50,
    height:20,
    alignSelf: 'center',
    marginLeft:10,
    marginBottom:5,
    borderRadius: 15,
    backgroundColor:'red'
  },

  name:{
    fontSize:15,
    fontWeight: 'bold',
    color: "black",
    alignSelf: 'center',
    margin:10
},
})

 