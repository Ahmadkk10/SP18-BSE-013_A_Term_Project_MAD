import React, { Children } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

function Screen(children) {
    return (
       <SafeAreaView style={styles.screen}>
           {children}
       </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    },
})
export default Screen;