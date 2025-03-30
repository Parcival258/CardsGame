
import React from 'react'
import './App.css'
import ListCards from './components/list/ListCards'

const App: React.FC = () => {

  return (
      <div className='main-app'>
        <div>
          <h1 className='textoPrincipal'>Armas monster hunter</h1>
          <ListCards />
        </div>  
      </div>
  )
}

export default App
