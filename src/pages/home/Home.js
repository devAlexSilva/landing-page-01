import React from "react";
import { InfoSection } from "../../components/infoSection/InfoSection";
import { HomeObjOne } from "./Data";

export const Home = () => {
    return(
        <>
        <InfoSection {...HomeObjOne} />
        </>
    )
}