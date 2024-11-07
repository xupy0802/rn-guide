import React, { Component, useRef, useEffect } from 'react'
import { Animated,Button,Text, StyleSheet, View } from 'react-native'
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';

export default Index = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const movAnim = useRef(new Animated.Value(0)).current;

    const mov = () => {
        Animated.timing(movAnim, {
            toValue: 200,
            duration: 2000,
            useNativeDriver: true,
        }).start(()=>{
            movAnim.setValue(0)
            mov()
        })
    }
   
    useEffect(() => {
        mov()
    })
    

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }).start(() => {
            alert("回调函数")
            mov()
        });
      };
    
      const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }).start(() => {
            alert("回调函数")
        });
      };

    return (
      <SafeAreaView style={styles.container}>
        <Text> RN中可以直接使用的动画组件</Text>
        <Text>1.Animated.View</Text>
        <Text>2.Animated.Text</Text>
        <Text>3.Animated.ScrollView</Text>
        <Text>4.Animated.Image </Text>
        <Text>创建初始值</Text>
        <Text>Animated.Value()(单个值)</Text>
        <Text>Animated.ValueXY()(向量值)</Text>
        <Text>将初始值绑定动画组件上，一般将其绑定到某个样式属性
            下，例如：opacity、translate
        </Text>
        <Text>通过动画类型API，一帧一帧地改变初始值</Text>
        <Text>Animated.decay()加速效果</Text>
        <Text>Animated.spring()弹跳效果</Text>
        <Text>Animated.timing()时间渐变效果</Text>

        <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>

        <View style={styles.scanContainer}>
            <Animated.View
                style={[
                    styles.scanBorder,
                    {
                        transform: [{
                            translateY: movAnim
                        }]
                    }
                ]}
            >  
            </Animated.View>
        </View>

      </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
        margin:20,
      },
      fadingText: {
        fontSize: 28,
      },
      buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
      },
      scanContainer:{
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: 'tomato'
      },
      scanBorder:{
        borderWidth: 1,
        borderColor: 'red',
        // height: 1
      }
})
