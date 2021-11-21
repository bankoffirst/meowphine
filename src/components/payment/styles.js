import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        position:'relative',
    },
    toolbar: theme.mixins.toolbar,
    layout: {
        Width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width:600,
            marginRight: 'auto',
            marginLeft: 'auto'
        },
    },
    paper: {        
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            Width:'100%',
            marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            Width:600,
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3,0,5),
    },
    buttons: {
        display : 'flex',
        alignItems : 'flex-end',
    },
    divider : {
        margin:'20px 0',
    },
    spinner: {
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    payment: {
        marginTop: '5%',
        display :"center",
        justifyContent: 'center',
        alignItems: 'center',
        width: 560,
    },
    succ: {
        marginLeft: '10%',
        maxWidth: '80%',
    },
    pay: {
        display :"center",
        justifyContent: 'center',
        alignItems: 'center',
        width: 560,
        height: 500,
    }
}));