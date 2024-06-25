/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, View} from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { styles } from './config/app-them';




function App() {

  return (
    // <SafeAreaView>

      <View style={styles.background}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'black'}
        />

        <CalculatorScreen />

      </View>
    // </SafeAreaView>
  );
}
export default App;
