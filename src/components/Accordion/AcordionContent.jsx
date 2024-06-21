import React from 'react';
import {useAccordionContext} from "./Accordion.jsx";

const AcordionContent = ({id,className, children}) => {
    const  {openItemId} = useAccordionContext()

    const isOpen = openItemId === id

    return (
        <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} open`}>{children}</div>
    );
};

export default AcordionContent;