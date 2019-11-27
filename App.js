import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator({
    // screens
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
},
{
    // generic styling
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: "Foodie Search",
        // headerStyle: {
        //     backgroundColor: '#DA1A35'
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontStyle: 'italic'
        // }
    }
});


export default createAppContainer(navigator)
