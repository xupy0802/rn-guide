import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator, Platform } from 'react-native'

export default function index(){
 
    if(Platform.OS === 'android'){
        alert('当前是安卓应用')
    }else if(Platform.OS === 'ios'){
        alert('当前是ios')
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator
                color={"blue"}
                size={"large"}
            />
            <ActivityIndicator
                color={"green"}
                size={"small"} //数字指定大小只在android中有效
            />
            <ActivityIndicator
                color={"tomato"}
            />
        </View>
    )
  
}

const styles = StyleSheet.create({
    container:{
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
