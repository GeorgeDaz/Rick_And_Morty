import style from './App.module.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import LoginPage from './components/LoginPage.jsx'
import { Link } from "react-router-dom";


function App () {
 // se utiliza la funcion useState para declarar el hook

  const [characters, setCharacters] = useState([]);

  // a partir de aca se declara la funcion que funcionara como event handler

  const searchUser = (character) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = '1b73a06a2f44.1aab0572d3646cf79a31';

    if (characters.find((char) => char.id === character)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${character}?key=${KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          // setCharacters([...characters, data]);
        } else {
          alert("El personaje no existe");
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
        <Link to="/">
          <h3 className={style.links}>HOME</h3>
        </Link>
        <Link to="/about">
          <h3 className={style.links}>ABOUT</h3>
        </Link>
        <Link to="/loginpage">
          <h3 className={style.links}>LOGIN</h3>
        </Link>
        <SearchBar onSearch={(searchUser)}/>
      </div>
      
      <div>
        {/* <Cards characters={characters} onClose={onClose}/> */}
        <Routes>
        <Route
          path="/" element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="loginpage" element={<LoginPage />} />
      </Routes>
      </div>
    </div>
  )
}

export default App; 
