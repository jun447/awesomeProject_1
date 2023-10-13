import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevationCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevationCards</Text>
      <ScrollView  
              horizontal 
              style={styles.container} 
              showsHorizontalScrollIndicator={false}
      >
      <View style={[styles.card,styles.cardOne]}>
            <Text>RED</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Blue</Text>
        </View>
      </ScrollView>
    </View>
  )
}

/**
 * Styles for ElevationCards component.
 * @typedef {Object} ElevationCardsStyles
 * @property {Object} container - Style object for the container.
 * @property {Object} card - Style object for the card.
 * @property {Object} cardOne - Style object for the first card.
 * @property {Object} cardTwo - Style object for the second card.
 * @property {Object} cardThree - Style object for the third card.
 * @property {Object} headingText - Style object for the heading text.
 */
const styles = StyleSheet.create({
  container:{
    // flex: 1,
    // flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
     
  },
  card:{
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne:{
      backgroundColor: 'orangered',
  },
  cardTwo:{
      backgroundColor: '#3cb371',
  },
  cardThree:{
      backgroundColor: '#00ced1',
  },
  headingText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  }
})