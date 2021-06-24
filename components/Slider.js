import React from 'react';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet,ScrollView,Dimensions, View, Image, TouchableOpacity, ScrollView } from 'react-native';



const {width} =Dimensions.get("window");
const height = width * 0.6; //60%

const images = [
  'https://images.unsplash.com/photo-1619553965570-34e12bd447a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjcyMjQ4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024',
  'https://images.unsplash.com/photo-1619553965570-34e12bd447a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjcyMjQ4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024',
  'https://images.unsplash.com/photo-1619553965570-34e12bd447a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjcyMjQ4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024',
  'https://images.unsplash.com/photo-1619553965570-34e12bd447a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjcyMjQ4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024',
  'https://images.unsplash.com/photo-1619553965570-34e12bd447a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NjcyMjQ4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024', 

]

export default class Slider extends React.Component {
    state ={
        active: 0
      }


    change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide!==this.state.active){
          this.setState({active: slide});
        }
      }
    render(){
    return (
    <View style={styles.containers}>
          <ScrollView
            pagingEnabled 
            horizontal 
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
            >
              {
                images.map((image, index) => (
                  <Image
                   key={index}
                   source={{ uri: image}}
                  style={styles.image}/>
                ))
              }
          </ScrollView>
        
        <View style={styles.pagination}>
          {
            images.map((x,y) =>(
              <Text key={y} style={y===this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
            ))
          }
         </ View>
         </View> 
    );
}
}
const styles = StyleSheet.create({
    containers:{
        marginTop: 50, 
        width, 
        height,
      },
      
      scroll: {
        width, 
        height,
      },
      
      image: {
        width, 
        height, 
        resizeMode: "cover",
      },
      
      pagination: {
        flexDirection:"row", 
        position:"absolute",
        bottom:0, 
        alignSelf:"center"
      },
      
      pagingText: {
        color:"#888",
        margin: 3,
      },
      
      pagingActiveText: {
        color:"#fff",
        margin: 3,
      },
})

