/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);
import {
    Platform,
    StyleSheet,
    Text,
    View,Button,Image
} from 'react-native';
import { AppRegistry} from 'react-native';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation';

// import {createMaterialTopTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';




class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./notif.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (

            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

class HomeScreen extends React.Component {


    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./icon-push-notifications.png')}
                style={[styles.icon, {tintColor: tintColor}]}


            />
        ),
    };



    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
        Home: HomeScreen,Notifications:{
            screen: MyNotificationsScreen,
        },
        Details: DetailsScreen,
    }
);

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
});


// createMaterialTopTabNavigator
// createBottomTabNavigator

const RootStack=createBottomTabNavigator(
    {
        /*
        Home: HomeScreen,
        Settings: SettingsScreen,
        */

        Home: HomeStack,
        Settings: SettingsStack,

    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                //ios-information-circle is the circled i.
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor:'green',
            // activeTintColor: 'tomato',
            inactiveTintColor: 'tomato',
        },
    }
);

export default class App extends React.Component {



    componentWillmount(){


    }
    componentDidMount() {
        console.log("111");
        console.disableYellowBox = true;
    }

    componentWillUnmount() {
        console.log("2");

        // console.disableYellowBox = true;
    }


    render() {
        return <RootStack/>;
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon:{
        width: 140,
        height:140,
    },
});
