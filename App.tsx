

import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text
} from 'react-native';






function App(): JSX.Element {
  const moveBall = () => {

  }

  return (
    <View>
      <Animated.View style={styles.animatedView}>

      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Move ball</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  animatedView: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'red'
  }
});

export default App;
