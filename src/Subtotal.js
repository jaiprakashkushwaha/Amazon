import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router';

function Subtotal() {
    const history = useHistory();
    const[{basket},dispatch]=useStateValue();
    return (
        <div 
        className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{value}
                    </strong>
                </p>

                <small className="subtotal_gift">
                    <input type="checkbox"/> Your order is eligible for FREE Delivery. Select this option at checkout.
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button className="butt" onClick={e=>history.push('/payment')}>Proceed to Buy</button>
        </div>
    );
}

export default Subtotal;
