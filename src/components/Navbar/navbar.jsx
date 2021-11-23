import React from 'react'
import { Toolbar,IconButton,Badge} from '@material-ui/core';
import { ShoppingCart ,PersonOutline} from '@material-ui/icons';
import { FiGithub } from "react-icons/fi";
import useStyles from "./styles";
import { Link } from 'react-router-dom';
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
                            <IconButton component={Link} to="/cart" aria-label="Show cart item"  >
                                <Badge badgeContent={totalItems} color="Secondary" >
                                    <div className="coloricon">
                                        <ShoppingCart fontSize="large"/>
                                    </div>
                                </Badge>
                            </IconButton>
                            <IconButton component={Link} to="/dashboard" aria-label="User"  >
                                <div className="coloricon">
                                    <PersonOutline fontSize="large"/>
                                </div>
                            </IconButton>
                        </div>
                    </Toolbar>
                </div>
        </div>    
    </div>
    )
}

export default Navbar;
