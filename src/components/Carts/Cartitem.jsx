import React from 'react'
import { Typography, Button, Card, CardActions,CardContent,CardMedia} from '@material-ui/core'

import useStyles from './styles';

const CartItem = ( {item,onUpdateCartQty,onRemoveFromCart } ) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.image.url} alt={item.name} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.price.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}> - </Button>
                    <Typography gutterBottom>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}> + </Button>
                    <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
                </div>
                
            </CardActions>
        </Card>
    )
}

export default CartItem
