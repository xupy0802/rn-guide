import React, { Component } from 'react'
import { Text, StyleSheet, View, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
            onPress={
                ()=>{
                    console.log('触碰高亮显示')
                }
            }
        >
            {/* 高亮显示 */}
            <Text style={styles.item}>触碰高亮</Text>
        </TouchableHighlight>
        <TouchableNativeFeedback
            onPress={
                ()=>{
                    console.log('。。。')
                }
            }
        >
            <Text>ahahah</Text>
        </TouchableNativeFeedback>
        <TouchableOpacity
            onPress={
                ()=>{
                    console.log('模糊显示')
                }
            }
        >
            {/* 透明度降低，模糊显示 */}
            <Text>模糊显示</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback
            onPress={
                ()=>{
                    console.log('无任何响应')
                }
            }
        >
            {/* 无任何响应 */}
            <Text>无任何响应</Text>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    item:{

    }
})
