import { Image, StyleSheet, Text, View } from "react-native";
import bookImage from '../assets/book.png';
export function BooksList ({category, title, author, image}) {

  return (
    <View style={styles.container}>
      <View style={{width: 70, height: 100, borderRadius: 4}}>
        {image ? <Image source={{uri: `https://covers.openlibrary.org/b/id/${image}-L.jpg`}} style={{width: '100%', height: '100%', borderRadius: 6}}/> : <Image source={bookImage}  style={{width: '100%', height: '100%', borderRadius: 6}}/>}
      </View>
      <View>
        {title && <Text style={{fontSize: 16, fontFamily: 'PM', color: '#35304B'}} numberOfLines={1}>{title}</Text>}
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
    gap: 10, 
    width: 300, 
    overflow: 'hidden',
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