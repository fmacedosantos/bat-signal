import React from 'react';
import { View } from 'react-native';

import { styles } from './Style';
import { BatSmallIcon } from '../../components/BatSmallIcon/BatSmallIcon';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { BatButton } from '../../components/BatButton/BatButton';

export function Forms() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <BatSmallIcon/>
      </View>
      <View style={styles.inputContainer}>
      <BatTextInput placeholder='Digite seu username'/>
        <BatTextInput placeholder='Digite seu nome'/>
        <BatTextInput placeholder='Digite sua idade'/>
        <BatTextInput placeholder='Digite seu CPF'/>
        <BatTextInput placeholder='Digite seu email'/>
        <BatTextInput placeholder='Digite seu telefone'/>
        <BatButton text='ENVIAR'/>
      </View>
    </View> 
  );
}