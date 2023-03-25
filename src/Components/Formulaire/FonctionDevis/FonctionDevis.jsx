// import { useState, useEffect } from "react";

export default function FonctionDevis({ devisPrice }){
    if(devisPrice === "titleSelect"){
        return ( 
        <div className="noPrice">
            <h1>---€</h1>
            </div>
        )
    } 
    return(
<h1>{`${devisPrice * 24} €`}</h1>
    )
}