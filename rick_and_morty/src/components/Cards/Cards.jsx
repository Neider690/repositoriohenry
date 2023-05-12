import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards  = ({characters,onClose}) => {
// en el map(({tambien se pueden destructurar los componentes y se elimina el char}))
   return (
      <div className={style.container}>
         {
            characters.map(({id,name, status, gender, species,image,origin})=>{
               return (
                  < Card
                    key = {id} 
                    id = {id}
                    name = {name}
                    species = {species} 
                    gender = {gender}
                    image = {image}
                    origin = {origin.name}
                    status = {status}
                    onClose={onClose}
                  />
               )
            })
         }

      </div>
      
      )
}
export default Cards
