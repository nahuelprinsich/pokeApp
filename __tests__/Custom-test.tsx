/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import App from '../App';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
import ListItem from '../src/components/ListItem';
 
 it('renders correctly', () => {
   renderer.create(<ListItem title={'prueba'} pressAction={() => console.log('test')} favourites={['test']}/>);
 });