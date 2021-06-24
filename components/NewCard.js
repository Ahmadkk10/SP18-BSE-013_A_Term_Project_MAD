import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


function NewCard({logo,title,image,des, onPress}) {
    return (

        <View style={styles.card}>
         <View style={styles.container}>  
       <TouchableOpacity onPress={onPress}>  
           <Image style={styles.logos} source={logo} />
       </TouchableOpacity>
       <TouchableOpacity>
           <Text style={styles.titles} onPress={onPress}>{title}</Text> 
        </TouchableOpacity>
         </View>
         <TouchableOpacity onPress={onPress}>   
           <Image style={styles.img} source={image} />
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.tex1} onPress={onPress}>{des}</Text>    
         </TouchableOpacity> 
          </View>
     
    );
}



const styles = StyleSheet.create({
    card: {
        borderRadius: 13,
        backgroundColor: 'white',
        margin: 11,
        overflow:'hidden',
        width: "94%",
        height: "auto",
        shadowColor: "grey",
        shadowOpacity: 8,
        shadowRadius: 29,
        shadowOffset: {
          height: 8,
          width: 8
        }
    
    },
    
    logos: {
       width: 60,
       height: 60,
       borderRadius: 30, 
    },

    container: {
      flexDirection:"row"
    },

    titles: {
        marginRight:40,
        padding:10,
        alignSelf:"center",
        fontWeight: "bold",
        fontSize: 15,        

    },
    
    img: {
        width: "100%",
        height: 110,
    },
    
    tex1: {
        fontSize:15,
        padding:6,
        fontWeight: "bold"
    },
    
      
})
export default NewCard;