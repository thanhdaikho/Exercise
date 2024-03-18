import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, Easing } from 'react-native-reanimated';

const Ex1Lab3 = () => {
  const offset = useSharedValue(0);

  const moveBox = () => {
    offset.value = withSequence(
      withTiming(1500, { duration: 4500 }),
    );
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  });

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={moveBox}>
        <View>
          <Text style={styles.buttonText}>Move Box</Text>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.box, animatedStyles]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 7,
    marginTop: 15,
    backgroundColor: 'blue',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Ex1Lab3;
