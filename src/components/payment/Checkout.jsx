import React, { useState } from 'react'
import { Paper, Stepper, Step,StepLabel,Typography } from '@material-ui/core';
import useStyles from './styles'
import Payment from './Payment';
import Success from './Success';

const steps = ['QRcode Payment','Payment Success']
const Checkout = ({cart,handleEmptyCart}) => {
    const [activeStep,setActiveStep] = useState(0);
    const classes = useStyles();
    const [shipdata,setshipdata] = useState({});

    const next = () => {
        setshipdata();
        nextStep();
    }
    const nextStep = () => setActiveStep((activeStep) => activeStep + 1);

    const Confirmation = () => (
        <div>
            confirm
        </div>
    );
    const Form = () => activeStep == 0
        ? <Payment cart = {cart} next={next} />
        : <Success shipdata={shipdata} handleEmptyCart = {handleEmptyCart}/>

    console.log(activeStep);
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep == steps.length ? <Confirmation/> : <Form/>}
                </Paper>
            </main>
        </>
    )

}

export default Checkout;