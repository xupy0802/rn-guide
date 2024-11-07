import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, SectionList, Dimensions } from 'react-native'

const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
      },
      
   
    
  ];


export default Index = () => {

    const [refreshLogShow, setRefreshLogShow] = useState(false);

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
      <SafeAreaView style={styles.container}>

        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <View style={styles.item}>
                  <Text style={styles.title}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
            )}
            // 项目之间的分隔符
            ItemSeparatorComponent={() => {
                return <View style={{borderBottomWidth:1,
                    borderBottomColor: 'tomato'
                }}></View>
            }}
            // 列表数据为空时
            ListEmptyComponent={() => {
                return <Text>空空</Text>
            }}

            // 下拉刷新
            refreshing={refreshLogShow}
            onRefresh={() => {
                loadData()
            }}

            // 上拉加载
            onEndReachedThreshold={0.1}
            onEndReached={({distanceFromEnd: number})=>{
                console.log(Dimensions.get('window').height)
                alert("到底了"+number)

            }}

            // 头组件
            ListHeaderComponent={()=>{
                return <Text>头组件</Text>
            }}
            // 尾组件
            ListFooterComponent={()=>{
                return <Text>尾组件</Text>
            }}
        />
      </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 10,
    marginHorizontal: 16,
    height: 800

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
