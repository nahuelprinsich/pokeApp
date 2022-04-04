import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const Moves = ({moves}) => {

    return (
        <View style={{marginTop: 20}}>
            <View style={styles.moveContainer}>
                {
                    moves.map((move) => {
                        return (
                            <View style={styles.moveCard}>
                                <Text key={move.move.name} style={styles.moveText}>{move.move.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
            {
                moves.map((move) => {
                    return (
                        <Text style={styles.move}>{move.move.name}</Text>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    move: {
        textAlign: 'center', 
        marginTop: 10, 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#37474f'
    },
    moveContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    moveCard: {
        backgroundColor: '#ed1b24',
        borderRadius: 20, 
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        marginHorizontal: 10
    },
    moveText: {
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#37474f'
    }
});

export default Moves