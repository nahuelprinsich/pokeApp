import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const Abilities = ({abilities}) => {

    return (
        <View style={{marginTop: 30}}>
            <View style={styles.abilityContainer}>
                {
                    abilities.map((ability) => {
                        return (
                            <View style={styles.abilityCard}>
                                <Text key={ability.ability.name} style={styles.abilityText}>{ability.ability.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center', 
        marginTop: 10, 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#37474f'
    },
    abilityContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    abilityCard: {
        backgroundColor: '#ed1b24', 
        borderWidth: 0.5, 
        borderRadius: 20, 
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    abilityText: {
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#37474f'
    }
});

export default Abilities