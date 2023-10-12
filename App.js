import { StatusBar } from 'expo-status-bar';
import { 
  SafeAreaView,
        ScrollView,
        StyleSheet, 
        Text,
        View,
        useColorScheme
} from 'react-native';
import FlatCards from './components/FlatCards';

/**
 * The main component of the app.
 * @returns {JSX.Element} The JSX element representing the app.
 */
export default function App()  {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards/>
      </ScrollView>
    </SafeAreaView>  
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
