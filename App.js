import React, {useEffect} from 'react'
import MainStackNavigator from "./src/RootStack";
import {Provider} from "react-redux";
import stores from "./src/redux/stores";
import CommonDataManager from "./src/Utiils/Singleton";
 function App() {
     let theme = CommonDataManager.getInstance().getTheme();
     console.log("theme ==App==>>>",theme);

     return (
        <Provider store={stores}>
                <MainStackNavigator/>
        </Provider>
    )
}
export default App;
