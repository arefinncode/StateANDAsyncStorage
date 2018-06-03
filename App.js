import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import {AppState, Text} from 'react-native'

/*

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        console.log("When am i executed (4444)");
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}


class HomeScreen extends React.Component {


    static navigationOptions = {
        title: 'Welcome to the app!',
    };


    render() {
        console.log("at homeScreen (App Stack");
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}



class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {

        console.log("When am i executed (final)");
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}




class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // const userToken = await AsyncStorage.getItem('userToken');

        console.log("When am i executed (333)");
        let userToken = await AsyncStorage.getItem('userToken');

        console.log("userToken: ",userToken);

        // uncomment this line and see result
        // userToken=null;
        console.log("userToken: ",userToken);

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        console.log("When am i executed (222)");
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="crimson"/>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});




const AppStack = StackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = StackNavigator({ SignIn: SignInScreen });
*/
/*

export default SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

*/


// const RootStack=SwitchNavigator(
//     {
//         AuthLoading: AuthLoadingScreen,
//         App: AppStack,
//         Auth: AuthStack,
//     },
//     {
//         initialRouteName: 'AuthLoading',
//     }
// );


class AppStateExample extends React.Component {

    state = {
        appState: AppState.currentState
    }





    componentDidMount() {

        console.log("at  componentDidMount")
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        console.log("before componentWillUnmount")
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!')
        }
        console.log("this handler also executed when component did unmounted by keeping the app in bkground");
        this.setState({appState: nextAppState});
    }

    render() {
        console.log("Current state is: ",this.state.appState);
        return (
            <Text>Current state is: {this.state.appState}</Text>
        );
    }

}

export default class App extends React.Component {



    componentWillmount(){
        console.log("componentWillmount");



        // } catch (error) {
        //     // Error saving data
        //     console.log(error);
        // }

    }
    componentDidMount() {


        AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');

        const value = AsyncStorage.getItem('@MySuperStore:key');
        if (value !== null){
            // We have data!!
            console.log("promise value is: ",value.toString());

        }

        let UID123_object = {
            name: 'Chris',
            age: 30,
            traits: {hair: 'brown', eyes: 'brown'},
        };

        console.log("UID123_object: ",UID123_object);
        // You only need to define what will be added or updated
        let UID123_delta = {
            age: 31,
            traits: {eyes: 'blue', shoe_size: 10},
        };

        console.log("UID123_delta: ",UID123_delta);

        let final=AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
            AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
                AsyncStorage.getItem('UID123', (err, result) => {

                    if(!err){
                        console.log("Result: ",result);
                    }
                    else{
                        console.log("there was error");
                    }
                });
            });
        });


        console.log("final: ",final);




        // first user, initial values
        let UID234_object = {
            name: 'Chris',
            age: 30,
            traits: {hair: 'brown', eyes: 'brown'},
        };

        // first user, delta values
        let UID234_delta = {
            age: 31,
            traits: {eyes: 'blue', shoe_size: 10},
        };

        // second user, initial values
        let UID345_object = {
            name: 'Marge',
            age: 25,
            traits: {hair: 'blonde', eyes: 'blue'},
        };

        // second user, delta values
        let UID345_delta = {
            age: 26,
            traits: {eyes: 'green', shoe_size: 6},
        };

        let multi_set_pairs = [
            ['UID234', JSON.stringify(UID234_object)],
            ['UID345', JSON.stringify(UID345_object)],
        ];
        let multi_merge_pairs = [
            ['UID234', JSON.stringify(UID234_delta)],
            ['UID345', JSON.stringify(UID345_delta)],
        ];

        AsyncStorage.multiSet(multi_set_pairs, (err) => {
            AsyncStorage.multiMerge(multi_merge_pairs, (err) => {
                AsyncStorage.multiGet(['UID234', 'UID345'], (err, stores) => {
                    stores.map((result, i, store) => {
                        let key = store[i][0];
                        let val = store[i][1];
                        console.log(key, val);
                    });
                });
            });
        });

        // Console log results:
        // => UID234 {"name":"Chris","age":31,"traits":{"shoe_size":10,"hair":"brown","eyes":"blue"}}
        // => UID345 {"name":"Marge","age":26,"traits":{"shoe_size":6,"hair":"blonde","eyes":"green"}}
        console.log("componentDidMount");
        console.disableYellowBox = true;
    }

    componentWillUnmount() {

        console.log("componentWillUnmount");

        //console.disableYellowBox = true;
    }


    render() {
        return <AppStateExample/>;
    }


}
