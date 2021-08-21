import React, { PropsWithChildren } from 'react';
import {
  StyleProp,
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';
import TouchableViewWithBounce, {
  TouchableViewWithBounceProps,
} from './TouchableViewWithBounce';

export enum ButtonViewFeedback {
  highlight = 'highlight',
  opacity = 'opacity',
  shrink = 'shrink',
  none = 'none',
}

export interface ButtonViewProps {
  onPress: () => unknown;

  /**
   * What happens with the button when it's clicked. Defaults to none if not
   * passed
   */
  buttonViewFeedBack?: ButtonViewFeedback;

  style?: StyleProp<ViewStyle>;

  transitionTimeMs?: number;
}

/** TODO: Add comments about this component here */
const ButtonView: React.FunctionComponent<ButtonViewProps> = React.memo(
  function ButtonView(props: PropsWithChildren<ButtonViewProps>) {
    const { onPress, children, style, transitionTimeMs } = props;

    let buttonViewFeedback: ButtonViewFeedback = props.buttonViewFeedBack
      ? props.buttonViewFeedBack
      : ButtonViewFeedback.none;
    let ViewWrapper;
    let viewWrapperProps:
      | TouchableOpacityProps
      | TouchableHighlightProps
      | TouchableViewWithBounceProps
      | TouchableWithoutFeedbackProps = { onPress: onPress, style };
    switch (buttonViewFeedback) {
      case ButtonViewFeedback.highlight:
        ViewWrapper = TouchableHighlight;
        break;
      case ButtonViewFeedback.opacity:
        ViewWrapper = TouchableOpacity;
        break;
      case ButtonViewFeedback.shrink:
        ViewWrapper = TouchableViewWithBounce;
        viewWrapperProps = { ...viewWrapperProps, transitionTimeMs };
        break;
      case ButtonViewFeedback.none:
        ViewWrapper = TouchableWithoutFeedback;
        break;
    }
    return <ViewWrapper {...viewWrapperProps}>{children}</ViewWrapper>;
  },
);

export default ButtonView;
