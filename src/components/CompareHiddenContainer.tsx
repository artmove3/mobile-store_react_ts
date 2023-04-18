import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import changeArrows from '../pictures/change.svg'

interface IProps {
    index:number
}

export const CompareHiddenContainer = ({index}:IProps) => {

    
    const { hiddenData, searchbarValue, searchedData, switchCompareNumber, changeSearchValue, changeCompareNumber, switchItems } = useContext(StoreContext)

    let compareContainer = ['switch-compare']
    if(switchCompareNumber === index) {
        compareContainer.push('show')
    }
    
    let data = searchbarValue ? searchedData : hiddenData

    const changeHandler = (num: number) => {
        switchItems(num, data)
        changeCompareNumber(-1)
        
    }

    const inputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        changeSearchValue(event.currentTarget.value)
    }

    


    return (
        <div className={compareContainer.join(' ')} onClick={(e) => e.stopPropagation()}>
            {(hiddenData.length > 3 || searchbarValue) && <input 
            type="text"
            placeholder="Поиск" 
            value={searchbarValue} 
            onChange={(e) => inputHandler(e)}
            />
            }
            {data.map((item, key) => {
            return ( 
                <div className={`compare-item ${key}`} onClick={() => changeHandler(key)} key={key}>
                    <img src={changeArrows} className="change-arrows" alt="change-arrows" />
                    <img src={item.picture} className="item-picture" alt={item.name} />
                    <h3>{item.name}</h3>
                </div>
            )
        })}
        </div>
    )
}