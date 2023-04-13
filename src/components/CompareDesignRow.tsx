import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import arrow from '../pictures/arrow-dropdown.svg'



export const CompareDesignRow = () => {

    const {currentData, shownData, hiddenData, showNumber, changeShownNumber } = useContext(StoreContext)

    

    


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
                        <img src={arrow} alt="arrow-dropdown" />
                        <h3 className={`title ${item.name}`}>{item.name}</h3>
                        </div>)}
                </div>

            </div>
    )
}