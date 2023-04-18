import { createContext, useCallback, useState } from "react";
import { data } from "../data/data";

export interface IData {
    "picture": string
    "name": string
    "manufacturer": string
    "releaseYear": string
    "screenDiagonal": string
    "mCountry": string
    "memory": string
    "refreshRate": string
    "NFC": boolean
    "eSIMsupport": boolean
    "wirelessCharge": boolean
    "cost": string,
    "id": number
}

interface IStoreContext {
    currentData: IData[]
    shownData: IData[]
    hiddenData: IData[]
    showNumber: number
    switchCompareNumber: number
    switchCompareDiff: boolean
    searchbarValue: string
    searchedData: IData[]
    changeShownNumber: (val:number) => void
    changeCompareNumber: (val: number) => void
    changeShownData: (val:number, data?: IData[]) => void
    changeCompareDiff: () => void
    changeSearchValue: (val: string) => void
    switchItems: (val:number, data: IData[]) => void

}

export const StoreContext = createContext<IStoreContext>({
    currentData: [],
    shownData: [],
    hiddenData: [],
    showNumber: 0,
    switchCompareNumber: -1,
    switchCompareDiff: false,
    searchbarValue: '',
    searchedData: [],
    changeShownNumber: () => {},
    changeCompareNumber: () => {},
    changeShownData: () => {},
    changeCompareDiff: () => {},
    changeSearchValue: () => {},
    switchItems: () => {}
    
})

export const StoreState = ({children}: {children: React.ReactNode}) => {
    const [currentData] = useState(data)
    const [shownData, setShownData] = useState(data.slice(0, 3))
    const [hiddenData, setHiddenData] = useState(data.slice(3))
    const [showNumber, setShowNumber] = useState(3)
    const [switchCompareNumber, setSwitchCompareNumber] = useState(-1)
    const [switchCompareDiff, setSwitchCompareDiff] = useState(false)
    const [searchbarValue, setSearchbarValue] = useState('')
    const [searchedData, setSearchedData] = useState([...hiddenData])


    // calls on initial render and on change currentData and showNumber
    const changeShownData = useCallback((num: number = showNumber, newData?: IData[]) => {
        const data = newData || [...currentData]
        setShownData(data.slice(0, num))
        setHiddenData(data.slice(num))
    }, [currentData, showNumber])

    
    // set current data displayed on screen (shownData entries)
    const changeCompareNumber = (num:number) => {
        setSwitchCompareNumber(num)
        changeSearchValue('')
}
    
    const changeShownNumber = (num:number) => setShowNumber(num)


    // checkbox show difference
    const changeCompareDiff = () => setSwitchCompareDiff(prev => !prev)

    const changeSearchedData = (data: IData[]) => {
        setSearchedData(data)

    }


    // searchbar value handler
    const changeSearchValue = (str: string) => {
        setSearchbarValue(str)
        let findedData = hiddenData
        if(str !== '') {
            findedData = findedData.filter(item => {
                return item.name.toLowerCase().includes(str.toLowerCase())
            })
            
        }
        changeSearchedData(findedData)

        
    }

    // AAAAGGHHHH i lost about two enitre days on that piece of code
    // switch items between shownData and hiddenData
    // data = searchedData if searchBarValue !== '' || hiddenData
    const switchItems = (hiddenNum: number, data: IData[]) => {
 
        const currentShownData = [...shownData]
        const currentHiddenData = [...hiddenData]
        
        let newDataItem = data[hiddenNum]
        let newDataItemId = newDataItem.id
        let newDataItemPos = currentHiddenData.findIndex(item => item.id === newDataItemId)
        
        let currenDataItem = currentShownData[switchCompareNumber]
        currentHiddenData[newDataItemPos] = currenDataItem
        
        currentShownData[switchCompareNumber] = newDataItem
        
        
        const newData = currentShownData.concat(currentHiddenData)
        changeShownData(showNumber, newData)
        
    }
    
    return (
        <StoreContext.Provider value={{
            currentData, 
            shownData, 
            hiddenData, 
            showNumber, 
            switchCompareNumber, 
            switchCompareDiff,
            searchbarValue,
            searchedData, 
            changeCompareNumber, 
            changeCompareDiff, 
            changeShownNumber, 
            changeShownData, 
            changeSearchValue,
            switchItems
            }}>
            { children }
        </StoreContext.Provider>
    )
}