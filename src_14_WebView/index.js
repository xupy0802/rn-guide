import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview'

export default Index = () => {

    return (
      <SafeAreaView style={styles.container}>
        <Text> WebView 相当于内置浏览器 </Text>
        <Text>     yarn add react-native-webview</Text>
        <Text> Picker 下拉框 </Text>
        <Text> Swiper 展示轮播效果 </Text>
        <Text> AsyncStorage 持久化存储系统 </Text>
        <Text> Geolocation 获取定位信息 </Text>
        <Text> Camera 调用摄像头 </Text> 

        <WebView
          source={{ uri: 'https://m.baidu.com' }}
          style={{ marginTop: 20, width: Dimensions.get('window').width, height: 200}}
        />

        <WebView
            source={{html: '<h1>哈哈哈</h1>'}}
            style={{marginTop: 20, width: Dimensions.get('window').width, height: 200}}
        /> 
      

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'tomato'
  },
})
