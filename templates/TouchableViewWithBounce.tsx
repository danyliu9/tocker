import React, { PropsWithChildren, useCallback, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
  GestureResponderEvent,
} from 'react-native';

const defaultPressDownScale = 0.95;
const defaultTransitionTime = 150;

export interface TouchableViewWithBounceProps
  extends TouchableWithoutFeedbackProps {
  /** How small the view should transform to when clicking on it */
  pressDownScale?: number;

  /** How long it'll take to transition to the shrunk value in milliseconds */
  transitionTimeMs?: number;
}

/** TODO: Add comments about this component here */
const TouchableViewWithBounce: React.FunctionComponent<TouchableViewWithBounceProps> =
  React.memo(function TouchableViewWithBounce(
    props: PropsWithChildren<TouchableViewWithBounceProps>,
  ) {
    const {
      children,
      onPress,
      onPressIn,
      onPressOut,
      pressDownScale,
      transitionTimeMs,
      ...passThroughProps
    } = props;
    const scaleAnim = useRef<Animated.Value>(new Animated.Value(1));

    const handlePressIn = useCallback(
      (event: GestureResponderEvent) => {
        if (onPressIn) onPressIn(event);
        Animated.timing(scaleAnim.current, {
          toValue: pressDownScale ?? defaultPressDownScale,
          duration: transitionTimeMs ?? defaultTransitionTime,
          useNativeDriver: true,
        }).start();
      },
      [onPressIn, pressDownScale, transitionTimeMs],
    );

    const handlePress = useCallback(
      (event: GestureResponderEvent) => {
        if (onPress) onPress(event);
      },
      [onPress],
    );

    const handlePressOut = useCallback(
      (event: GestureResponderEvent) => {
        if (onPressOut) onPressOut(event);
        Animated.timing(scaleAnim.current, {
          toValue: 1,
          duration: transitionTimeMs ?? defaultTransitionTime,
          useNativeDriver: true,
        }).start();
      },
      [onPressOut, transitionTimeMs],
    );

    return (
      <TouchableWithoutFeedback
        {...passThroughProps}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}>
        <Animated.View
          style={[props.style, { transform: [{ scale: scaleAnim.current }] }]}>
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  });

export default TouchableViewWithBounce;
