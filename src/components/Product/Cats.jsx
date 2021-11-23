import React from "react";
import {Card , CardMedia,CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from './styles';
import { Link } from "react-router-dom";
const Productt = ({ product , onAddToCart}) => {
    const classes = useStyles();
    return (
        
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary"></Typography>
                <Link to={{  pathname: product.thank_you_url }} target="_blank" rel="noopener noreferrer">
                    <Typography variant="body2" color="textSecondary">{product.thank_you_url}</Typography>
                </Link>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Productt;