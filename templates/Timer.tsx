import React, { PropsWithChildren, useCallback, useRef, useState } from 'react';
import TimerButton from './TimerButton';
import { Text, View } from 'react-native';
import _ from 'lodash';

export interface TimerProps {}

/** TODO: Add comments about this component here */
const Timer: React.FunctionComponent<TimerProps> = React.memo(function Timer(
  props: PropsWithChildren<TimerProps>,
) {
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [nowTime, setNowTime] = useState<Date>(new Date());
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer>();

  const handlePress = useCallback(() => {
    if (!timerRunning) {
      setStartTime(new Date());
      setTimerInterval(setInterval(() => setNowTime(new Date()), 10));
    } else {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    }
    setTimerRunning(!timerRunning);
  }, [timerInterval, timerRunning]);

  return (
    <View>
      <TimerButton onPress={handlePress} />
      <Text>
        {_.floor((nowTime.getTime() - startTime.getTime()) / 1000, 2)}
      </Text>
    </View>
  );
});

export default Timer;
