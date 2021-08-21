import React, { PropsWithChildren } from 'react';
import ButtonView, { ButtonViewFeedback } from './ButtonView';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { primary, primaryLight, secondary } from '../styles/colors';

export interface TimerButtonProps {
  onPress: () => unknown;
  style?: StyleProp<ViewStyle>;
}

/** TODO: Add comments about this component here */
const TimerButton: React.FunctionComponent<TimerButtonProps> = React.memo(
  function TimerButton(props: PropsWithChildren<TimerButtonProps>) {
    const { onPress, style } = props;
    return (
      <ButtonView
        onPress={onPress}
        buttonViewFeedBack={ButtonViewFeedback.shrink}
        style={[{ alignItems: 'center' }, style]}>
        <View style={styles.container}>
          <FontAwesomeIcon icon={faClock} size={80} color={secondary} />
        </View>
      </ButtonView>
    );
  },
);

const containerSize = 120;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    width: containerSize,
    height: containerSize,
    borderRadius: containerSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TimerButton;
