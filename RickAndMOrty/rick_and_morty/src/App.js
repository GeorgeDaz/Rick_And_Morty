import style from './App.module.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import { useState } from 'react';


function App () {
  const [characters, setCharacters] = useState([]);

  const searchUser = (character) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = '1b73a06a2f44.1aab0572d3646cf79a31';

    fetch(`${URL_BASE}/character/${character}?key=${KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          // setCharacters([...characters, data]);
        } else {
          alert("Algo salió mal");
        }
      });
      // setCharacters([...characters, data])); // data es el objeto del usuario
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };



  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className={style.nav}>
        <SearchBar onSearch={(searchUser)}/>
      </div>
      
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
    </div>
  )
}

export default App
