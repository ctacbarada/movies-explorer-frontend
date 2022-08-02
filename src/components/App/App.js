import './App.css'
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={
        <h1>Hello</h1>
      }>
      </Route>
      <Route path='/movies' element={
        <h1>22222</h1>
      }>
      </Route>
      <Route path='/saved-movies'>
        
      </Route>
      <Route path='/profile'>
        
      </Route>
      <Route path='/signin'>
        
      </Route>
      <Route path='/signup'>
        
      </Route>
    </Routes>
    </div>
  )
}

export default App;