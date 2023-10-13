import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
        <View style={styles.container}>
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
        </View>    
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
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