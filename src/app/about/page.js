'use client';

import { useState} from "react";
import { AccordionCustom } from "../CharFunctions";
import { accordionItems } from "./aboutData";




export default function About(){
    return(
        <div className="flex justify-center mt-20">
    <div className="w-10/12">
       <AccordionCustom accordionItems={accordionItems} />
    </div>
    </div>
    )
}