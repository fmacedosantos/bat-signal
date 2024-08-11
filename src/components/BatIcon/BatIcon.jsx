import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './BatIconStyles';
import icon from '../../../assets/pictures/Batman Begins.png'

export function BatIcon() {
  return (
    <Image source={icon} style={styles.icon}/>
  );
}