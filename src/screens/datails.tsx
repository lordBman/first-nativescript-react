import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../NavigationParamList";
import { FlickService } from '../services/flicks';
import { FlickModel } from '../models/flick';

type DetailsProps = {
    route: RouteProp<MainStackParamList, "details">,
    navigation: FrameNavigationProp<MainStackParamList, "details">,
};

export const  Details : React.FC<DetailsProps> = ({ navigation, route }) => {
    const flickId = route.params.flickId;

    const flick = FlickService.getInstance().getFlickById(flickId) as FlickModel;
    navigation.setOptions({ title: flick.title });

    return (
        <scrollView height="100%">
            <stackLayout>
                <image margin="0" stretch="aspectFill" src={flick?.image} />
                <stackLayout padding="10 20">
                    { flick.details.map((flickDetails, index) => (
                        <stackLayout key={index}>
                            <label marginTop="15" fontSize="16" fontWeight="700" class="text-primary" textWrap="true" text={flickDetails.title} />
                            <label fontSize="14" class="text-secondary" textWrap="true" text={flickDetails.body} />
                        </stackLayout>))
                    }
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    
});
