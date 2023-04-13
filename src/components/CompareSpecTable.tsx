import {useContext} from 'react'
import { IData, StoreContext } from '../context/StoreContext'
import trueSign from '../pictures/true.svg'
import falseSign from '../pictures/false.svg'

export const CompareSpecTable = () => {

    const {shownData} = useContext(StoreContext)

    const shownDataKey = Object.keys(shownData[0])
    const shownDataKeyRus = [
        'Производитель',
        'год релиза',
        'Диагональ экрана (дюйм)',
        'Страна-производитель',
        'Объем памяти',
        'Частота обновления экрана',
        'NFC',
        'Поддержка eSIM',
        'Поддержка беспроводной зарядки',
        'Стоимость'

]

    return (
    
        <div className='compare-spec'>
                {shownDataKey.map((key, i) => {
                    return (
                        i > 1 && <div className={`compare ${key}`}>
                            <h3>{shownDataKeyRus[i - 2]}</h3>
                            {shownData.map((item, i) => typeof item[key as keyof IData] === 'boolean' ? <img src={!!item[key as keyof IData] ? trueSign : falseSign} alt='condition-sign'></img> : <h3>{item[key as keyof IData]}</h3>)}
                        </div>
                    )
                })}
            </div>
    )
}