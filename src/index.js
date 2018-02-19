import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppBar,
  Drawer,
  IconButton,
  Reboot,
  Toolbar,
  Typography
} from 'material-ui';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import { AccountCircle, Menu } from 'material-ui-icons';

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
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
