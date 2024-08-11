import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyles';

export function BatTextInput() {
  return (
    <TextInput style={styles.input} placeholder='Digite alguma coisa'/>
  );
}