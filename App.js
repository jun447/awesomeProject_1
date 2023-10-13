import { StatusBar } from 'expo-status-bar';
import { 
  SafeAreaView,
        ScrollView,
        StyleSheet, 
        Txt,
        View,
        useColorSchemee
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevationCards from './components/ElevationCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

/**
 * The main component of the app.
 * @returns {JSX.Element} The JSX element representing the app.
 */
export default function App()  {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards/>
          <ElevationCards/>
          <FancyCard/>
          <FancyCard/>
          <FancyCard/>
          <FancyCard/>
          <ActionCard/>
          <ActionCard/>
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
