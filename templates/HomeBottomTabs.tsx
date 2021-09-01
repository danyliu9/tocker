import React from 'react';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { primaryLight } from '../styles/colors';
import { StyleSheet } from 'react-native';
import { fontSizes } from '../styles/sizes';

export interface HomeBottomTabsProps extends BottomTabBarProps {}

/** TODO: Add comments about this component here */
const HomeBottomTabs: React.FunctionComponent<HomeBottomTabsProps> = React.memo(
  function HomeBottomTabs(props: HomeBottomTabsProps) {
    return (
      <BottomTabBar
        {...props}
        activeBackgroundColor={primaryLight}
        labelStyle={styles.labelStyle}
      />
    );
  },
);

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: fontSizes.regular,
  },
});

export default HomeBottomTabs;
