import { Feather } from '@expo/vector-icons';
import { Stack } from "expo-router";
import { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { Books } from '../components/Books';
export default function Home () {
  const [query, setQuery] = useState("");
  const bookList = ["Harry Potter", "The Witcher", "Sherlock", "Lord of the Rings"]
  StatusBar.setHidden(true, 'fade');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.pageContainer}>
        <Stack.Screen 
          options={{
            headerShown: false,
            headerBackVisible: false,
          }}
        />
        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={22} color="black" style={styles.searchIcon}/>
          <TextInput style={styles.searchInput} placeholder="Search for 'Lord of the Rings'" onChangeText={(value) => setQuery(value)}/>
        </View>

        {/* Book Horizontal List */}
        <View>
          <FlatList
            style={styles.listContainer}
            data={bookList}
            renderItem={({item}) => (
              <View style={[styles.bookList]}>
                <Text style={{color: '#ABABB7', fontFamily: 'PR', fontSize: 12}}>{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item.indexOf}
            horizontal={true}
            showsVerticalScrollIndicator={false}
          />
        </View>
      
        {/* Popular Books */}
        <View>
          <Text style={{marginTop: 38, fontSize: 22, fontFamily: 'PM', color: '#35304B'}}>Popular Books</Text>

          <View style={{display: 'flex', gap: 10, marginTop: 20}}>
            <Books />
            <Books />
            <Books />
            <Books />
            <Books />
            <Books />
            <Books />
            <Books />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFC',
    width: '100%',
    height: '100%',
  },
  pageContainer: {
    maxWidth: '100%',
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 10,
  },
  searchContainer: {
    marginTop: 72,
  },
  searchIcon: {
    position: 'absolute',
    top: 8, 
    left: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: '#35304B',
    borderRadius: 100,
    paddingRight: 20,
    paddingLeft: 40,
    paddingVertical: 10,
    position: 'relative',
    fontFamily: 'PM',
    fontSize: 13,
    color: '#767676',
    width: '100%',
    marginHorizontal: 'auto',
  },
  listContainer: {
    marginTop: 38,
    paddingVertical: 10,
    marginHorizontal: 'auto',
  },
  bookList: {
    backgroundColor: '#F3F5F9',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    elevation: 2, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // for web
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)'
  }
  
})