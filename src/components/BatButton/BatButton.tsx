import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './BatButtonStyles';

interface BatButtonProps {
  text: string
}

export function BatButton({text}: BatButtonProps) {
  const navigation = useNavigation()

  return (
    <Text style={styles.button}
    onPress={() => navigation.navigate('Forms')}
    >{text}</Text>
  );
}