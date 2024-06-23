import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/images/Paimon 1.png'),
    require('../assets/images/Paimon 2.png'),
    require('../assets/images/Paimon 3.png'),
    require('../assets/images/Paimon 4.png'),
    require('../assets/images/Paimon 5.png'),
    require('../assets/images/Paimon 6.png'),
    require('../assets/images/Paimon 7.png'),
    require('../assets/images/Paimon 8.png'),
    require('../assets/images/Paimon 9.png'),
    require('../assets/images/Paimon 10.png'),
    require('../assets/images/Paimon 11.png'),
    require('../assets/images/Paimon 11.png'),
    require('../assets/images/gengif/Aether 1.gif'),
    require('../assets/images/gengif/Cat.gif'),
    require('../assets/images/gengif/Aether 2.gif'),
    require('../assets/images/gengif/Lumine 1.gif'),
    require('../assets/images/gengif/Lumine 2.gif'),

   

  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
