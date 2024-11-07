import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class FlexDirection extends Component {
  render() {
    return (
      <ScrollView style={styles.body}>
        <Text style={styles.h2}> 主轴方向 </Text>
        <View>
            <Text style={styles.h3}>FlexDirection: 'column'(默认)</Text>
            <View style={styles.container}>
                <Text style={styles.itemBase}>刘备</Text>
                <Text style={styles.itemBase}>关羽</Text>
                <Text style={styles.itemBase}>张飞</Text>
            </View>
            <Text style={styles.h3}>FlexDirection: 'column-reverse'</Text>
            <View style={[styles.container, styles.flexColumnReverse]}>
                <Text style={styles.itemBase}>刘备</Text>
                <Text style={styles.itemBase}>关羽</Text>
                <Text style={styles.itemBase}>张飞</Text>
            </View>
            <Text style={styles.h3}>FlexDirection: 'row'</Text>
            <View style={[styles.container, styles.flexRow]}>
                <Text style={styles.itemBase}>刘备</Text>
                <Text style={styles.itemBase}>关羽</Text>
                <Text style={styles.itemBase}>张飞</Text>
            </View>
            <Text style={styles.h3}>FlexDirection: 'row-reverse'</Text>
            <View style={[styles.container, styles.flexRowReverse]}>
                <Text style={styles.itemBase}>刘备</Text>
                <Text style={styles.itemBase}>关羽</Text>
                <Text style={styles.itemBase}>张飞</Text>
            </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    body:{
        marginTop: 78
    },
    container: {
        height: 150,
        margin: 10,
        borderColor: '#ddd',
        borderWidth: 1
    },
    h2: {
        fontSize: 30,
        marginHorizontal: 10,
        marginVertical:20
    },
    h3: {
        fontSize: 24,
        marginHorizontal: 10
    },
    itemBase: {
        height: 30,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#dfb',
        padding: 4,
        textAlign: 'center'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexColumnReverse: {
        // 列向反转
        flexDirection: 'column-reverse'
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexRowReverse: {
        flexDirection: 'row-reverse'
    }
})
