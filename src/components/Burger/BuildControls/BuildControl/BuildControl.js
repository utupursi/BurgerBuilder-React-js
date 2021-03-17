import React,{useContext} from 'react';
import classes from './BuildControl.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../../context/auth-context';



const buildControl=(props)=>{
    const authContext=useContext(AuthContext);
    return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button disabled={props.disabled} onClick={()=>authContext.removed(props.type)} className={classes.Less}>Less</button>
        <button onClick={props.added} className={classes.More}>More</button>
    </div>
    )
}

buildControl.propTypes={
    label:PropTypes.string.isRequired,
    removed:PropTypes.func,
    disabled:PropTypes.bool,
    added:PropTypes.func
};

export default buildControl