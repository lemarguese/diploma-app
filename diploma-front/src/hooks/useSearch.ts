import {useCallback, useEffect, useRef, useState} from "react";

export const useSearch = (text?: string) => {
    const [searchedText, setSearchedText] = useState<string[]>([]);
    const searchZone = useRef(document.getElementById('root'))

    useEffect(() => {
        if (text) searchAPatternInsideWebsite(text)
        else setSearchedText([])
    }, [text])

    const searchAPatternInsideWebsite = useCallback((pattern: string) => {
        if (searchZone.current) {
            const searchText = searchZone.current.innerText.split(pattern).slice(1)
            // 5 max
            const res = searchText.map(text => `...${text.slice(0, 50)}...`).slice(0, 5)
            setSearchedText(res)
        }
    }, [searchZone])

    return [searchedText];
}
