import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class Flex extends Component {
  render() {
    return (
        <ScrollView style={styles.body}>
        <Text style={styles.h2}> 项目尺寸比例</Text>
        <View>
            <Text style={styles.h3}>flexRow 1:1:1</Text>
            <View style={[styles.container, styles.flexRow]}>
                <Text style={[styles.itemBase, {flex: 1}]}>刘备</Text>
                <Text style={[styles.itemBase, {flex: 1}]}>关羽</Text>
                <Text style={[styles.itemBase, {flex: 1}]}>张飞</Text>
            </View>
            <Text style={styles.h3}>flexRow 1:2:3</Text>
            <View style={[styles.container,  styles.flexRow]}>
                <Text style={[styles.itemBase, {flex: 1}]}>刘备</Text>
                <Text style={[styles.itemBase, {flex: 2}]}>关羽</Text>
                <Text style={[styles.itemBase, {flex: 3}]}>张飞</Text>
            </View>
            <Text style={styles.h3}>flexColumn: 1:1:1</Text>
            <View style={[styles.container]}>
                <Text style={[styles.itemBase, {flex: 1}]}>刘备</Text>
                <Text style={[styles.itemBase, {flex: 1}]}>关羽</Text>
                <Text style={[styles.itemBase, {flex: 1}]}>张飞</Text>
            </View>
            <Text style={styles.h3}>flexColumn: 1:2:3</Text>
            <View style={[styles.container, styles.JustifyContentAround]}>
                <Text style={[styles.itemBase, {flex: 1}]}>刘备</Text>
                <Text style={[styles.itemBase, {flex: 2}]}>关羽</Text>
                <Text style={[styles.itemBase, {flex: 3}]}>张飞</Text>
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
    },
    alignItemsStart: {
        alignItems: 'flex-start'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    alignItemsEnd: {
        alignItems: 'flex-end'
    },
    alignItemsStretch: {
        alignItems: 'stretch'
    },
    alignItemsBaseline: {
        alignItems: 'baseLine'
    },
})
