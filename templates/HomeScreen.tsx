import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './Navigation/NavigationTree';
import { primary } from '../styles/colors';
import { fontSizes, sizes } from '../styles/sizes';
import Button from './Button';
import ButtonView, { ButtonViewFeedback } from './ButtonView';
import TouchableViewWithBounce from './TouchableViewWithBounce';
import { faBacon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import TimerButton from './TimerButton';
import Timer from './Timer';

interface HomeScreenProps
  extends StackScreenProps<RootStackParamList, 'Home'> {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = React.memo(
  function HomeScreen(props: HomeScreenProps) {
    const { navigation } = props;

    const handleAboutClick = useCallback(() => {
      navigation.navigate('About', { version: '0.0.1' });
    }, [navigation]);
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tocker</Text>
        </View>
        <Timer />
        <Button label="About" onPress={handleAboutClick} icon={faBacon} />
        {/*<TouchableViewWithBounce onPress={handleAboutClick}>*/}
        {/*  <Text>Hello testing</Text>*/}
        {/*</TouchableViewWithBounce>*/}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 'auto',
    marginBottom: sizes.M,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSizes.title,
    textAlign: 'center',
    backgroundColor: primary,
    borderRadius: sizes.M,
    padding: sizes.M,
  },
});

export default HomeScreen;
