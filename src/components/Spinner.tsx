import React from "react"
import { View, Dimensions, Animated, Easing, StyleSheet } from 'react-native'

const Spinner = () => {
    
    let spinValue = new Animated.Value(0);

    Animated.timing(
        spinValue,
        {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true
        }
    ).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={styles.container}>
            <View style={styles.spinnerPosition}>
                <Animated.Image source={require('../assets/images/pokebola.png')} style={{width: 100, height: 100, transform: [{rotate: spin}]}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height, 
        opacity: 0.5, 
        backgroundColor: 'grey' 
    },
    spinnerPosition: {
        position: 'absolute', 
        top: '40%', 
        left: '38%'
    },
});

export default Spinner