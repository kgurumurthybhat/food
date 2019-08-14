import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from '../food/src/screens/SearchScreen';
import ResultsShowScreen from '../food/src/screens/ResultsShowScreen';


const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen

},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  });

export default createAppContainer(navigator);
