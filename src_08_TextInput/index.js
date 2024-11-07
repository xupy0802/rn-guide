import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, Button } from 'react-native'

const Index = () => {

    const [userName, setUserName] = useState('');

    doLogin = () => {
        alert(userName)
    }

    return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder='清输入用户名'
            value={userName}
            onChangeText={(val) => {
                setUserName(val)
                 
            }}
        ></TextInput>
        <TextInput
            style={styles.input}
            placeholder='清输入用户名'
            value={userName}
            secureTextEntry={true}
            onChangeText={(val) => {
                setUserName(val)
                 
            }}
        ></TextInput>
        <TextInput
            style={styles.input}
            placeholder='请输入手机号'
            keyboardType='number-pad'

        ></TextInput>
        <TextInput
            style={styles.input}
            placeholder='请输入自我介绍'
            multiline={true}
            numberOfLines={5}
            textAlignVertical='top'
        ></TextInput>
        <View>
            <Button
                title='登陆'
                onPress={doLogin}
            ></Button>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    input: {
        width: Dimensions.get('window').width - 20,
        margin: 10,
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 5
    }
})

export default Index;