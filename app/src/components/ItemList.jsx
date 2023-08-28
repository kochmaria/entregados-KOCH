import styles from "../App.css"
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return <div>
     <h1></h1>
     <ul>
        {items.map ((item) => (
            <li key = {item.id}>
                <Link to = {`/item/${item.id}`}>
                 <h3>{item.name}</h3>
                 <p>${item.price}</p>
                 <p>{item.category}</p>
                 <img src = {item.image} alt= {item.name} ></img>
                </Link>

            </li>
        ))}
        
     </ul>
  </div>;


  
};
ItemList.propTypes = {
    items: propTypes.array.isRequired,
}
styles
export default ItemList;