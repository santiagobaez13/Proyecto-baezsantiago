import CartWidget from "../CartWidget/CartWidget"
const NavBar =() => {
 return (
    <nav>
<h3>Ecommerce</h3>
<div>
    <button> 
        Celulares
    </button>
    <button>
        Computadoras
    </button>
    <button>
        Tablets
    </button>

</div>

<CartWidget />
    </nav>




 )




}
export default NavBar