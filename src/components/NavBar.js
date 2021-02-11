import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <AppBar >
                <Toolbar style={{ height: "20px" }}>
                    <NavLink to="/"
                        exact
                        activeStyle={{
                            color: "white",
                            backgroundColor: "rgb(26,29,94)",
                            padding: "5px"
                        }}
                        style={{ color: 'rgb(131,141,221)', textDecoration: 'inherit', marginLeft: "20%" }}
                    >
                        <Button disableRipple color="inherit" varient="text">
                            <Typography variant="overline" display="block" gutterBottom>
                                <span style={{ fontSize: "14px", padding: "50px" }}>Currency Converter</span>
                            </Typography>
                        </Button>
                    </NavLink>
                    <NavLink to="/check-exchange-rates"
                        exact
                        activeStyle={{
                            color: "white",
                            backgroundColor: "rgb(26,29,94)",
                            padding: "5px"
                        }}
                        style={{ color: 'rgb(131,141,221)', textDecoration: 'inherit' }}
                    >
                        <Button disableRipple color="inherit" varient="text">
                            <Typography variant="overline" display="block" gutterBottom>
                                <span style={{ fontSize: "14px", padding: "50px" }}>Current Exchange Rates</span>
                            </Typography>
                        </Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default NavBar;