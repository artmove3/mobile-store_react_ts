import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import arrow from '../pictures/arrow-dropdown.svg'
import { CompareHiddenContainer } from './CompareHiddenContainer'


export const CompareDesignRow = () => {

    const { currentData, shownData, showNumber, changeShownNumber, changeCompareNumber } = useContext(StoreContext)


    const arrowClickHandler = (num:number, event:React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation()
        changeCompareNumber(num)
    }


    return (
            <div className="compare-design">
                <div className="title">
                    <h1>Смартфоны</h1>
                    <ul>
                        <li> Отобразить товары:</li>
                        {currentData.map((_, i) =>( i + 1 > 1) && <li key={i} onClick={() => changeShownNumber(i + 1)}>{i + 1}</li>)}
                    </ul>
                </div>
                <div className='design'>
                    {shownData.map((item, key) => <div key={key} className={`design ${item.name}`}>
                        <img src={item.picture} alt={item.name}></img>
                        {showNumber < 6 && <img id={`${key}`} onClick={(e) => arrowClickHandler(key, e)} src={arrow} alt="arrow-dropdown" />}
                        <CompareHiddenContainer index={key} />
                            <h3 className={`title ${item.name}`}>{item.name}</h3>
                    </div>)}
                </div>

            </div>
    )
}