import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList, Text } from 'react-native';

const Develop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(json => setData(json.movies))
    .catch(error => console.log(error))
    .finally(() => setIsLoading(false));
  }, []);
  return (
    <View style={{ flex: 1, padding: 24}}>
      {isLoading
      ? <ActivityIndicator />
      : <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Develop;
