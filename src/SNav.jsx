import React from "react";
import SMenu from "./SMenu";
import SLogo from "./SLogo"
import STYLE from "./Snapchat.module.css"


const SNav=()=>
{
    return(
        <>
        <div id={STYLE.Menu}>
        <SLogo/>
        <SMenu/>



        </div>
        </>
    )
}
export default SNav