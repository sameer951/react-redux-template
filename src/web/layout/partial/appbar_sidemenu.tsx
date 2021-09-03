import React from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { palette } from '../../styles/theme';

const drawerWidth = 240;
const style = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    swipeableDrawer: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        background: palette.side_menu.default,
        color: palette.primary.main,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth,
        },
    },
})

function ClippedDrawer({ classes, children, menuDom }) {
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleHamburger = (val: any = 'undefined') => {
        if (val !== 'undefined') setOpen(!open);
        else setOpen(val);
    };
    if (!menuDom) {
        menuDom = <div className={classes.drawerContainer}>
            <List>
                <ListItem button key={'Menu Sample'}>
                    <ListItemIcon><InboxIcon /> </ListItemIcon>
                    <ListItemText primary={'Menu Sample'} />
                </ListItem>
            </List>
        </div>;
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleHamburger}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Clipped drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={() => { handleHamburger(false) }}
                onOpen={() => { handleHamburger(true) }}
                className={classes.swipeableDrawer}
                classes={{ paper: classes.drawerPaper, }}
            >
                <Toolbar />
                {menuDom}
            </SwipeableDrawer>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper, }}
            >
                <Toolbar />
                {menuDom}
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {children}
            </main>
        </div>
    );
}


export const Sidebar_Layout = withStyles(style)(ClippedDrawer);