import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Drawer,
  IconButton,
  Reboot,
  Toolbar,
  Typography
} from 'material-ui';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import { AccountCircle, Menu, Home } from 'material-ui-icons';

class App extends React.Component {
  constructor() {
    super();
    this.onMenuIconClick = this.onMenuIconClick.bind(this);
  }

  state = {
    menuOpen: false
  };

  onMenuIconClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Reboot />
          <AppBar position="static">
            <Toolbar disableGutters={true}>
              <IconButton color="inherit" onClick={this.onMenuIconClick}>
                <Menu />
              </IconButton>
              <Typography variant="title" color="inherit">
                Admin
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="left"
            open={this.state.menuOpen}
            onClose={this.onMenuIconClick}
            variant="temporary"
          >
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <Link to="/">
                  <ListItemText primary="Home" />
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <Link to="/users">
                  <ListItemText primary="Users" />
                </Link>
              </ListItem>
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/" render={() => <h1>Admin Home</h1>} />
            <Route path="/users" render={() => <h1>Users</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
