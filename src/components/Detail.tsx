import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const Detail = ({types, height, weight}) => {

    return (
        <View style={{marginTop: 20}}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{'Weight:'}</Text>
                <Text style={styles.text}>{weight}</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{'Height:'}</Text>
                <Text style={styles.text}>{height}</Text>
            </View>
            <View style={styles.titleType}>
                <Text style={styles.title}>{'Types:'}</Text>
            </View>
            <View style={styles.typeContainer}>
                {
                    types.map((type) => {
                        return (
                            <View style={styles.typeCard}>
                                <Text key={type.type.name} style={styles.typeText}>{type.type.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#37474f'
    },
    titleType: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginVertical: 10
    },
    text: {
        textAlign: 'center', 
        fontSize: 20, 
        color: '#37474f'
    },
    typeContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    typeCard: {
        backgroundColor: '#ed1b24', 
        borderWidth: 0.5, 
        borderRadius: 20, 
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    typeText: {
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#37474f'
    }
});

export default Detail