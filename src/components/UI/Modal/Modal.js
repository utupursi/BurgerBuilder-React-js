import React,{Component} from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component{

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show
    }

    componentDidUpdate(){
        console.log("updated")
    }
    render(){
      return(   
        <Aux>
        <Backdrop clicked={this.props.modalClosed} show={this.props.show}/>
        <div  
        className={classes.Modal}
        style={{transform:this.props.show?"translateY(-155px)":"translateY(-100vh)",opacity:this.props.show?'1':'0'}}
        >
            {this.props.children}
        </div>
        </Aux>
        )
    }
}


export default Modal;