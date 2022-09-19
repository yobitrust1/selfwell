
// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import food1 from './food.json';

const { width, height } = Dimensions.get("window");

const SearchFood = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [food, setFood] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  var back = '<';

  useEffect(() => {
    getFoods();
  }, [food]);

  const getFoods =  () => {
    
      setFood(food1);
      setFilteredDataSource(food1);
      setMasterDataSource(food1);
     
    }  
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.text} onPress={() => getItem(item)}>
        {item.name.charAt(0).toUpperCase()+ item.name.substring(1).toLowerCase() } {'\n'} 
        
            <Text style={styles.text1} >
                { item.calories}cals 
            </Text>
            <Text style={styles.text2}>
                / { item.servingDescription } (100g)
            </Text>
        
        
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    const name = item.name;
    navigation.navigate("FoodChart", {name})
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => {navigation.navigate('DailyFood')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Search food</Text>
          </View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="What you eat today ?"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    height: height * 0.1,
    width: width,
    flexDirection: 'row'
  },
  back: {
    color: 'black',
    fontSize: 60,
    marginLeft: width * 0.05,
    marginTop: - height * 0.03,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: height * 0.03,
    marginLeft: width * 0.15,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 2,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#57BED1',
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20
  },
  text: {
    paddingLeft: 20,  
    fontSize: 18,
    color: '#000000'
  },
  text1: {
  
    fontSize: 16,
    color: '#3DC297',
  },
  text2: {
    fontSize: 16,
    color: '#aab2bd'
  }
});

export default SearchFood;
 