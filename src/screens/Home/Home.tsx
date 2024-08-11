import React from 'react';
import { View } from 'react-native';

import { styles } from './Style';
import { BatButton } from '../../components/BatButton/BatButton';

export function Home() {
  return (
    <View style={styles.appContainer}>
        <BatButton text='Activate Bat Signal'/>
    </View>
  );
}