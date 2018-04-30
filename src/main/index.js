import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {AppBar, Drawer, IconButton, Toolbar, Typography} from "material-ui";
import List, {ListItem, ListItemIcon, ListItemText} from "material-ui/List";
import {AccountCircle, Menu, Home} from "material-ui-icons";
import User from "./user";

export default class Braumeister extends React.Component {
    constructor() {
        super();
        this.toggleMenuState = this.toggleMenuState.bind(this);
        this.state = {
            menuOpen: false
        };
    }

    toggleMenuState() {
        this.setState({menuOpen: !this.state.menuOpen});
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* Normalize the CSS */}
                    {/*<Reboot/>*/}

                    {/* Header */}
                    <AppBar position="static">
                        <Toolbar disableGutters={true}>
                            <IconButton color="inherit" onClick={this.toggleMenuState}>
                                <Menu/>
                            </IconButton>
                            <Typography variant="title" color="inherit">
                                Admin
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    {/* Menu */}
                    <Drawer
                        anchor="left"
                        open={this.state.menuOpen}
                        onClose={this.toggleMenuState}
                        variant="temporary"
                    >
                        <List>
                            <Link to="/admin/">
                                <ListItem button onClick={this.toggleMenuState}>
                                    <ListItemIcon>
                                        <Home/>
                                    </ListItemIcon>
                                    <ListItemText primary="Home"/>
                                </ListItem>
                            </Link>
                            <Link to="/admin/users">
                                <ListItem button onClick={this.toggleMenuState}>
                                    <ListItemIcon>
                                        <AccountCircle/>
                                    </ListItemIcon>
                                    <ListItemText primary="Users"/>
                                </ListItem>
                            </Link>
                        </List>
                    </Drawer>

                    {/* Content */}
                    <Switch>
                        <Route exact path="/admin/" render={() => <h1>Home</h1>}/>
                        <Route path="/admin/users" component={User}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
