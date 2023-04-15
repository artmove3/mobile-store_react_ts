import { createContext, useCallback, useState } from "react";
import { data } from "../data/data";

export interface IData {
    "picture": string
    "name": string
    "manufacturer": string
    "releaseYear": number
    "screenDiagonal": number
    "mCountry": string
    "memory": string
    "refreshRate": string
    "NFC": boolean
    "eSIMsupport": boolean
    "wirelessCharge": boolean
    "cost": string
}

interface IStoreContext {
    currentData: IData[]
    shownData: IData[]
    hiddenData: IData[]
    showNumber: number
    switchCompareNumber: number
    changeShownNumber: (val:number) => void
    changeCompareNumber: (val: number) => void
    changeShownData: (val:number) => void

}

export const StoreContext = createContext<IStoreContext>({
    currentData: [],
    shownData: [],
    hiddenData: [],
    showNumber: 0,
    switchCompareNumber: -1,
    changeShownNumber: () => {},
    changeCompareNumber: () => {},
    changeShownData: () => {}
    
})

export const StoreState = ({children}: {children: React.ReactNode}) => {
    const [currentData] = useState(data)
    const [shownData, setShownData] = useState(data.slice(0, 3))
    const [hiddenData, setHiddenData] = useState(data.slice(3))
    const [showNumber, setShowNumber] = useState(3)
    const [switchCompareNumber, setSwitchCompareNumber] = useState(-1)

    const changeShownData = useCallback((num: number) => {
        const data = [...currentData]
        setShownData(data.slice(0, num))
        setHiddenData(data.slice(num))
    }, [currentData])

    const changeCompareNumber = (num:number) => setSwitchCompareNumber(num)


    const changeShownNumber = (num:number) => setShowNumber(num)
    
    return (
        <StoreContext.Provider value={{currentData, shownData, hiddenData, showNumber, switchCompareNumber, changeCompareNumber, changeShownNumber, changeShownData}}>
            { children }
        </StoreContext.Provider>
    )
}