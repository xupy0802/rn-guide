import React, { Component, useState, useEffect } from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, StatusBar, Touchable, TouchableOpacity } from 'react-native'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';

const DATA = [
    {
        id: 1,
        title: '头条1111'
    },
    {
        id: 2,
        title: '头条'
    },
    {
        id: 3,
        title: '头条'
    },
    {
        id: 4,
        title: '头条'
    },
    {
        id: 5,
        title: '头条'
    },
    {
        id: 6,
        title: '头条'
    },
    // {
    //     id: 7,
    //     title: '头条'
    // },
    // {
    //     id: 8,
    //     title: '头条'
    // },
    // {
    //     id: 9,
    //     title: '头条'
    // },
    // {
    //     id: 10,
    //     title: '头条'
    // },
    // {
    //     id: 11,
    //     title: '头条'
    // },
    // {
    //     id: 12,
    //     title: '头条'
    // },
    // {
    //     id: 13,
    //     title: '头条'
    // },
    // {
    //     id: 14,
    //     title: '头条'
    // },
    // {
    //     id: 15,
    //     title: '头条~~~~'
    // },
]

export default Index = () => {

    const insets = useSafeAreaInsets();
    const [selectId, setSelectId] = useState(null)
    const [refreshLogShow, setRefreshLogShow] = useState(false);
    // const [backgroundColor, setBackgroundColor] = useState('#f9c2ff');


    loadData = () => {
        setRefreshLogShow(true)
        // setRefreshLogShow(false)
        // alert('下拉刷新')
        setTimeout(()=>{
            setRefreshLogShow(false)
            alert('下拉刷新')
        }, 1000)
    }

    return (
      <SafeAreaView style={[styles.container, {height: Dimensions.get("window")-insets.top-insets.bottom}]}>
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({index, item}) => {
                console.log(index)
                console.log(item)
                const backgroundColor = item.id === selectId ? 'tomato' : '#f9c2ff';
                return (
                    <TouchableOpacity style={[styles.item, {backgroundColor:backgroundColor}]}
                    onPress={()=>{
                        setSelectId(item.id)
                        console.log(item)
                    }}>
                        
                        <Text style={[styles.title]}>{item.title}</Text>
                    </TouchableOpacity>
                
                )
            }}

            ItemSeparatorComponent={()=>{
                
                return <View style={{borderBottomWidth:1,
                    borderBottomColor: 'tomato'
                }}></View>
            }}

            ListEmptyComponent={() => {
                return <Text>空空</Text>
            }}

            // // 下拉刷新
            // refreshing={refreshLogShow}
            // onRefresh={() => {
            //     loadData()
            // }}

            // // 上拉加载
            // onEndReachedThreshold={0}
            // onEndReached={({distanceFromEnd: number})=>{
            //     console.log(insets)
            //     console.log(Dimensions.get('window').height)
            //     console.log(Dimensions.get('screen').height)
            //     alert("到底了"+number)

            // }}

            // 头组件
            ListHeaderComponent={()=>{
                return <Text>头组件</Text>
            }}
            // 尾组件
            ListFooterComponent={()=>{
                return <Text>尾组件</Text>
            }}

            // 水平布局（多用于导航）
            horizontal={false}

            // 指定开始的数据
            onScrollToIndexFailed={() => {}}
            initialScrollIndex={0}
            
            // 加载指定条数（懒加载）
            // initialNumToRender={4}

            // 支持多列展示，不支持瀑布流
            numColumns={1}

            // 列表反转
            inverted={false}


            extraData={selectId}

        />
    
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 10,
        marginHorizontal: 16,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
      },
      header: {
        fontSize: 32,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
      },

})
