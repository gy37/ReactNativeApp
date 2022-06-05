import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet, SectionList, TouchableOpacity} from 'react-native';

const FastListTest = () => {
  const [selectedKey, setSelectedKey] = useState('');
  const renderItem = ({item}) => {
    const backgroundColor = item.key==selectedKey ? '#6e3b6e' : '#f9c2ff';
    return (
      <TouchableOpacity onPress={()=>setSelectedKey(item.key)} style={[styles.item, {backgroundColor}]}>
        <Text style={{fontSize: 18}}>{item.key}</Text>
      </TouchableOpacity>
    );
  };
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
        renderItem={renderItem}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    height: 44,
    marginHorizontal: 16,
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

export default FastListTest;
