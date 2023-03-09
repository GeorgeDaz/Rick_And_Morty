import style from './App.module.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import { useState } from 'react';


function App () {
  const [characters, setCharacters] = useState([]);

  const searchUser = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((data) => setCharacters([...characters, data])); // data es el objeto del usuario
  };



  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className={style.nav}>
        <SearchBar onSearch={(searchUser)}/>
      </div>
      
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
