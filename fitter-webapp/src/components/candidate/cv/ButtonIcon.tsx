import {ChevronDown, ChevronRight} from "lucide-react"

import { Button } from "@/components/ui/button"
import exp from "node:constants";
import {useState} from "react";

type ButtonIconProps = {
    expand: () => void
}

export function ButtonIcon({expand}: ButtonIconProps) {

    const [isExpanded, setIsExpanded] = useState(false)
    const iconChevron = isExpanded ? ( <ChevronDown className="h-4 w-4" />) :  <ChevronRight className="h-4 w-4" />


    const updateIsExpanded = () => {
        setIsExpanded(!isExpanded)
        expand()
    }

    return (
        <Button variant="outline" size="icon" onClick={updateIsExpanded}>
            {iconChevron}
        </Button>
    )
}
