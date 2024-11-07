import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';
// import {useCameraPermission, useCameraDevice, PermissionsPage, Camera} from 'react-native-vision-camera'

export default Index = () => {
  
    // const device = useCameraDevice('back')
    // const { hasPermission } = useCameraPermission()
    
    // if (!hasPermission) return <PermissionsPage />
    // if (device == null) return <NoCameraDeviceError />

    return (
      <SafeAreaView style={{flex:1}}>
        <Text> npm i react-native-vision-camera </Text>
        {/* <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
        /> */}
      </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    absoluteFill:{
        flex:1
    }
})
