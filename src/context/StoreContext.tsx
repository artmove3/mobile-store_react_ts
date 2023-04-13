import { createContext, useState } from "react";
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
    changeShownNumber: (val:number) => void

}

export const StoreContext = createContext<IStoreContext>({
    currentData: [],
    shownData: [],
    hiddenData: [],
    showNumber: 0,
    changeShownNumber: () => {}
    
})

export const StoreState = ({children}: {children: React.ReactNode}) => {
    const [currentData] = useState(data)
    const [shownData, setShownData] = useState(data.slice(0, 3))
    const [hiddenData, setHiddenData] = useState(data.slice(3, 6))
    const [showNumber, setShowNumber] = useState(3)

    const changeShownData = () => {
        
    }

    const changeShownNumber = (num:number) => setShowNumber(num)
    
    return (
        <StoreContext.Provider value={{currentData, shownData, hiddenData, showNumber, changeShownNumber}}>
            { children }
        </StoreContext.Provider>
    )
}