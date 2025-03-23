import React from 'react';
import { View } from 'react-native';

const LinearGradient = props => {
  return <View {...props}>{props.children}</View>;
};

export { LinearGradient };