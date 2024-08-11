import React from 'react';
import { View } from 'react-native';

import { styles } from './Style';
import { BatIcon } from '../../components/BatIcon/BatIcon';
import { BatSmallIcon } from '../../components/BatSmallIcon/BatSmallIcon';

export function Forms() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <BatSmallIcon></BatSmallIcon>
      </View>
    </View>
  );
}