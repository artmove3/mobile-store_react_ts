import iPhone from '../pictures/iPhone.png'
import XiaomiMi from '../pictures/XiaomiMi.png'
import SamsungGA72 from '../pictures/SamsungGA72.png'
import SamsungGS21 from '../pictures/SamsungGS21.png'
import iPhoneXr from '../pictures/iPhoneXr.png'
import realme8 from '../pictures/realme8.png'

const iPhone12 = {
    "picture": iPhone,
    "name": 'Apple iPhone 12',
    "manufacturer": 'Apple',
    "releaseYear": '2020',
    "screenDiagonal":'6.1',
    "mCountry": 'Китай',
    "memory": '128 ГБ',
    "refreshRate": '60 Гц',
    "NFC": false,
    "eSIMsupport": true,
    "wirelessCharge": true,
    "cost": '81 990 ₽',
    "id": 0
}

const iPhoneX = {
    "picture": iPhoneXr,
    "name": 'Apple iPhone Xr',
    "manufacturer": 'Apple',
    "releaseYear": '2022',
    "screenDiagonal": '6.5',
    "mCountry": 'Китай',
    "memory": '128 ГБ',
    "refreshRate": '90 Гц',
    "NFC": false,
    "eSIMsupport": true,
    "wirelessCharge": true,
    "cost": '101 990 ₽',
    "id": 4
    
}

const xiaomi = {
    "picture": XiaomiMi,
    "name": 'Xiaomi Mi 11 Lite ',
    "manufacturer": 'Xiaomi',
    "releaseYear": '2021',
    "screenDiagonal": '6.55',
    "mCountry": 'Китай',
    "memory": '128 ГБ',
    "refreshRate": '90 Гц',
    "NFC": true,
    "eSIMsupport": true,
    "wirelessCharge": false,
    "cost": '27 490 ₽',
    "id": 1
}

const samsung72 = {
    "picture": SamsungGA72,
    "name": 'Samsung Galaxy A72',
    "manufacturer": 'Samsung',
    "releaseYear": '2021',
    "screenDiagonal": '6.7',
    "mCountry": 'Вьетнам',
    "memory": '128 ГБ',
    "refreshRate": '90 Гц',
    "NFC": true,
    "eSIMsupport": false,
    "wirelessCharge": true,
    "cost": '32 890 ₽',
    "id": 2
}

const samsung21 = {
    "picture": SamsungGS21,
    "name": 'Samsung Galaxy S21',
    "manufacturer": 'Samsung',
    "releaseYear": '2022',
    "screenDiagonal": '6.9',
    "mCountry": 'Вьетнам',
    "memory": '256 ГБ',
    "refreshRate": '60 Гц',
    "NFC": false,
    "eSIMsupport": false,
    "wirelessCharge": true,
    "cost": '22 000 ₽',
    "id": 3
}

const realme = {
    "picture": realme8,
    "name": 'Realme 8 Pro',
    "manufacturer": 'Realme',
    "releaseYear": '2019',
    "screenDiagonal": '5.0',
    "mCountry": 'Тайвань',
    "memory": '64 ГБ',
    "refreshRate": '60 Гц',
    "NFC": false,
    "eSIMsupport": false,
    "wirelessCharge": false,
    "cost": '15 000 ₽',
    "id": 5
}

export const data = [ iPhone12, xiaomi, samsung72, samsung21, iPhoneX, realme ]

