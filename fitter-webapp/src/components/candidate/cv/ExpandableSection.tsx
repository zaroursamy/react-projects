"use client";

import {PropsWithChildren, ReactNode, useState} from 'react';
import {ButtonIcon} from "@/components/candidate/cv/ButtonIcon";

type ExpandableSectionProps = {
    title: string,
}

function ExpandableSection({title, children}: PropsWithChildren<ExpandableSectionProps>) {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="grid grid-rows-1 gap-x-0 gap-y-4">
            <div className="text-2xl col-end-1">
                <h1>{title}</h1>
            </div>
            <div className="flex justify-items-end col-start-1">
                <ButtonIcon expand={() => setIsExpanded(!isExpanded)}/>
            </div>
            {isExpanded && children}
        </div>

    );
}

export default ExpandableSection;