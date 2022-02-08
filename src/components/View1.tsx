import { View1Props } from "props/View1Props";
import React from "react";

export function View1 ( props: View1Props) {
    const {displayText} = {...props};
    return( 
        <div style={{backgroundColor : 'red'}}>
        {displayText}
        {props.children}
    </div>
 );
  
}