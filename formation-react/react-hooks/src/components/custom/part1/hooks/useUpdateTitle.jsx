import { useEffect } from "react";

const useUpdateTitle = (text) => {

    useEffect(() => {
        document.title = `Titre: ${text}`
    }, [text])

    return text
}

export default useUpdateTitle
