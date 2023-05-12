import './App.css';
import Cards from './components/Cards/Cards.jsx'; 
import style from "./App.module.css"
import NavBar from "./components/NavBar/NavBar"
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import Form from './components/Froms/Form';
import Favorites from './components/Favorites/Favorites';

const EMAIL = 'neider.polo.090600@gmail.com'
const PASSWORD = "123asd"


function App() {

   const location = useLocation (); 
   const [characters, setCharacters] = useState([]); 
   const [access, setAccess] = useState (false)  
   const navigate = useNavigate ();

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } 
      
   }
    useEffect (() => {
       !access && navigate ('/')
    },[access])
    // este useEffect es para que no deje ver la informacion asi se cambie manuealmente 
   
   const  onSearch = (id) =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
    const onClose = (id) => {
      setCharacters(
          characters.filter((char)=> {
              return char.id !== Number(id) 
      
            })
    )
     
   
   }
   return (
   
      <div className="App">
         {
            location.pathname !== "/"
            ? <NavBar onSearch = {onSearch} setAccess = {setAccess} />
            : null
         }  
         
            <Routes>
               <Route path = "/" element = {<Form login = {login} />}/>
               <Route path = "/home" element = {<Cards characters={characters} onClose = {onClose}/>}/>
               <Route path = "/about" element = {<About/>}/>
               <Route path = "/detail/:id" element = {<Detail/>}/>
               <Route path = "/favorite" element = {<Favorites/>}/>
            </Routes>

         
       </div>
     );

}


export default App;
