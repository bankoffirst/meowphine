import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import { Class, ShoppingCart } from '@material-ui/icons';
import { FiGithub,FiUser } from "react-icons/fi";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();


    return (
    <div className="header">
        <div className = "container">
            <div className = "header-con">
                <div className = "logo-container">
                    <a href="/">MeowPhine <FiGithub /></a>
                </div>
                    <Toolbar>
                    <div className="tabtab"/>
                        <div className={classes.grow}/>
                        <div classname={classes.button}>
                        <IconButton aria-label="Show cart item"  >
                            <Badge badgeContent={totalItems} color="Secondary" >
                                <div className="coloricon">
                                    <ShoppingCart fontSize="large"/>
                                </div>
                            </Badge>
                        </IconButton>
                        </div>
                    </Toolbar>
                </div>
        </div>    
    </div>
    )
}

export default Navbar;
