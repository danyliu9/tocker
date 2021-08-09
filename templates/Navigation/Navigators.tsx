import React from 'react';
import { HomeTabsNavigator, RootStack } from './NavigationTree';
import SettingsScreen from '../SettingsScreen';
import HomeScreen from '../HomeScreen';
import AboutScreen from '../AboutScreen';
import HomeBottomTabs from '../HomeBottomTabs';

export const HomeNavigator: React.FunctionComponent = React.memo(
  function HomeNavigator() {
    return (
      <HomeTabsNavigator.Navigator
        tabBar={props => <HomeBottomTabs {...props} />}>
        <HomeTabsNavigator.Screen name="Home" component={HomeScreen} />
        <HomeTabsNavigator.Screen name="Settings" component={SettingsScreen} />
      </HomeTabsNavigator.Navigator>
    );
  },
);

export const RootNavigator: React.FunctionComponent = React.memo(
  function RootNavigator() {
    return (
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeNavigator} />
        <RootStack.Screen name="About" component={AboutScreen} />
      </RootStack.Navigator>
    );
  },
);
