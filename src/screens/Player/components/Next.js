import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Next = ({forward, forwardDisabled}) => {
  return (
    <TouchableOpacity onPress={forward} disabled={forwardDisabled}>
      <Image
        style={{width: 30, height: 30, marginLeft: 20}}
        source={require('assets/next.png')}
      />
    </TouchableOpacity>
  );
};

export default Next;
