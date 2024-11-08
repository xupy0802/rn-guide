import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const Index = () => {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <Image
            style={styles.Item1}
            source={require('./images/001.jpg')}
        />
         <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
      
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    Item1:{
      height: 100,
      width: 100
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
})

export default Index;
