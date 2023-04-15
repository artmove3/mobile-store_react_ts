import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import changeArrows from '../pictures/change.svg'

interface IProps {
    index:number
}

export const CompareHiddenContainer = ({index}:IProps) => {

    
    const { hiddenData, switchCompareNumber } = useContext(StoreContext)

    let compareContainer = ['switch-compare']
    if(switchCompareNumber === index) {
        compareContainer.push('show')
    }

    return (
        <div className={compareContainer.join(' ')}>
                            {hiddenData.map((item, key) => {
                                return ( 
                                    <div className={`compare-item ${key}`} key={key}>
                                        <img src={changeArrows} alt="change-arrows" />
                                        <img src={item.picture} alt={item.name} />
                                        <h4>{item.name}</h4>
                                    </div>
                                )
                            })}
                        </div>
    )
}