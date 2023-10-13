import { StyleSheet, Text, View ,Linking,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const ActionCard = () => {

  function openWebsite(website){
     Linking.openURL(website)
    console.log('Opening website')
  }

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card]}>
         <View style={[styles.headContainer]} >
            <Text style={[styles.headText]} >
                Whats your favourite website?
            </Text>
         </View>
         <Image
              source={{
                uri: 'https://images.pexels.com/photos/5732892/pexels-photo-5732892.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
              }}
              style={[styles.img]}
         />
         <View style={styles.bdyContainer} >
               <Text numberOfLines={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ipsa dolores itaque ducimus. Similique ex autem 
                 neque nemo ratione quae iste.
                </Text>
         </View>
         <View style={styles.FtrContainer} >
              <TouchableOpacity onPress={()=> openWebsite('https://www.google.com')}>
                <Text style={styles.FtrText} >Read More</Text>
              </TouchableOpacity>
         
              <TouchableOpacity onPress={()=> openWebsite('https://www.google.com')}>
                <Text style={styles.FtrText} >Follow Me</Text>
              </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        padding: 10,
    },
    card:{
        height: 400,
        width: 350,
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
        marginHorizontal: 16,
        marginVertical: 12,
        // borderColor: 'black',
        // borderWidth: 3,
      },
    img:{
        height: 180,
        width: 340,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        }
      },
    headContainer:{
            // borderWidth: 1,
            // borderColor: 'black',
            paddingHorizontal: 8,
            paddingVertical: 4,
            marginBottom: 10,
    },
    headText:{
            fontSize: 15,
            fontWeight: 'bold',
            
    },
    bdyContainer:{
        // borderWidth: 1,
        // borderColor: 'black',
        marginBottom: 5,
        marginVertical: 10,
    },
    FtrContainer:{
        width: "90%",
        // borderWidth: 1,
        // borderColor: 'black',
        // paddingHorizontal: 8,
        // paddingVertical: 4,
        padding: 10,

        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },
    FtrText:{
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 8,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
        shadowColor: '#000',
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 5,
    }
})