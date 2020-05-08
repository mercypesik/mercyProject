import React from 'react';
import { View, Text, Image} from 'react-native';

const GlobalHeader = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>

            <Text style = {textStyle}>            Global             </Text>
            <Image
            />
        </View>
    );
};


const styles = {
    viewStyle: {
        height: 55,
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 40,
    }
}
export default GlobalHeader;