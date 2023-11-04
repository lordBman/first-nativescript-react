import { ItemEventData } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { ListView, StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../NavigationParamList";
import { FlickService } from '../services/flicks';
import { FlickModel } from '../models/flick';
import Card from '../components/card';

interface HomeProps {
    route: RouteProp<MainStackParamList, "home">,
    navigation: FrameNavigationProp<MainStackParamList, "home">,
}

export const Home: React.FC<HomeProps> = ({ navigation, route }) => {
    const flicks = FlickService.getInstance().getFlicks();

    const cellFactory = (flick: FlickModel) => {
        return ( <Card flick={flick}/> );
    }

    const onItemTap = (args: ItemEventData) => {
        const index = args.index
        const flick = flicks[index]
        navigation.navigate('details', {
          flickId: flick.id
        })
    }
    
    return (
        <stackLayout height="100%">
            <ListView items={flicks} cellFactory={cellFactory} onItemTap={onItemTap} separatorColor="transparent" height="100%" />
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    
});
