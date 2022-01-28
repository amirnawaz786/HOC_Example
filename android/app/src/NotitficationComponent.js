import React, { Component } from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import { withInAppNotification } from 'react-native-in-app-notification';

class MyApp extends Component {
    render() {
        return (
            <View style={{backgroundColor:'red'}}>
                <Text>This is my app</Text>
                <TouchableHighlight
                    onPress={() => {
                        this.props.showNotification({
                            title: 'You pressed it!',
                            message: 'The notification has been triggered',
                            onPress: () => Alert.alert('Alert', 'You clicked the notification!'),
                            additionalProps: {
                                type: 'error'
                            },
                        });
                    }}
                >
                    <Text>Click me to trigger a notification</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default withInAppNotification(MyApp);
