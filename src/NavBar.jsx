import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <AppBar position="static" style={{ marginBottom: 15 }}>
                    <Toolbar>
                        <Typography style={{ flexGrow: 1 }} variant="h4">
                            Gustavo de Almeida Santos
                    </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default NavBar;