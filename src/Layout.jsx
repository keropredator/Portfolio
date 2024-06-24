import { AppBar, Toolbar, Button, Grid, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <NavLink to="/XoGame" >
                <Button>Hello</Button>
              </NavLink>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
    </Grid>
  );
}
