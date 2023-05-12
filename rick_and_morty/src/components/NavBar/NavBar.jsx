import SearchBar from "../SearchBar/SearchBar"
import style from "./NavBar.module.css"
import { Link,   } from "react-router-dom";

const NavBar = ({onSearch, setAccess}) => {

    

    const handleLogOut = ()=> {
        setAccess (false);
      
    }
    
    return (
        <div className={style.nav}>
            
            <Link to ='/home'><button>Home</button></Link>
            <Link to ='/about'><button >About</button></Link>
            <Link to ='/favorite'><button >Favorite</button></Link>

            
                <button onClick={handleLogOut}>Log Out</button>
           

            < SearchBar onSearch ={onSearch} />
        </div>
        //altshiftf  para identar 
    );
};
export default NavBar;