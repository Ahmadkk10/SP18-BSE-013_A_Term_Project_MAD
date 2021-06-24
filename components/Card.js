import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function Card({image,des,price, onPress}) {
    return (
      <TouchableOpacity>  
        <View style={styles.card} onPress={onPress}>
        <TouchableOpacity onPress={onPress}>     
          <Image style={styles.img} source={image} onPress={onPress}/>
        </TouchableOpacity>
        <TouchableOpacity>     
          <Text style={styles.tex1} onPress={onPress}>{des}</Text>    
        </TouchableOpacity>
        <TouchableOpacity>   
          <Text  style={styles.tex2} onPress={onPress}>{price} 
          <MaterialCommunityIcons style={styles.tex3} name='cart' onPress={onPress} />
           </Text>
           </TouchableOpacity>  
          </View>
          </TouchableOpacity>
     
    

    );
}

const styles = StyleSheet.create({
card: {
    borderRadius: 15,
    backgroundColor: 'pink',
    marginBottom: 10,
    marginRight:45,
    marginLeft: 10,
    overflow:'hidden',
    width: 160,
    height: 310,
    shadowColor: "grey",
    shadowOpacity: 8,
    shadowRadius: 29,
    shadowOffset: {
      height: 8,
      width: 8
    }

},



img: {
    width: "100%",
    height: 200,
},

tex1: {
    fontSize:12,
    padding:6,
    fontWeight: "bold"
},

tex2: {
    fontSize:15,
    padding: 10,
    fontWeight: "500",
},
tex3: {
    fontSize: 20,
    padding: 10,
    marginLeft:55,
    fontWeight: "500",
},  
})

export default Card;