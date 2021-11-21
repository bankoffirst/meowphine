import React from 'react'
import image from './succ.png'
import useStyles from './styles'
import {Typography , Button} from '@material-ui/core';

const Success = ({handleEmptyCart}) => {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.succ} src={image}/>
            <Button onClick={handleEmptyCart} className={classes.payment} type="submit" variant="contained" color="primary">Continue</Button>
        </div>
    )
}

export default Success
