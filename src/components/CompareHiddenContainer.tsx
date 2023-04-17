import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import changeArrows from '../pictures/change.svg'

interface IProps {
    index:number
}

export const CompareHiddenContainer = ({index}:IProps) => {

    
    const { hiddenData, searchbarValue, searchedData, switchCompareNumber, changeSearchValue, switchItems } = useContext(StoreContext)

    let compareContainer = ['switch-compare']
    if(switchCompareNumber === index) {
        compareContainer.push('show')
    }

    const changeHandler = (num: number) => {
        switchItems(num)

    }

    const inputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        changeSearchValue(event.currentTarget.value)
    }

    const data = searchbarValue ? searchedData : hiddenData


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
                <div className={`compare-item ${key}`} key={key}>
                    <img src={changeArrows} className="change-arrows" onClick={() => changeHandler(key)} alt="change-arrows" />
                    <img src={item.picture} className="item-picture" alt={item.name} />
                    <h3>{item.name}</h3>
                </div>
            )
        })}
        </div>
    )
}