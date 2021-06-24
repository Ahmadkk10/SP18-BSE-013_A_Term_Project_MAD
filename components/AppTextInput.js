import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialIcons name={icon} size={25} style={styles.icons} />}
            <TextInput style={styles.textInput} {...otherProps}/>

        </View>
 
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey",
        borderRadius: 25,
        flexDirection: 'row',
        width:"100%",
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        color:"black",
        fontSize:18,
        fontFamily: Platform.OS === "android"? "Roboto" : "Avenir"
    },

    icons: {
        marginRight:11,
    }

})
export default AppTextInput;