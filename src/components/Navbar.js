import React, { useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import{
    BrowserRouter as Router,
    Route,
  
  } from "react-router-dom";
  import { connect } from "react-redux";

  import Home from './Home';
  import Login from './Login';
  import Contact from './Contact';
  import Products from "./Products/Products";
  import Cart from "./Cart/Cart";
  import NewUser from './NewUser/NewUser';
import SingleItem from "./SingleItem/SingleItem";

const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() =>{
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });
        setCartCount(count);
    }, [cart, cartCount]);

    return (
        <Router>
            <Link to="/Home">Home</Link>
            <Link to="/Login">Sign In</Link>  
            <Link to="/Contact">Show List of Users</Link>
            <Link to="./Products/Products">Product List</Link>
            <Link to="./NewUser/NewUser">New User</Link>  
            <Link to='/cart'>
                <div className='navbar__cart'>
                    <h3>Cart</h3>
                    <img
                     className='cart__image'
                     src="https://image.flaticon.com/icons/svg/102/102276.svg"
                     alt="shopping cart"
                     />
                <div className='cart__counter'>{cartCount}</div>
                </div>
            </Link>      
            <Route exact path="/Home" component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Products/Products" component={Products} />
            <Route exact path="/NewUser/NewUser" component={NewUser} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:id" component={SingleItem} />

          
        </Router>
        
    )
}
const mapStateToProps = (state) =>{
    return{
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Navbar );