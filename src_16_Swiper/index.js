import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
wrapper: {},
slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
},
slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
},
slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
},
text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
}
})

export default Index = () => {

    return (
        <SafeAreaView style={{flex:1}}>
            <Text>yarn add react-native-swiper</Text>
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        </SafeAreaView>
    )

}

