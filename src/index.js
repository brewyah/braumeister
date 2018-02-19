import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from "material-ui";

import {
  Menu
} from "material-ui-icons";

const MyApp = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <Menu />
      </IconButton>
      <Typography variant="title" color="inherit">
        Admin
      </Typography>
    </Toolbar>
  </AppBar>
);

ReactDOM.render(MyApp(), document.getElementById('root'));