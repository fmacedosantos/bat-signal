import React from 'react';
import { View } from 'react-native';

import { styles } from './Style';
import { BatButton } from '../../components/BatButton/BatButton';
import { BatIcon } from '../../components/BatIcon/BatIcon';

export function Home() {
  return (
    <View style={styles.appContainer}>
      <BatIcon/>
      <BatButton text='Activate Bat Signal'/>
    </View>
  );
}