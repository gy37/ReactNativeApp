import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet, SectionList} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  secontionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)'
  }
});

const FastListTest = () => {
  const [text, setText] = useState('');
  return (
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
          {key: 'Julie'}
        ]}
        renderItem={
          ({item}) => <Text style={styles.item}>{item.key}</Text>
        }
      >
      </FlatList>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {title: 'J', data: ['Jackson', 'James', 'Joel', 'John', 'Jillian', 'Jimmy', 'Julie']},
        ]}
        renderItem={
          ({item}) => <Text style={styles.item}>{item}</Text>
        }
        renderSectionHeader={
          ({section})=><Text style={styles.secontionHeader}>{section.title}</Text>
        }
        keyExtractor={
          (item, index)=>index
        }
      >

      </SectionList>
    </View>
  );
}

export default FastListTest;
