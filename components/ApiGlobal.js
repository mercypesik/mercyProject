import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class ApiGlobal extends React.Component{
    constructor(){
        super();
        this.state = {
            apiIndo: [],
            positif: '',
            sembuh: '',
            meninggal: '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({positif: json.confirmed.value})
        this.setState({sembuh: json.recovered.value})
        this.setState({meninggal: json.deaths.value})
    }
   
    render(){
        return (
                   <View style={styles.container}>
                   <View style={styles.box1}>
                       <Text style={styles.text}> Positif {this.state.positif}</Text>
                   </View>
                   <View style={styles.box2}>
                       <Text style={styles.text}> Sembuh {this.state.sembuh}</Text>
                   </View>
                   <View style={styles.box3}>
                   <Text style={styles.text}> Meninggal {this.state.meninggal}</Text>
                   </View>
               </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        flexDirection: 'row',
        borderRadius: 15,
        justifyContent: 'space-evenly'
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '200'
    },
    box1: {
        width: 100,
        height: 90,
        borderRadius: 15,
        marginLeft:10,
        backgroundColor: 'yellow'
    },
    box2: {
        width: 100,
        height: 90,
        borderRadius: 15,
        marginLeft:10,
        backgroundColor: 'lime'
    },
    box3: {
        width: 100,
        height: 90,
        borderRadius: 15,
        marginLeft:10,
        backgroundColor: 'red'
    },
    
})

export default ApiGlobal;