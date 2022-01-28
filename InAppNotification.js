import { InAppNotificationProvider } from 'react-native-in-app-notification';
import React, {useEffect} from "react";
import App from "./App";
import messaging from "@react-native-firebase/messaging";
import {Alert} from "react-native";

class AppWithNotifications extends React.Component {

    render() {
        return (
            <InAppNotificationProvider>
                <App/>
            </InAppNotificationProvider>
        );
    }
}
export default AppWithNotifications;
