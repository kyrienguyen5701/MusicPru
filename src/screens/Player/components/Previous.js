import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Previous = ({back, backDisabled}) => {
  return (
    <TouchableOpacity
      onPress={back} disabled={backDisabled}
      style={{width: 30, height: 30, marginRight: 25}}>
      <Image source={require('assets/previous.png')} />
    </TouchableOpacity>
  );
};

export default Previous;
