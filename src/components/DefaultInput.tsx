import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {fp, hp, wp} from '../helper/resDimension';

const DefaultInput = props => {
  const {
    _title,
    _value,
    _handleValue,
    _Editable,
    leftIcon,
    rightIcon,
    leftIconName,
    rightIconName,
    containerStyle,
    _onSubmit,
    _onBlur,
    _keyboardType = 'default',
    _multiline = false,
  } = props;

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        placeholder={_title}
        value={_value}
        onChangeText={_handleValue}
        style={[styles.textInput, containerStyle]}
        onBlur={_onBlur}
        onSubmitEditing={_onSubmit}
        editable={_Editable}
        keyboardType={_keyboardType}
        multiline={_multiline}
      />
      {leftIcon ? (
        leftIconName == 'search' ? (
          <Image
            source={require('../assets/searchnormal.png')}
            style={{
              position: 'absolute',
              zIndex: 100,
              left: wp(2),
              height: fp(2),
              width: fp(2),
            }}
          />
        ) : null
      ) : null}
    </View>
  );
};

export default DefaultInput;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#F2F4F8',
    borderRadius: wp(2),
    width: wp(92),
    paddingHorizontal: wp(8),
    height: hp(5.5),
    fontSize: fp(1.6),
  },
});
