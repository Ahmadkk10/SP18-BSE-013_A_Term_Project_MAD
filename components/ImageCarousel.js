import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-anchor-carousel'; 
const { width } = Dimensions.get('window');

const data = [
  {
    uri: 'https://www.couponsleap.com/blog/wp-content/uploads/2019/02/best-Online-Deals.jpg',
    title: 'Lorem ipsum dolor sit amet',
    content: 'Neque porro quisquam est qui dolorem ipsum quia '
  },
  {
    uri: 'https://c8.alamy.com/comp/W7002H/big-sale-social-media-banner-template-shopping-low-price-deals-huge-discount-for-customers-promotional-vector-poster-layout-store-promo-campaign-special-offers-for-clients-advertising-W7002H.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum '
  },
  {
    uri: 'https://cdn2.vectorstock.com/i/1000x1000/31/51/sale-poster-with-limited-offer-mega-sale-text-vector-11893151.jpg',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui'
  },
  {
    uri: 'https://1.bp.blogspot.com/-7vRay6Rp3Z0/XRYVXB4PaOI/AAAAAAAAFNc/gr_BzMlYKvMS0c_DbUD5WqCsyUY-W56ygCLcBGAs/s1600/nokia-mobile-raining-deals-promo.jpg',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
  },
  {
    uri: 'https://mcpchimneyservices.com/wp-content/uploads/2019/10/promo-tag.png',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor '
  }
];


function ImageCarousel(props) {
 renderItem = ({ item, index }) => {
        const { uri, title, content } = item;
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.item}
            onPress={() => {
              this.numberCarousel.scrollToIndex(index);
            }}
          >
            <ImageBackground
              source={{ uri: uri }}
              style={styles.imageBackground}
            >
            </ImageBackground>
        
          </TouchableOpacity>
        );
      };
    
    
    return (
        <Carousel
        style={styles.carousel}
        data={data}
        renderItem={this.renderItem}
        itemWidth={0.7 * width}
        inActiveOpacity={0.3}
        containerWidth={width - 10}
        ref={(c) => {
          this.numberCarousel = c;
        }}
      />
    );
}


const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: '#141518',
      },
      item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3
      },
      imageBackground: {
        flex: 2,
        backgroundColor: 'white',
        borderWidth: 8,
        borderColor: 'black',
        width: "100%",
        height: "auto",
        borderRadius: 8,
      },
      rightTextContainer: {
        marginLeft: 'auto',
        marginRight: -2,
        backgroundColor: 'rgba(49, 49, 51,0.5)',
        padding: 3,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
      },
      rightText: { color: 'white' },
      lowerContainer: {
        flex: 1,
        margin: 10
      },
      titleText: {
        fontWeight: 'bold',
        fontSize: 18
      },
      contentText: { 
        fontSize:12
      }
})
export default ImageCarousel;