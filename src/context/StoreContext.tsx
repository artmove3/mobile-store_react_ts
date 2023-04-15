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
    switchCompareDiff: boolean
    changeShownNumber: (val:number) => void
    changeCompareNumber: (val: number) => void
    changeShownData: (val:number, data?: IData[]) => void
    changeCompareDiff: () => void
    switchItems: (val:number) => void

}

export const StoreContext = createContext<IStoreContext>({
    currentData: [],
    shownData: [],
    hiddenData: [],
    showNumber: 0,
    switchCompareNumber: -1,
    switchCompareDiff: false,
    changeShownNumber: () => {},
    changeCompareNumber: () => {},
    changeShownData: () => {},
    changeCompareDiff: () => {},
    switchItems: () => {}
    
})

export const StoreState = ({children}: {children: React.ReactNode}) => {
    const [currentData] = useState(data)
    const [shownData, setShownData] = useState(data.slice(0, 3))
    const [hiddenData, setHiddenData] = useState(data.slice(3))
    const [showNumber, setShowNumber] = useState(3)
    const [switchCompareNumber, setSwitchCompareNumber] = useState(-1)
    const [switchCompareDiff, setSwitchCompareDiff] = useState(false)

    const changeShownData = useCallback((num: number = showNumber, newData?: IData[]) => {
        const data = newData || [...currentData]
        setShownData(data.slice(0, num))
        setHiddenData(data.slice(num))
    }, [currentData, showNumber])

    const changeCompareNumber = (num:number) => {
        setSwitchCompareNumber(num)
}
    
    const changeShownNumber = (num:number) => setShowNumber(num)

    const changeCompareDiff = () => setSwitchCompareDiff(prev => !prev)

    const switchItems = (hiddenNum: number) => {
 
        const newData = currentData
        let deletedData = newData.splice(switchCompareNumber, 1, hiddenData[hiddenNum])
        newData.splice((hiddenNum + shownData.length), 1, deletedData[0])
        changeShownData(showNumber, newData)
       
    }
    
    return (
        <StoreContext.Provider value={{currentData, shownData, hiddenData, showNumber, switchCompareNumber, switchCompareDiff, changeCompareNumber, changeCompareDiff, changeShownNumber, changeShownData, switchItems}}>
            { children }
        </StoreContext.Provider>
    )
}