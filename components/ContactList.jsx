import { ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
          uid: 1,
          name: 'John Doe',
          phone: '0123456789',
          email: 'johndoe@gmail.com',
          imageUrl:'https://avatars.githubusercontent.com/u/72307789?s=400&v=4'
        },
        {
          uid: 2,
          name: 'Jane Smith',
          phone: '9876543210',
          email: 'janesmith@gmail.com',
          imageUrl:'https://avatars.githubusercontent.com/u/72307789?s=400&v=4'
        },
        {
          uid: 3,
          name: 'Bob Johnson',
          phone: '5555555555',
          email: 'bobjohnson@gmail.com',
          imageUrl:'https://avatars.githubusercontent.com/u/72307789?s=400&v=4'
        },
        {
          uid: 4,
          name: 'Alice Williams',
          phone: '1111111111',
          email: 'alicewilliams@gmail.com',
          imageUrl:'https://avatars.githubusercontent.com/u/72307789?s=400&v=4'
        },
        {
          uid: 5,
          name: 'Tom Davis',
          phone: '2222222222',
          email: 'tomdavis@gmail.com',
          imageUrl:'https://avatars.githubusercontent.com/u/72307789?s=400&v=4'
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}  >ContactList</Text>
      <ScrollView>
        {
          contacts.map((contact)=>{
            return(
                <View key={contact.uid} style={styles.card}>
                <Image style={[styles.img, styles.rounded]} source={{uri: contact.imageUrl}} />
                <View style={styles.headContainer}>
                  <Text style={styles.headText} >{contact.name}</Text>
                  <Text style={styles.headText} >{contact.phone}</Text>
                  <Text style={styles.headText} >{contact.email}</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
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
    },
    img: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    rounded: {
      borderRadius: 25,
    },
    headContainer: {
      flex: 1,
    },
    headText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
  });