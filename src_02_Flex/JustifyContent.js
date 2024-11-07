import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class JustifyContent extends Component {
  render() {
    return (
        <ScrollView style={styles.body}>
        <Text style={styles.h2}> 项目在主轴上的对齐方式</Text>
        <View>
            <Text style={styles.h3}>JustifyContent: 'flex-start'(默认)</Text>
            <View style={[styles.container, styles.JustifyContentStart]}>
                <Text style={styles.itemBase}>刘备</Text>
                <Text style={styles.itemBase}>关羽</Text>
                <Text style={styles.itemBase}>张飞</Text>
            </View>
            <Text style={styles.h3}>JustifyContent: 'center'</Text>
            <View style={[styles.container,  styles.JustifyContentCenter]}>
                <Text style={styles.itemBase}>刘备</Text>
                <Text style={styles.itemBase}>关羽</Text>
                <Text style={styles.itemBase}>张飞</Text>
            </View>
            <Text style={styles.h3}>JustifyContent: 'flex-end'</Text>
            <View style={[styles.container, styles.JustifyContentEnd]}>
                <Text style={styles.itemBase}>刘备</Text>
                <Text style={styles.itemBase}>关羽</Text>
                <Text style={styles.itemBase}>张飞</Text>
            </View>
            <Text style={styles.h3}>JustifyContent: 'space-around'</Text>
            <View style={[styles.container, styles.JustifyContentAround]}>
                <Text style={styles.itemBase}>刘备</Text>
                <Text style={styles.itemBase}>关羽</Text>
                <Text style={styles.itemBase}>张飞</Text>
            </View>
            <Text style={styles.h3}>JustifyContent: 'space-evenly'</Text>
            <View style={[styles.container,  styles.JustifyContentEvenly]}>
                <Text style={styles.itemBase}>刘备</Text>
                <Text style={styles.itemBase}>关羽</Text>
                <Text style={styles.itemBase}>张飞</Text>
            </View>
            <Text style={styles.h3}>JustifyContent: 'space-between'</Text>
            <View style={[styles.container,  styles.JustifyContentBetween]}>
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
    },
    JustifyContentStart: {
        justifyContent: 'flex-start'
    },
    JustifyContentCenter: {
        justifyContent: 'center'
    },
    JustifyContentEnd: {
        justifyContent: 'flex-end'
    },
    JustifyContentAround: {
        justifyContent: 'space-around'
    },
    JustifyContentEvenly: {
        justifyContent: 'space-evenly'
    },
    JustifyContentBetween: {
        justifyContent: 'space-between'
    }
})