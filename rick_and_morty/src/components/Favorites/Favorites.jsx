import Card from "../Card/Card";
import { connect } from "react-redux"
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions";

const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch()
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value = "A">Ascendente</option>
                <option value = "D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>

            </select>
            {
            myFavorites?.map(fav => {
                return (
                    <Card 
                    key = {fav.id}
                    id = {fav.id}
                    name = {fav.name}
                    status = {fav.status}
                    gender = {fav.gender}
                    image = {fav.image}
                    onClose={fav.onClose}

                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       myFavorites : state.myFavorites

    }
 }
export default connect (mapStateToProps, null)(Favorites);