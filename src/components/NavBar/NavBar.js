import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>
                    Ecommerce
                </h3>
            </Link>
            <div className="Categories">
                <NavLink to="/category/celular" className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>      Celuares          </NavLink>
                <NavLink to='category/tablets' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}> Tablets </NavLink>
                <NavLink to='category/notebooks' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}> Notebooks </NavLink>


            </div>

            <CartWidget />
        </nav>




    )




}
export default NavBar