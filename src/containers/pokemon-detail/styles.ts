import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#ed1b24', 
        paddingTop: 80
    },
    heartContainer: {
        width: 40, 
        height: 40, 
        position: 'absolute',
        top: 60, 
        right: 20
    },
    hearImage: {
        width: '100%', 
        height: '100%'
    },
    pokeImage: {
        width: 200, 
        height: 250, 
        marginTop: -60, 
        marginBottom: 20
    },
    dataContainer: {
        backgroundColor: '#f1f1f1', 
        width: windowWidth, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
        marginTop: -30,
    },
    tab: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 10
    }
});

export default styles