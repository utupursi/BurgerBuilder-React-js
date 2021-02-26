import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }

    updatePurchaseState(ingredients){
        const sum=Object.values(ingredients).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0});

    }

    purchaseHndler=()=>{
        this.setState({purchasing:true})
    }
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler=()=>{
        alert('You continue!');
    }

    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredintHandle=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount>0){
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }
    }

    render(){
        const disableInfo={
            ...this.state.ingredients
        }

        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key]<=0;
        }
        return(
             <Aux>

                 <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                     <OrderSummary 
                     ingredients={this.state.ingredients} 
                     purchaseCanceled={this.purchaseCancelHandler}
                     purchaseContinued={this.purchaseContinueHandler}
                     totalPrice={this.state.totalPrice}
                     />
                 </Modal>

                 <Burger ingredients={this.state.ingredients}/>

                 <BuildControls 
                 ingredientRemoved={this.removeIngredintHandle} 
                 ingredientAdded={this.addIngredientHandler}
                 disabled={disableInfo}
                 price={this.state.totalPrice}
                 purchasable={this.state.purchasable}
                 ordered={this.purchaseHndler}
            
                 />
             </Aux>
        );
    }
}


export default BurgerBuilder;