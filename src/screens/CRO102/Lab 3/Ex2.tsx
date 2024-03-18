import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Ex2Lab3 = () => {
  const data = Array.from({ length: 10 }, (_, index) => ({ id: index + 1 }));
  const viewableItems = useSharedValue<ViewToken[]>([]);

  const ListItem: React.FC<ListItemProps> = React.memo(({ item }) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = viewableItems.value.some(
        viewableItem => viewableItem.item.id === item.id && viewableItem.isViewable
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.6),
          },
        ],
      };
    });

    return <Animated.View style={[styles.container, styles.item, rStyle]} />;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    alignSelf: 'center',
    backgroundColor: 'green', 
    width: 400, // Adjust width and height as needed
    height: 100,
    margin: 7,
    borderRadius: 10
  },
});

export default Ex2Lab3;
