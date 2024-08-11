import React from 'react';
import { Text } from 'react-native';

import { styles } from './BatButtonStyles';

interface BatButtonProps {
  text: string
}

export function BatButton({text}: BatButtonProps) {
  return (
    <Text style={styles.button}>{text}</Text>
  );
}