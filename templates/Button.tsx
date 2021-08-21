import React, { PropsWithChildren } from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { StyleSheet, Text, View } from 'react-native';
import ButtonView, { ButtonViewFeedback } from './ButtonView';
import { primary } from '../styles/colors';
import { fontSizes, sizes } from '../styles/sizes';
import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-native-fontawesome';

export interface ButtonProps {
  icon?: IconDefinition;
  iconProps?: Omit<FontAwesomeIconProps, 'icon'>;
  onPress: () => unknown;
  label?: string;
}

/**
 * The default button provided by react-native is not great, so we instead use
 * a custom button that allows for much more control
 */
const Button: React.FunctionComponent<ButtonProps> = React.memo(function Button(
  props: PropsWithChildren<ButtonProps>,
) {
  const { label, icon, onPress, iconProps } = props;
  const iconWidth = iconProps ? iconProps.size : fontSizes.regular;
  return (
    <ButtonView
      onPress={onPress}
      buttonViewFeedBack={ButtonViewFeedback.shrink}>
      <View style={styles.default}>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            size={iconWidth}
            {...iconProps}
            style={[styles.icon, iconProps ? iconProps.style : {}]}
          />
        )}
        {label && <Text style={styles.text}>{label}</Text>}
        {/*We only want to have this spacer if there's a label and icon*/}
        {icon && label && (
          <View
            style={[
              styles.icon,
              { width: iconWidth },
              iconProps ? iconProps.style : {},
            ]}
          />
        )}
      </View>
    </ButtonView>
  );
});

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: sizes.XS,
    paddingVertical: sizes.XS,
  },
  text: {
    fontSize: fontSizes.regular,
  },
  icon: {
    paddingHorizontal: sizes.M,
  },
});

export default Button;
