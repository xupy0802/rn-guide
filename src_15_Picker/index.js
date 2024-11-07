import React, { Component, useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';

export default Index = () => {

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
      <SafeAreaView>
        <Text> yarn add @react-native-picker/picker </Text>
      
        <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
        }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
      
      </SafeAreaView>
    )

}

const styles = StyleSheet.create({

})
