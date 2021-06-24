import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

function ListItem({title, image,onPress}) {
    return (
    <View style={styles.container1}>  
     <TouchableOpacity onPress={onPress}>      
        <View style={styles.container} >
            <Image style={styles.image} source={image} />
            <Text style={styles.tex1} onPress={onPress}>{title} </Text>
            
         </View>
     </TouchableOpacity> 

    <TouchableOpacity onPress={onPress}>  
         <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Text style={styles.tex1}>{title}</Text>
            
         </View>
    </TouchableOpacity>
    
    
    <TouchableOpacity onPress={onPress}>
         <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Text style={styles.tex1}>{title}</Text>
            
         </View>
    </TouchableOpacity>    
    
    <TouchableOpacity onPress={onPress}>
       
         <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Text style={styles.tex1}>{title}</Text>
            
         </View>
       
    </TouchableOpacity>     
    </View>

         
    );
}


const styles = StyleSheet.create({
container: {
backgroundColor: 'yellow',
padding: 4,
marginLeft: 10,
flexDirection:'column',
borderWidth: 5,
},

container1: {
    flexDirection: 'row',
    backgroundColor: "pink",
    padding: 10,
    width:"100%",


    
    },
image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
},

tex1: {
fontSize: 10,
fontWeight:"bold",
padding:8,
},

})
export default ListItem;