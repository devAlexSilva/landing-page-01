import React from "react";
import { InfoSection } from "../../components/infoSection/InfoSection";
import { HomeObjFour, HomeObjOne, HomeObjThree, HomeObjTwo } from "./Data";

export const Home = () => {
    return(
        <>
        <InfoSection {...HomeObjOne} />
        <InfoSection {...HomeObjTwo} />
        <InfoSection {...HomeObjThree} />
        <InfoSection {...HomeObjFour} />
        </>
    )
}