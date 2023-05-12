import style from "./Card.module.css"
import {Link} from 'react-router-dom';  
import {addFav, removeFav } from '../../Redux/actions'
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';

const Card  = ({id,name, status,image,gender,  onClose, removeFav, addFav, myFavorites}) => {
   
    const [ isFav, setIsFav] = useState (false);
    const handleFavorite = ()=> {
      if (isFav){
         setIsFav(false);
         removeFav(id);
      }else {
         setIsFav(true)
         addFav({id,name, status,image, gender, onClose})
      }

    }
    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className= 'cards'>
         <button onClick={handleFavorite}>{isFav ?'❤️': '🤍'}</button>
         
         <Link to = {`/detail/${id}`}>    
         <div className= 'face front'>
            <img src={image} alt="" />  
         </div>
         <div className='face back'>
            <h1> Nombre: "{name}"</h1>
            <h1> Estatus: "{status}"</h1>
            <h1> Genero: "{gender}"</h1>
          
            <button onClick={()=> onClose(id)}>Messierro</button> 
         </div>
         </Link>
         
      </div>
   );
}
   const mapStateToProps = (state) => {
      return {
         myFavorites : state.myFavorites

      }
   }
   const mapDispatchToProps = (dispatch) =>{
      return {
         addFav : (character) => {dispatch(addFav(character))},
         removeFav : (id) => {dispatch(removeFav(id))}
      }
   };



export default connect (mapStateToProps, mapDispatchToProps)(Card);