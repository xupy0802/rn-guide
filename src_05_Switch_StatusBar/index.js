import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Switch, StatusBar } from 'react-native'

export default class index extends Component {
    constructor(){
        super()

        this.state = {
            hideStatusBar: false
        }
    }

    toggleStatusBar = () => {
        this.setState({
            hideStatusBar: !this.state.hideStatusBar
        })
    }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            hidden={this.state.hideStatusBar}
            backgroundColor="red" // 仅在android下有效
            barStyle={'dark-content'}
        ></StatusBar>
        <Switch
            trackColor={{false: '#767577', true: 'green'}}
            ios_backgroundColor="#767577"
            value={this.state.hideStatusBar}
            onValueChange={this.toggleStatusBar}
            thumbColor={this.state.hideStatusBar ? "yellow" : "tomato"}
        >
        </Switch>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
