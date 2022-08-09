import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'

function App () {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={
        <Header />
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