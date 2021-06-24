import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import Features from '../screens/Features';
import Constants from 'expo-constants';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewCard from "../components/NewCard";
import TopCard from '../components/TopCard';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';




function Message({navigation}) {
    return (

<ScrollView>
<Animatable.View style={styles.img1} animation ="bounceInDown">

    
    <Animatable.View style={styles.container} animation ="zoomIn">   
  
<Animatable.View style={styles.card} animation ="zoomIn">
           <Text style={styles.tex1}>Messages</Text>
     
              <Animatable.View style={styles.containere} animation ="zoomIn"> 
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>  
                  <Image style={styles.logos} source={require("../assets/notification.png")} />
                  <Text style={styles.titles} >Chats</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>        
                  <Image style={styles.logos} source={require("../assets/notification.png")}/>
                  <Text style={styles.titles} >Orders</Text>
              </TouchableOpacity>   
              <TouchableOpacity mode="modal" onPress={() => navigation.navigate("Message")}>    
                  <Image style={styles.logos} source={require("../assets/notification.png")} />
                  <Text style={styles.titles} >Notifications</Text>
              </TouchableOpacity>   
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>        
                  <Image style={styles.logos} source={require("../assets/notification.png")}/>
                  <Text style={styles.titles} >Promos</Text>
              </TouchableOpacity> 
              </Animatable.View>    
             
        </Animatable.View>

      <Animatable.View style={styles.card2} animation ="zoomIn">
         <View style={styles.container2}>  
       <TouchableOpacity  onPress={() => navigation.navigate("Home")}>  
           <Image style={styles.logos2} source={require("../assets/logo.jpg")} />
       </TouchableOpacity>
       <TouchableOpacity>
           <Text style={styles.titles2}  onPress={() => navigation.navigate("Home")}>Wah!! kya offer hai.</Text> 
        </TouchableOpacity>
         </View>
         <TouchableOpacity  onPress={() => navigation.navigate("Home")}>   
           <Image style={styles.img2} source={require("../assets/cover.jpg")} />
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.tex12}  onPress={() => navigation.navigate("Home")}>Ramzan super Grocery Sales offer at the best discounted price. Limited time offer!!!!!!!</Text>    
         </TouchableOpacity> 
          </Animatable.View>


          <Animatable.View style={styles.card2} animation ="zoomIn">
         <View style={styles.container2}>  
       <TouchableOpacity  onPress={() => navigation.navigate("Home")}>  
           <Image style={styles.logos2} source={require("../assets/logo.jpg")} />
       </TouchableOpacity>
       <TouchableOpacity>
           <Text style={styles.titles2}  onPress={() => navigation.navigate("Home")}>Wah!! kya offer hai. Abhi order kro!!!!</Text> 
        </TouchableOpacity>
         </View>
         <TouchableOpacity  onPress={() => navigation.navigate("Home")}>   
           <Image style={styles.img2} source={require("../assets/banner.jpg")} />
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.tex12}  onPress={() => navigation.navigate("Home")}>Ramzan super Grocery Sales offer at the best discounted price. Limited time offer!!!!!!!</Text>    
         </TouchableOpacity> 
          </Animatable.View>



          <Animatable.View style={styles.card2} animation ="zoomIn">
         <View style={styles.container2}>  
       <TouchableOpacity  onPress={() => navigation.navigate("Home")}>  
           <Image style={styles.logos2} source={require("../assets/logo.jpg")} />
       </TouchableOpacity>
       <TouchableOpacity>
           <Text style={styles.titles2}  onPress={() => navigation.navigate("Home")}>Wah!! kya offer hai. Abhi order kro!!!!</Text> 
        </TouchableOpacity>
         </View>
         <TouchableOpacity  onPress={() => navigation.navigate("Home")}>   
           <Image style={styles.img2} source={require("../assets/cover.jpg")} />
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.tex12}  onPress={() => navigation.navigate("Home")}>Ramzan super Grocery Sales offer at the best discounted price. Limited time offer!!!!!!!</Text>    
         </TouchableOpacity> 
          </Animatable.View>


          <Animatable.View style={styles.card2} animation ="zoomIn">
         <View style={styles.container2}>  
       <TouchableOpacity  onPress={() => navigation.navigate("Home")}>  
           <Image style={styles.logos2} source={require("../assets/logo.jpg")} />
       </TouchableOpacity>
       <TouchableOpacity>
           <Text style={styles.titles2}  onPress={() => navigation.navigate("Home")}>Wah!! kya offer hai. Abhi order kro!!!!</Text> 
        </TouchableOpacity>
         </View>
         <TouchableOpacity  onPress={() => navigation.navigate("Home")}>   
           <Image style={styles.img2} source={require("../assets/banner.jpg")} />
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={styles.tex12}  onPress={() => navigation.navigate("Home")}>Ramzan super Grocery Sales offer at the best discounted price. Limited time offer!!!!!!!</Text>    
         </TouchableOpacity> 
          </Animatable.View>


    </Animatable.View> 

</Animatable.View>
</ScrollView>
    );
}



const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor: "black",
        width:"100%"
        },


    container2: {
        flexDirection:"row"
    },    

    img1: {
        width:"100%",
        height:"auto",
        borderRadius:50,
        paddingTop: Constants.statusBarHeight,
      
    },


    card: {
        backgroundColor: 'white',
        margin: 11,
        overflow:'hidden',
        width: "95%",
        height: "auto",
        shadowColor: "grey",
        shadowOpacity: 8,
        shadowRadius: 29,
        shadowOffset: {
          height: 8,
          width: 8
        }
    
    },


    card2: {
        borderRadius: 13,
        backgroundColor: 'white',
        margin: 11,
        overflow:'hidden',
        width: "95%",
        height: "auto",
        shadowColor: "grey",
        shadowOpacity: 8,
        shadowRadius: 29,
        shadowOffset: {
          height: 8,
          width: 8
        }
    
    },

    logos2: {
        width: 60,
        height: 60,
        borderRadius: 30, 
    },

    img2: {
        width: "100%",
        height: 110,
    },
    
    titles2: {
        marginRight:40,
        padding:10,
        alignSelf:"center",
        fontWeight: "bold",
        fontSize: 15, 
    },


    tex12: {
        fontSize:15,
        padding:6,
        fontWeight: "bold"
    },

    logos: {
       width: 50,
       height: 50,
       marginRight: 30,
       marginLeft: 10,
       
       borderRadius: 25, 
    },

    containere: {
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

export default Message;