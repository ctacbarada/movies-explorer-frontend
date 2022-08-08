import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__logo"/>
      <div className="header__auth">
        <div className='header__registration'>Регистрация</div>
        <div className='header__login'>Войти</div>
      </div>
    </header>
  )
}

export default Header;