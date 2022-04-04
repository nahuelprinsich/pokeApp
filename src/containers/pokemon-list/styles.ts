import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#ed1b24',
        width: windowWidth
    },
    imageContainer: {
        width: windowWidth , 
        height: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20,
        marginVertical: 20
    },
    imageSize: {
        width: '60%',
        height: 100
    }
});

export default styles