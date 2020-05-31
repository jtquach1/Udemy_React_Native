// as of 2/9/2020, createStackNavigator no longer in react-navigation
import { createAppContainer }  from 'react-navigation';
import { createStackNavigator }  from 'react-navigation-stack';
// import screens from ./src/screens
import SearchScreen from './src/screens/SearchScreen';

// 1st arg: list all different routes that the project has
const navigator = createStackNavigator({
  // the keys we provide are arbitrary, but values must be real from ./src/screens
  // so left side can be Search, mySearchScreen, etc.
  Search: SearchScreen,
}, {
  // 2nd arg: object with options inside
  // Default route we want to show whenever the application starts up
  // We will have multiple different screens later on
  initialRouteName: 'Search',
  // Options to be used for every different screen
  // Use dNO to customize header displayed at top of every screen
  defaultNavigationOptions: {
    // title option is the text that appears on the header of the app
    // before, we used a title of 'App' in rn-starter
    title: 'Business Search',
  },
});

// Why this line?
// App.js is a very special file. When our app first starts up, anything we 
// export from it will be taken by RN and automatically shown on the device screen.
// We always have to export a React component from App.js.
// createAppContainer creates a default app component (React component)
// and displays whatever content the navigator is producing inside the component.
export default createAppContainer(navigator);