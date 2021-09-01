// When adding imports, make sure this import stays at the top.
// See https://reactnative.dev/docs/navigation#installation-and-setup
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './templates/Navigation/Navigators';

interface State {}

/** TODO: Add comments about this component here */
class App extends React.PureComponent<{}, State> {
  render() {
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
