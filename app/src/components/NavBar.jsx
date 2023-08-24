import CartWidget from './CartWidget';
import styled from 'styled-components';
import { Link , NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
     <Navcontainer>
        <h2> 
            <Link to = "/">Logo</Link>
        </h2>
        <div>
            <NavLink to ="/category/Inalambricos"> Inalambricos </NavLink>
            <NavLink to ="/category/Gamers"> Gamers </NavLink>
            <NavLink to ="/category/Runners"> Runners </NavLink>
            <a href='/'><CartWidget/></a>
        </div>

     </Navcontainer>
    </>
  )
}

export default Navbar

const Navcontainer = styled.nav `
  h2{
    font-weight: 700;
    font-weight: bold;
    color: white;
    

  }
  padding: .4rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 3rem;



  }
`