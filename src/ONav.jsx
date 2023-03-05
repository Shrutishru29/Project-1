import React from "react";
import OMenu from "./OMenu";
import OLogo from "./OLogo"
import STYLE from "./Ola.module.css"


const ONav=()=>
{
    return(
        <>
        <div id={STYLE.Menu}>
        <OLogo/>

        <OMenu/>



        </div>
        </>
    )
}
export default ONav