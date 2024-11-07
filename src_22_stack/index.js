import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
    return (
        <Button onPress={
                () => {
                    navigation.navigate('Details')
                }
            }
            title="跳到详情页"
        >
            
        </Button>
    )
}

const DetailsScreen = ({navigation}) => {
    return (
        <Button onPress={
                () => {
                    navigation.navigate('Home')
                }
            }
            title="跳到首页"
        >
            
        </Button>
    )
}

const Stack = createStackNavigator();

export default class index extends Component {

  render() {
    return (
        <SafeAreaView>
            <Text> yarn add @react-navigation/stack </Text>
            <Stack.Navigator initialRouteName='Details'>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Details' component={DetailsScreen}/>
            </Stack.Navigator>
        </SafeAreaView>
    
    )
  }
}

const styles = StyleSheet.create({})
