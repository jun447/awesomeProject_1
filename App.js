import { StatusBar } from 'expo-status-bar';
import { 
        StyleSheet, 
        Text,
        View,
        useColorScheme
} from 'react-native';

/**
 * The main component of the app.
 * @returns {JSX.Element} The JSX element representing the app.
 */
export default function App()  {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={
        isDarkMode ? styles.whiteText : styles.darkText
      }>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //left to right
    justifyContent: 'center', //top to bottom
    // backgroundColor: 'white',
    // give border of 1 px to this element
    // borderColor: 'black',
    // borderWidth: 6

  },
  whiteText: {
    color: 'white'
  },
  darkText: {
    color: 'black'
  }
});
