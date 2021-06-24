import React, { useState } from 'react';
import { ImageBackground, StyleSheet,ScrollView,Dimensions, View, Image,Text, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import Features from '../screens/Features';
import Constants from 'expo-constants';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import ImageCarousel from "../components/ImageCarousel";
import AuthNavigator from '../navigation/AuthNavigator';

const { width } = Dimensions.get('window'); 


function Home({navigation}) {
 
  const [search, setSearch] = useState();

    return (
      
    <ScrollView>  
       <ImageBackground 
       style={styles.background}
       source={require('../assets/cover.jpg')}>
      
      <SearchBar
        style={styles.searchs}
        placeholder="What are you looking..."
        onChangeText={text => setSearch(text)}
        value={search}
      />


          <Animatable.View style={styles.img1} animation ="bounceInDown">
           <TouchableOpacity>  


           <Animatable.View style={styles.containerq} animation ="zoomIn">

<Animatable.View style={styles.carouselContainer2} animation ="zoomIn">
  <ImageCarousel/> 
</Animatable.View> 
</Animatable.View>
        
               </TouchableOpacity>



               <Animatable.View style={styles.card2} animation ="zoomIn">
    <Text style={styles.tex1}>Features</Text>
     
     <Animatable.View style={styles.containere} animation ="zoomIn"> 
     <TouchableOpacity onPress={() => navigation.navigate("Login")}>  
         <Image style={styles.logos} source={require("../assets/exclusive.png")} />
         <Text style={styles.titles} >Exclusive Products</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("Cart")}>        
         <Image style={styles.logos} source={require("../assets/advancedsearch.png")}/>
         <Text style={styles.titles} >Advanced Search</Text>
     </TouchableOpacity>   
     <TouchableOpacity mode="modal" onPress={() => navigation.navigate("Login")}>    
         <Image style={styles.logos} source={require("../assets/fashion.png")} />
         <Text style={styles.titles} >Fashion & Beauty</Text>
     </TouchableOpacity>   
     <TouchableOpacity onPress={() => navigation.navigate("Message")}>        
         <Image style={styles.logos} source={require("../assets/globalcollection.jpg")}/>
         <Text style={styles.titles} >Global Collection</Text>
     </TouchableOpacity> 
     </Animatable.View>    
     
     <Animatable.View style={styles.containere1} animation ="zoomIn"> 
     <TouchableOpacity onPress={() => navigation.navigate("Login")}>  
         <Image style={styles.logos1} source={require("../assets/specialoffer.jpg")} />
         <Text style={styles.titles1} >Special Offers</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("Cart")}>        
         <Image style={styles.logos1} source={require("../assets/discounts.jpg")}/>
         <Text style={styles.titles1} >Discounts</Text>
     </TouchableOpacity>   
     <TouchableOpacity mode="modal" onPress={() => navigation.navigate("Login")}>    
         <Image style={styles.logos1} source={require("../assets/newarrival.jpg")} />
         <Text style={styles.titles1} >New Arrivals</Text>
     </TouchableOpacity>   
     <TouchableOpacity onPress={() => navigation.navigate("Message")}>        
         <Image style={styles.logos1} source={require("../assets/category.png")}/>
         <Text style={styles.titles1} >Categories</Text>
     </TouchableOpacity> 
       </Animatable.View>    
    </Animatable.View>








               
 <Animatable.View style={styles.img11} animation ="bounceIn">              
      <Animatable.View style={styles.container} animation ="bounceIn">   
         <Card
           image={require("../assets/iphone.jpg")}
           des="IPHONE 12 Pro MAX With High Fps with 120Hz 6GB Ram 1 Year Official Warranty PTA Approved"
           price="$80"
           onPress={() => navigation.navigate("Login")}
          />   
              <Card
           image={require("../assets/airpod.jpg")}
           des="New i12 TWS Wireless Headphones Airpods Tws Wireless Bluetooth 5.0 Earphone Sport Headset"
           price="$90"
           onPress={() => navigation.navigate("Login")}
          />   
  
       </Animatable.View> 
             <Animatable.View style={styles.container} animation= "bounceIn">   
         <Card
           image={require("../assets/airpod.jpg")}
           des="New i12 TWS Wireless Headphones Airpods Tws Wireless Bluetooth 5.0 Earphone Sport Headset"
           price="$100"
           onPress={() => navigation.navigate("Login")}
          />   
              <Card
           image={require("../assets/iphone.jpg")}
           des="IPHONE 12 Pro MAX With High Fps with 120Hz 6GB Ram 1 Year Official Warranty PTA Approved"
           price="$800"
           onPress={() => navigation.navigate("Login")}
          />   
          
       </Animatable.View>  
          </Animatable.View>
   </Animatable.View>
       </ImageBackground>  
      
       </ScrollView>
    );
}

const styles = StyleSheet.create({
background: {
    flex: 1,
    width:"100%",
    height:"auto",
    paddingTop: Constants.statusBarHeight
},    

container:{
flexDirection:'row',
padding:5,
margin: 5,
marginLeft: 45,
},

img: {
  width: "100%",
  height: 200,
},

img1: {
    width:"100%",
    height:"auto",
    borderRadius:50,
  
},


searchs: {
backgroundColor:'white',
fontWeight:"bold",
fontSize:19,
color: "black",
padding:5,
},
containerq: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#ecf0f1',
  padding: 8,
  margin:5,
  width: "100%",
  height:250,
},

carouselContainer2: { 
  width: "100%",
  height:250, 
  marginTop:5,
}, 



card2: {
  backgroundColor: "white",
  
  overflow:'hidden',
  width: "100%",
  height: 200,
  shadowColor: "grey",
  shadowOpacity: 8,
  shadowRadius: 29,
  shadowOffset: {
    height: 8,
    width: 8
  },
  borderWidth: 5,
},


tex1: {
  fontSize:14,
  padding:6,
  fontWeight: "bold"
},

containere: {
  flexDirection:"row",

 },

 logos: {
  width: 45,
  height: 45,
  marginLeft: 20,
  
  borderRadius: 22.5, 
},

titles: {

  marginRight: 20,
  marginLeft: 6,
   alignSelf:"center",
   fontWeight: "bold",
   fontSize: 9,  
         

},

containere1: {
  flexDirection:"row",

  paddingTop: 18,
  marginLeft:10,
},


titles1: {

  
  
 
   fontWeight: "bold",
   fontSize: 10,         

},


logos1: {
  width: 45,
  height: 45,
  marginRight: 54,
  marginLeft:3,
  borderRadius: 22.5, 
},

img11: {
  marginTop:8,
  width:"100%",
  height:"auto",
  backgroundColor:"red",
  alignItems:"center",
  justifyContent:"center"
},











})
export default Home;