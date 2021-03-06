import React from 'react';
import { StyleSheet,  Text,  TouchableOpacity } from 'react-native';
import colors from "../components/colors";


function AppButton({title, onPress, color="primary"}) {
    return (
      <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>  
          <Text style={styles.text}>{title}</Text>
      </TouchableOpacity> 

    );
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },

    text: {
        color: "white",
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight:'bold',
    }
})

export default AppButton;