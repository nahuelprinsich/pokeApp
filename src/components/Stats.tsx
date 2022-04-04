import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const Stats = ({stats}) => {

    return (
        <View style={{marginTop: 20}}>
            <View style={styles.statContainer}>
                <Text style={styles.statsTitle}>{'Hp:'}</Text>
                <Text style={styles.statsValue}>{stats[0].base_stat}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statsTitle}>{'Attack:'}</Text>
                <Text style={styles.statsValue}>{stats[1].base_stat}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statsTitle}>{'Defense:'}</Text>
                <Text style={styles.statsValue}>{stats[2].base_stat}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statsTitle}>{'Special-attack:'}</Text>
                <Text style={styles.statsValue}>{stats[3].base_stat}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statsTitle}>{'Special-defense:'}</Text>
                <Text style={styles.statsValue}>{stats[4].base_stat}</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statsTitle}>{'Speed:'}</Text>
                <Text style={styles.statsValue}>{stats[5].base_stat}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10, 
        paddingHorizontal: 80
    },
    statsTitle: {
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#37474f'
    },
    statsValue: {
        textAlign: 'center', 
        fontSize: 20, 
        color: '#37474f'
    }
});

export default Stats