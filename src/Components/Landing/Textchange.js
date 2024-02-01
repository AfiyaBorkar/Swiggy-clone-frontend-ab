import React from 'react'
import { useState,useEffect } from "react";

export default function Textchange() {
    let [textThatChanges,settextThatChanges]=useState(0);
 
    useEffect(() => {
  let textArray = ['Hungry', 'Cooking gone wrong?', 'Movie marathon?', 'Late night at office?', 'Game night?'];
  let c=0;
      settextThatChanges(textArray[c]);
      const interval = setInterval(() => {
         settextThatChanges(textArray[c]);
         c++;
  
         if(c===textArray.length)
         {
           c=0;
         }
      }, 2000);
      return () => clearInterval(interval);
   }, []);
    return (
        <div>
            {textThatChanges}
        </div>
    )
}
