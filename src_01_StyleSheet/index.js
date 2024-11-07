import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}> textInComponent </Text>

        {/* 样式冲突，择后原则 */}
        <Text style={[{fontSize: 30}, {color: 'red'}]}> textInComponent </Text>

        <Text style={styles.h1}>Hello RN!</Text>

        <Text style={styles.h2}>Hello World!</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
