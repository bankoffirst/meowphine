import React from 'react'
import image from './qrpayment.jpg'
import useStyles from './styles'
import {Typography , Button} from '@material-ui/core';
const Payment = ({cart,next}) => {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.pay} src={image}/>
            <Typography className={classes.spinner} variant="h4">Total : {cart.subtotal.formatted_with_symbol}</Typography>
            <Button onClick={next} className={classes.payment} type="submit" variant="contained" color="primary">PAYMENT</Button>
        </div>
    )
}

export default Payment
