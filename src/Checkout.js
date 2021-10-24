import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckOutProduct from './CheckOutProduct';


function Checkout() {
    const [{basket, user},dispatch]=useStateValue();

    return (
        <div className="checkout">
        
            <div className="checkout_left">
                <img className="checkout_ad" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Jupiter21/phase3/Header-PC_phrase-1-copy_011.gif"
           //     src="https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/phase_2_multibank_offer/Main-bank_PC_Header.jpg"
                alt=""
                />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">
                        your shoping Basket
                    </h2>
                    {basket.map(item=>(
                        <CheckOutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout;
