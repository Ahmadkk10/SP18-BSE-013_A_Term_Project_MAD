import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';



function TopCard({heading,loges, pic, imag, log, onPress}) {
 
    return (
   
        <View style={styles.card}>
           <Text style={styles.tex1}>{heading}</Text>
     
              <View style={styles.container}> 
              <TouchableOpacity onPress={onPress}>  
                  <Image style={styles.logos} source={loges} />
                  <Text style={styles.titles} >Chats</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPress}>        
                  <Image style={styles.logos} source={pic}/>
                  <Text style={styles.titles} >Orders</Text>
              </TouchableOpacity>   
              <TouchableOpacity onPress={onPress}>    
                  <Image style={styles.logos} source={imag} />
                  <Text style={styles.titles} >Notifications</Text>
              </TouchableOpacity>   
              <TouchableOpacity onPress={onPress}>        
                  <Image style={styles.logos} source={log}/>
                  <Text style={styles.titles} >Promos</Text>
              </TouchableOpacity> 
              </View>    
             
        </View>

        );
    }

const styles = StyleSheet.create({
        card: {
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
           width: 50,
           height: 50,
           marginRight: 30,
           marginLeft: 10,
           
           borderRadius: 25, 
        },
    
        container: {
      flexDirection:"row"
        },
    
        titles: {
 
           marginRight: 20,
            alignSelf:"center",
            fontWeight: "bold",
            fontSize: 12,        
    
        },
        
        img: {
            width: "100%",
            height: 130,
        },
        
        tex1: {
            fontSize:15,
            padding:6,
            fontWeight: "bold"
        },
        
          
    })

export default TopCard;