import { Image, StyleSheet, Text, View } from "react-native";
import bookImage from '../assets/book.png';
export function Books () {
  return (
    <View style={styles.container}>
      <Image source={bookImage}/>
      <View>
        <Text style={{fontSize: 16, fontFamily: 'PM', color: '#35304B'}}>Lord of the Rings</Text>
        <Text style={{fontSize: 16, fontFamily: 'PR', color: '#717171'}}>J. R. R. Tolkien</Text>
        <View style={styles.categories}>
            <View><Text style={{color: '#767676', fontFamily: 'PM'}}>Fiction</Text></View>
            <View><Text style={{color: '#767676', fontFamily: 'PM'}}>Adventure</Text></View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: 10, width: '100%', 
    backgroundColor: '#FFF',
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
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)'
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  }
})