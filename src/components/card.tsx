import React from "react";
import { FlickModel } from "../models/flick";

interface CardProps{ flick: FlickModel }

const Card: React.FC<CardProps> = ({ flick }) =>{
    return (
        <gridLayout height="280" borderRadius="10" className="bg-secondary" rows="*, auto, auto" columns="*" margin="5 10" padding="0">
            <image row="0" margin="0" stretch="aspectFill" src={flick.image} />
            <label row="1" margin="10 10 0 10" fontWeight="700" className="text-primary" fontSize="18" text={flick.title} />
            <label row="2" margin="0 10 10 10" className="text-secondary" fontSize="14" textWrap="true" text={flick.description} />
        </gridLayout>
    );
}

export default Card;