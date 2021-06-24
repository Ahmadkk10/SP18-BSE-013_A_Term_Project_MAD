import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button,  Image, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import Features from '../screens/Features';
import Constants from 'expo-constants';
import colors from "../components/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewCard from "../components/NewCard";
import TopCard from '../components/TopCard';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';




function Account({navigation}) {
    return (

<ScrollView>
<Animatable.View style={styles.img1} animation ="bounceInDown">

    
    <Animatable.View style={styles.container} animation ="zoomIn">   
  
  <Animatable.View style={styles.card} animation ="zoomIn">
           <MaterialCommunityIcons style={styles.tex3} name='account' >
           <Text style={styles.tex1} > Hello, Welcome to Shopify !</Text>
           </MaterialCommunityIcons>
        <Animatable.View style={styles.container8} animation ="zoomIn">
            <Button style={styles.btn} title="Login/Sign up"  onPress={() => navigation.navigate("Login")}/>
        </Animatable.View>
     
    </Animatable.View>

    <Animatable.View style={styles.card2} animation ="zoomIn">
    <Text style={styles.tex1}>My Orders</Text>
     
     <Animatable.View style={styles.containere} animation ="zoomIn"> 
     <TouchableOpacity onPress={() => navigation.navigate("Login")}>  
         <Image style={styles.logos} source={require("../assets/pay.png")} />
         <Text style={styles.titles} >To Pay</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("Cart")}>        
         <Image style={styles.logos} source={require("../assets/ship.png")}/>
         <Text style={styles.titles} >To Ship</Text>
     </TouchableOpacity>   
     <TouchableOpacity mode="modal" onPress={() => navigation.navigate("Login")}>    
         <Image style={styles.logos} source={require("../assets/receive.png")} />
         <Text style={styles.titles} >To Receive</Text>
     </TouchableOpacity>   
     <TouchableOpacity onPress={() => navigation.navigate("Message")}>        
         <Image style={styles.logos} source={require("../assets/review.png")}/>
         <Text style={styles.titles} >To Review</Text>
     </TouchableOpacity> 
     </Animatable.View>    
     
     <Animatable.View style={styles.containere1} animation ="zoomIn"> 
     <TouchableOpacity onPress={() => navigation.navigate("Home")}>  
         <Image style={styles.logos} source={require("../assets/return.png")} />
         <Text style={styles.titles} >My Returns</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("Cart")}>        
         <Image style={styles.logos1} source={require("../assets/cancel.png")}/>
         <Text style={styles.titles1} >My Cancellations</Text>
          </TouchableOpacity>   
       </Animatable.View>    
    </Animatable.View>


    <Animatable.View style={styles.card4} animation ="zoomIn">
    <Animatable.View style={styles.containere5} animation ="zoomIn"> 
     <TouchableOpacity onPress={() => navigation.navigate("Login")}>  
         <Image style={styles.logos3} source={require("../assets/wallet.png")} />
         <Text style={styles.titles2} >Enjoy Shopify Wallet !</Text>
        </TouchableOpacity>
      </Animatable.View>
    </Animatable.View>


    <Animatable.View style={styles.card3}  animation ="zoomIn">
    <Text style={styles.tex1}>My Service</Text>
    <Animatable.View style={styles.containere} animation ="zoomIn"> 
     <TouchableOpacity onPress={() => navigation.navigate("Message")}>  
         <Image style={styles.logos} source={require("../assets/notification.png")} />
         <Text style={styles.titles} >Messages</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("Message")}>        
         <Image style={styles.logos} source={require("../assets/review.png")}/>
         <Text style={styles.titles} >My Review</Text>
     </TouchableOpacity>   
     <TouchableOpacity mode="modal" onPress={() => navigation.navigate("Login")}>    
         <Image style={styles.logos} source={require("../assets/payment.png")} />
         <Text style={styles.titles} >Payment</Text>
     </TouchableOpacity>   
     <TouchableOpacity onPress={() => navigation.navigate("Account")}>        
         <Image style={styles.logos} source={require("../assets/help.png")}/>
         <Text style={styles.titles} >Help</Text>
     </TouchableOpacity> 
     </Animatable.View>    
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

    img1: {
        width:"100%",
        height:"auto",
        borderRadius:50,
        paddingTop: Constants.statusBarHeight,
      
    },


    card: {
        backgroundColor: "pink",
        margin: 11,
        overflow:'hidden',
        width: "94%",
        height: 130,
        shadowColor: "grey",
        shadowOpacity: 8,
        shadowRadius: 29,
        shadowOffset: {
          height: 8,
          width: 8
        }
    
    },
    

    card2: {
        backgroundColor: "white",
        margin: 11,
        overflow:'hidden',
        width: "94%",
        height: 200,
        shadowColor: "grey",
        shadowOpacity: 8,
        shadowRadius: 29,
        shadowOffset: {
          height: 8,
          width: 8
        }
    
    },


    card3: {
        backgroundColor: "white",
        margin: 11,
        overflow:'hidden',
        width: "94%",
        height: 120,
        shadowColor: "grey",
        shadowOpacity: 8,
        shadowRadius: 29,
        shadowOffset: {
          height: 8,
          width: 8
        }
    
    },


    card4: {
        backgroundColor: "pink",
        margin: 11,
        overflow:'hidden',
        width: "94%",
        height: 130,
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
       marginLeft: 12,
       
       borderRadius: 25, 
    },

    logos3: {
        width: 80,
        height: 80,
        marginTop: 20,
        marginLeft: 138,
        
     },


    logos1: {
        width: 50,
        height: 50,
        marginRight: 34,
        marginLeft: 20,
        
        borderRadius: 25, 
     },

    containere: {
     flexDirection:"row"
    },

    containere1: {
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 18,
     },

    titles: {

       marginRight: 20,
        alignSelf:"center",
        fontWeight: "bold",
        fontSize: 12,        

    },
    

    
    titles2: {
        marginRight: 20,
         alignSelf:"center",
         fontWeight: "bold",
         fontSize: 18,        
 
     },


    titles1: {

        marginRight: 28,
         alignSelf:"center",
         fontWeight: "bold",
         fontSize: 12,        
 
     },

    img: {
        width: "100%",
        height: 130,
    },
    
    tex1: {
        fontSize:14,
        padding:6,
        fontWeight: "bold"
    },


    tex3: {
        fontSize: 30,
        paddingRight: 25,
        fontWeight: "500",
    }, 


    container8: {
        paddingTop:30,
        justifyContent:'center',
        alignItems:'center',
      },


      container5: {
        paddingTop:30,
        justifyContent:'center',
        alignItems:'center',
      },


      btn: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        fontWeight:"bold",
      
    },

})

export default Account;