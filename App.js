import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';



const navigator = createStackNavigator({
    // screens
    Search: SearchScreen,
}, {
    // generic styling
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: "Business Search",
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
