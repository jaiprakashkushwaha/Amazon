import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {

    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
            <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
             </Link>
             
            <div className="header_search">
                <input
                className="header_searchInput"
                type="text"/>
                <SearchIcon 
                className="header_searchIcon"/>
                {/* Logo */}
            </div>

            <div className="header_nav">
              <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} 
                className="header_option">
                    <span
                    className="header_optionLineOne">
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    
                    <span
                    className="header_optionLineTwo">
                        {user ? 'Sign Out' : 'Sign In'}
                        {/* Hello Sign In */}
                        </span>
                    
                </div>
              </Link>
              <Link to ='/orders'>
                 <div className="header_option">
                   <span
                     className="header_optionLineOne">
                        Returns
                     </span>
                    
                    <span
                     className="header_optionLineTwo">
                       & Orders
                    </span>
                 </div>
                </Link>
                {/* <div className="header_option">
                <span
                    className="header_optionLineOne">
                        Your
                    </span>
                    
                    <span
                    className="header_optionLineTwo">
                        Prime
                        </span>
                </div> */}

                    {/* Basket */}
                <Link to ="/checkout">
                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    {/* <ShoppingBasketIcon/> */}
                    <span className="header_optionLineTwo header_basketCount">
                        {basket?.length}
                    </span>
                </div>
                </Link>
                
            </div>
        </div>
    );
}

export default Header;
