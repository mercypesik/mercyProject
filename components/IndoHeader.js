import React from 'react';
import { View, Text, Image } from 'react-native';

const IndoHeader = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>

            <Text style = {textStyle}>          Indonesia          </Text>
            <Text style = {textStyle}>   #Stay Safe Guys   </Text>
            <Image
            />
        </View>
    );
};

const styles = {
    viewStyle: {
        height: 60,
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 40,
    }
}
export default IndoHeader;