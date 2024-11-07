import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, Button } from 'react-native'

export default class index extends Component {
  createTwoButtonAlert = () => {
    Alert.alert(
        "警告标题",
        "警告内容",
        [{
            text: "取消",
            onPress: () => console.log('Cancel'),
            style: 'cancel'
        },
        {
            text: "确定",
            onPress: () => console.log('Confirm'),
            style: 'default'
        }
        ]
    )
  }

  createThreeButtonAlert = () => {
    Alert.alert(
        "警告标题",
        "警告内容",
        [{
            text: "取消",
            onPress: () => console.log('Cancel'),
            style: 'cancel'
        },
        {
            text: "确定",
            onPress: () => console.log('Confirm'),
            style: 'default'
        },
        {
            text: "哈哈",
            onPress: () => console.log('Confirm'),
            style: 'default'
        }
        ]
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <Button
            title='alert'
            onPress={()=>{
                alert('我是一个按钮')
            }}
        ></Button>
        <Button
            title='Alert.alert'
            onPress={()=>{
                Alert.alert('我是一个按钮')
            }}
            color={'red'}
        >
        </Button>
        <Button
            title='两个按钮'
            onPress={
                this.createTwoButtonAlert
            }
            color={'green'}
        >
        </Button>
        <Button
            title='三个按钮'
            onPress={
                this.createThreeButtonAlert
            }
            color={'tomato'}
        >
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 70,

    }
})
