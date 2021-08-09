import React, { PropsWithChildren } from 'react';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';

export interface HomeScreenTabsProps extends BottomTabBarProps {}

/** TODO: Add comments about this component here */
const HomeScreenTabs: React.FunctionComponent<HomeScreenTabsProps> = React.memo(
  function HomeScreenTabs(props: PropsWithChildren<HomeScreenTabsProps>) {
    const { navigation, state, descriptors } = props;
    return (
      <BottomTabBar
        navigation={navigation}
        state={state}
        descriptors={descriptors}
      />
    );
  },
);

export default HomeScreenTabs;
