import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    root: {
        marginTop: '5%',
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardActions : {
        display : 'flex',
        justifyContent : 'flex-end',
    },
    cardContent : {
        display : 'flex-start',
        justifyContent : 'space-evenly',
    }
}));