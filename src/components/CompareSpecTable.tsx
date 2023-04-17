import {useContext} from 'react'
import { IData, StoreContext } from '../context/StoreContext'
import trueSign from '../pictures/true.svg'
import falseSign from '../pictures/false.svg'

export const CompareSpecTable = () => {

    const {shownData, switchCompareDiff} = useContext(StoreContext)

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
    const compareDiff = (key: keyof IData) => {
        

        let compareStr = ''
        let compareItems:string[] = []
        shownData.forEach(item => {
            if(!compareStr) compareStr += item[key]
            compareItems.push('' + item[key])
                
        })

        return compareItems.every(item => item === compareStr)

    }

    return (
    
        <div className='compare-spec'>
                {shownDataKey.map((key, i) => {
                    return (
                        i > 1 && !(switchCompareDiff && compareDiff(key as keyof IData)) && <div key={i} className={`compare ${key}`}>
                            <div className='compare-spec_title'>
                                <h3>{shownDataKeyRus[i - 2]}</h3>
                            </div>
                            
                            {shownData.map((item, i) => typeof item[key as keyof IData] === 'boolean' ? <div key={i*10 + i} className='compare-spec_item'><img src={!!item[key as keyof IData] ? trueSign : falseSign} alt='condition-sign'></img></div> : <div key={i*10 + i} className='compare-spec_item'><h3>{item[key as keyof IData]}</h3></div>)}
                            
                           
                        </div>
                    )
                })}
            </div>
    )
}