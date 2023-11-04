import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { Home } from "./home";
import { Details } from "./datails";

/**
 * The main stack navigator for the whole app.
 */
const StackNavigator = stackNavigatorFactory();
export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator initialRouteName="home" screenOptions={{ headerStyle: {  backgroundColor: "white"}, headerShown: true }}>
            <StackNavigator.Screen name="home" component={Home} options={{title: 'NativeFlix'}} />
            <StackNavigator.Screen name="details" component={Details} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
