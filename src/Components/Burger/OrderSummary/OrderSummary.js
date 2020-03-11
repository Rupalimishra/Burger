import React from 'react';

import Aux from '../../../containers/hoc/Aux'
//import Button from '../../UI/Button/Button';

const OrderSummary = ( props ) => {
    const ingredientSummary = Object.keys( props.ingredients )
        .map( igKey => {
        return ( <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span> :{props.ingredients[igKey]}
        </li> );
            // return (
            //     <li key={igKey}>
            //         <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            //     </li> );
        } );
    

    
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                {/* <p><strong>Total Price: {this.props.price.toFixed( 2 )}</strong></p> */}
                <p>Continue to Checkout?</p>
                {/* <button clicked={this.props.purchaseCancelHandler}>CANCLE</button>
                // <buton>CONTINUE</buton>
                {/* <Button clicked={this.props.purchaseCancelHandler}>CANCLE</Button> */}
                {/* <Button clicked={this.props.purchaseContinueHandler}>Continue</Button> */} 
            </Aux>
        );
    };
export default OrderSummary;
