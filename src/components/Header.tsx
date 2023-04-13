import profileLogo from '../pictures/profile.svg'

export const Header = () => {
    return <div className="header">
        <div className="header-catalog">
            <h4>Каталог</h4>
        </div>
        
        <div className="header-title">
            <h4>Сравнение</h4>
            <div className="user-profile">
                <h4>Личный кабинет</h4>
                <img src={profileLogo} alt="profile logo" />
            </div>
        </div>
    </div>
}