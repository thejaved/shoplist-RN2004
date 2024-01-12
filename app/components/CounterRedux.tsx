import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppButton, AppInput} from '.';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fonts} from '../config';
import {useDispatch, useSelector} from 'react-redux';

interface CounterReduxProps {}

const CounterRedux: React.FC<CounterReduxProps> = ({}) => {
  const counterReducer = useSelector((state: any) => state.counterReducer);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.lableStyle}>{counterReducer.count}</Text>
      <AppInput
        onChangeText={val =>
          dispatch({type: 'changeValue', payload: parseInt(val)})
        }
        keyboardType="number-pad"
        containerStyle={styles.containerStyle}
        placeholder="Enter Number"
      />
      <AppButton
        title="Increment"
        containerStyle={styles.containerStyle}
        onPress={() => dispatch({type: 'increment'})}
      />
      <AppButton
        title="Decrement"
        containerStyle={styles.containerStyle}
        onPress={() => dispatch({type: 'decrement'})}
      />
    </View>
  );
};

export default CounterRedux;

const styles = StyleSheet.create({
  container: {
    padding: responsiveWidth(5),
  },
  lableStyle: {
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    fontFamily: fonts.KanitSemiBold,
  },
  containerStyle: {
    marginTop: responsiveHeight(2),
  },
});
