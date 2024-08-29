import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {FlatList, ScrollView, View, TextInput, Text, StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={400} name="code-slash" style={styles.headerImage} />}>
    <Text>Some text</Text>
    <View>
      <Text>Some more text</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}
      />
    </View>
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
      defaultValue="You can type in me"
    />
    <Collapsible title='see list'>
        <View style={styles.container}>
        <FlatList
            data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
    </Collapsible>
  </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
