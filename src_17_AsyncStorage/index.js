import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData, storeObj, getData, getObj, removeValue, clearAll} from './storage'

export default Index = () => {

    return (
      <SafeAreaView>
        <Text> yarn add @react-native-async-storage/async-storage </Text>
        <Button title='存储' onPress={
            ()=>{
                storeData('myKey','Hello RN')
            }
        }></Button>
        <Button title='获取' onPress={
            () => {
                var value = getData('myKey')
                console.log(value)
                value.then(v => {
                    alert(v)
                })
            }
        }></Button>
      </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({

})
