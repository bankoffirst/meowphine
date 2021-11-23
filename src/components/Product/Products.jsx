import React from "react";
import { Grid } from "@material-ui/core";

import Productt from "./Cats";

const Products = ( { products , onAddToCart } ) => {
    console.log(products);
    return (
        <main className="container">
            <Grid container justify="flex-start" alignItems='flex-start' spacing={3}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Productt product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;