import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';
const orderSummary=(props)=>{
    const ingreditentSummary=Object.keys(props.ingredients).map(igKey=>{
        return (
        <li>
            <span style={{textTransform:'capitalize'}}>
                {igKey}
            </span>:{props.ingredients[igKey]}
        </li>)
    });
   return(
       <Aux>
           <h3>Your Order</h3>
           <p>A delicious burger with the folowing ingredinets</p>
           <ul>
               {ingreditentSummary}
           </ul>
           <p><strong>Total Price:{props.totalPrice.toFixed(2)}</strong></p>
           <p>Continue to CHeckout ?</p>
           <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
           <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
       </Aux>
   )
}

export default orderSummary