import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import arrow from '../pictures/arrow-dropdown.svg'
import check from '../pictures/check.svg'
import { CompareHiddenContainer } from './CompareHiddenContainer'


export const CompareDesignRow = () => {

    const { currentData, shownData, showNumber, switchCompareDiff, changeShownNumber, changeCompareDiff, changeCompareNumber } = useContext(StoreContext)


    const arrowClickHandler = (num:number, event:React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation()
        changeCompareNumber(num)
    }
    const allShowNumber = document.querySelectorAll('li')
    allShowNumber.forEach(item => item.removeAttribute('class'))
    const currentShowNumberSelected = document.getElementById(`${showNumber - 1}`)
    currentShowNumberSelected?.classList.add('clicked')

    return (
            <div className="compare-design">
                <div className="title">
                    <h1>Смартфоны</h1>
                    <ul>
                        <li> Отобразить товары:</li>
                        {currentData.map((_, i) =>( i + 1 > 1) && <li key={i} id={`${i}`} onClick={() => changeShownNumber(i + 1)}>{i + 1}</li>)}
                    </ul>
                </div>
                <div className='design'>
                    <div className='compare-switch'>
                        <div onClick={changeCompareDiff} id='compare-checkbox'>
                            {switchCompareDiff && <img className='compare-check' src={check} alt='check'></img>}
                        </div>
                        <label onClick={changeCompareDiff} htmlFor='compare-checkbox'><h4>Показать различия</h4></label>
                    </div>
                    {shownData.map((item, key) => <div key={key} className={`design-sample ${item.name}`}>
                        <img src={item.picture} alt={item.name}></img>
                        {showNumber < 6 && <img 
                            id={`${key}`} 
                            className='arrow-dropdown'
                            onClick={(e) => arrowClickHandler(key, e)} 
                            src={arrow} 
                            alt="arrow-dropdown" 
                            />
                            }
                        <CompareHiddenContainer index={key} />
                            <h3 className={`title ${item.name}`}>{item.name}</h3>
                    </div>)}
                </div>

            </div>
    )
}