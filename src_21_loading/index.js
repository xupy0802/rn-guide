import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';

export default class index extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.loading}>
            <ActivityIndicator color={"white"}></ActivityIndicator>
            <Text style={styles.text}> 加载中... </Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    loading:{
        backgroundColor: '#999',
        height: 100,
        width: 150,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        marginTop: 20,
        color: 'white'
    }
})
