import React from "react";
import HMenu from "./HMenu";
import HLogo from "./HLogo"
import STYLE from "./Hotstar.module.css"


const HNav=()=>
{
    return(
        <>
        <div id={STYLE.Menu}>
        <HLogo/>

        <HMenu/>



        </div>
        </>
    )
}
export default HNav