import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

function App () {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={
        <>
          <Header />
          <Main />
          <Footer />
        </>
      }/>
      <Route path='/movies' />

      <Route path='/saved-movies' />

      <Route path='/profile' />

      <Route path='/signin' />

      <Route path='/signup' />
    </Routes>
    </div>
  )
}

export default App;