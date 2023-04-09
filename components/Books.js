import { Image, StyleSheet, Text, View } from "react-native";
import bookImage from '../assets/book.png';

export function Books ({category, title, author, image}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image ? <Image source={{uri: `https://covers.openlibrary.org/b/id/${image}-L.jpg`}} style={styles.image}/> : <Image source={bookImage}  style={styles.image}/>}
      </View>
      <View style={styles.textContainer}>
        {title && <Text style={styles.title} numberOfLines={1}>{title}</Text>}
        {author && <Text style={styles.author}  numberOfLines={1}>{author.length > 1 ? author[0] + ' + ' + author.length + ' authors' : author[0]}</Text>}
        <View style={styles.categories}>
            {category && <View style={styles.category}><Text style={styles.categoryText}  numberOfLines={1}>{category[0]}</Text></View>}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F3F5F9',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  imageContainer: {
    width: 70,
    height: 100,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'PM',
    color: '#35304B',
  },
  author: {
    fontSize: 16,
    fontFamily: 'PR',
    color: '#717171',
  },
  categories: {
    flexDirection: 'row',
    marginTop: 10,
  },
  category: {
    backgroundColor: '#D6D9E6',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  categoryText: {
    color: '#767676',
    fontFamily: 'PM',
  },
});
