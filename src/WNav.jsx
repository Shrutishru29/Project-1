import React from "react";
import WLogo from  "./WLogo"
import WMenu from "./WMenu"
import STYLE from  "./Whatsapp.module.css"


const WNav=()=>
{
    return(
        <>
        <div id={STYLE.divBlock}>

        <WLogo/>
        <WMenu/>



        </div>
        </>
    )
}
export default WNav