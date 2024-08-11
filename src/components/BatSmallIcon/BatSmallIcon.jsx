import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './BatSmallIconStyles';
import icon from '../../../assets/pictures/Batman Begins.png'

export function BatSmallIcon() {
  return (
    <Image source={icon} style={styles.icon}/>
  );
}