import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'

export default Index = () => {
  
    return (
        <SafeAreaView>
            <ScrollView
                style={[styles.container, {backgroundColor: 'tomato', height:50}]}
                contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
                horizontal={true}
            >
                <Text style={styles.title}>新闻</Text>
                <Text>新闻</Text>
                <Text>新闻</Text>
                <Text>新闻</Text>
                <Text>新闻</Text>
                <Text>新闻</Text>
                <Text>新闻</Text>
                <Text>新闻</Text>
                <Text>新闻</Text>
                <Text>军事</Text>
            </ScrollView>

            <ScrollView style={styles.container}
                contentContainerStyle={{ alignItems: 'center',justifyContent: 'center'}}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</Text>
                <></>
            </ScrollView>
        </SafeAreaView>
      
    )
  
}

const styles = StyleSheet.create({
    container:{
        // marginTop: 70,
        // scrollview 不能直接主轴和交叉轴的属性，会报错
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 10
    },
    text:{
        fontSize:60
    },
    title:{
        // width: 100,
        backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})
