import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {
    AppBar,
    Drawer,
    IconButton,
    Reboot,
    Toolbar,
    Typography
} from 'material-ui';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';

import {AccountCircle, Menu, Home} from 'material-ui-icons';

class App extends React.Component {
    constructor() {
        super();
        this.toggleMenuState = this.toggleMenuState.bind(this);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenuState() {
        this.setState({menuOpen: !this.state.menuOpen});
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* Normalize the CSS */}
                    <Reboot/>

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
                            <Link to="/">
                                <ListItem button onClick={this.toggleMenuState}>
                                    <ListItemIcon>
                                        <Home/>
                                    </ListItemIcon>
                                    <ListItemText primary="Home"/>
                                </ListItem>
                            </Link>
                            <Link to="/users">
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
                        <Route exact path="/" render={() => <h1>Home</h1>}/>
                        <Route path="/users" render={() => <h1>Users</h1>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
