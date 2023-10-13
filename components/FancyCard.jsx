import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}> Fancy Places</Text>
        <View style={[styles.card,styles.cardElevated]}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2020/01/25/18/47/lahore-4793144_1280.jpg',
              }}
              style={[styles.img]}
            />
            <View style={styles.cardBdy}>
                <Text style={styles.cardTitle} >Badshai Masjid </Text>
                <Text style={styles.cardLabel} >Pakistan Lahore</Text>
                <Text style={styles.cardFooter} >35 km away</Text>
            </View>
        </View>    
    </View>
  )
}

export default FancyCard

/**
 * Styles for FancyCard component.
 * @typedef {Object} FancyCardStyles
 * @property {Object} cardBdy - Style object for card body.
 * @property {Object} img - Style object for card image.
 * @property {Object} card - Style object for card.
 * @property {Object} cardLabel - Style object for card label.
 * @property {Object} cardTitle - Style object for card title.
 * @property {Object} cardFooter - Style object for card footer.
 * @property {Object} cardElevated - Style object for elevated card.
 * @property {Object} headingText - Style object for heading text.
 */
const styles = StyleSheet.create({
    cardBdy:{   
        // borderColor: 'black',
        // borderWidth: 2,
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 10,
    },
    img:{
        height: 180,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 10,
    },
    card:{
        // borderWidth: 3,
        // borderColor: 'red',
        padding: 10,
        // flexDirection: 'row',
        borderRadius: 10,
        height: 360,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    cardLabel:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 6,
        // padding: 10,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    cardTitle:{
        fontSize: 22 ,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        // padding: 10,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    cardFooter:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        padding: 10,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    cardElevated:{
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation: 5,
    },
    headingText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        padding: 10,
        // borderWidth: 1,
        // borderColor: 'black',
    }
})