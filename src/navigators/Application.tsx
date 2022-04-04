import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { PokemonListContainer, PokemonDetailContainer } from '../containers';
  
const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <NavigationContainer>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <Stack.Navigator>
                    <Stack.Screen name="PokemonList" component={PokemonListContainer} options={{headerShown: false}}/>
                    <Stack.Screen 
                        name="PokemonDetail" 
                        component={PokemonDetailContainer} 
                        options={{
                            headerTransparent: true,
                            headerStyle:{ backgroundColor: '#ed1b24' },
                            headerTintColor: '#f1f1f1',
                            headerTitleAlign: 'center',
                            headerTitleStyle: { fontSize: 30 }
                        }}
                    />
                </Stack.Navigator>  
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default ApplicationNavigator