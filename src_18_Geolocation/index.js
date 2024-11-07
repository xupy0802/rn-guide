import React, { Component,useEffect } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';


export default Index = ()=> {

    useEffect(()=>{
        Geolocation.getCurrentPosition(
            info => {
                console.log(info)
            },
            error => Alert.alert("报错", JSON.stringify(error)),
            {timeout: 1000}
        );

    })


    return (
      <SafeAreaView>
        <Text> yarn add @react-native-community/geolocation </Text>
      </SafeAreaView>
    )

}

const styles = StyleSheet.create({})
