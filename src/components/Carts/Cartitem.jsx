import React from 'react'
import { Typography, Button, Card, CardActions,CardContent,CardMedia} from '@material-ui/core'

import useStyles from './styles';

const CartItem = ( {item} ) => {
    console.log(item.image);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.image.url} alt={item.name} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.price.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
