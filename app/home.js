import { Feather } from '@expo/vector-icons';
import { Stack } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
export default function Home () {
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.searchContainer}>
        <Feather name="search" size={22} color="black" style={styles.searchIcon}/>
        <TextInput style={styles.searchInput} placeholder="Search for 'Lord of the Rings'" onChangeText={(value) => setQuery(value)}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 308,
    width: '100%',
    marginHorizontal: 'auto',
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
    fontSize: 13,
    color: '#767676',
    fontWeight: 600
  },
})