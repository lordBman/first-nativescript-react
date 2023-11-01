import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const StackNavigator = stackNavigatorFactory();
const Screens = () =>{
    return (
        <StackNavigator.Navigator initialRouteName="Screen One" screenOptions={{ headerStyle: {  backgroundColor: "white"}, headerShown: true }}>
            <StackNavigator.Screen name="One" component={ScreenOne} />
            <StackNavigator.Screen name="Two" component={ScreenTwo} />
        </StackNavigator.Navigator>
    );
}

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
    <BaseNavigationContainer>
       <Screens />
    </BaseNavigationContainer>
);
