import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PrimarySearchAppBar from "./partial/appbar.component";
import styles from "./layout.module.css";
import { Sidebar_Layout } from "./partial/appbar_sidemenu";

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    drawerContainer: {
        overflow: 'auto'
    }
}))
const layout1List = ['/next-page'];
const layout2List = ['/demo/show-redux-state', '/demo'];


function _layout({ children }) {
    const classes = useStyles();
    const { asPath } = useRouter();
    if (layout1List.some((key) => asPath.startsWith(key))) {
        return <>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <div className={styles.main_content}>
                <>{children}</>
            </div>
            {/* {loadStyle()} */}
        </>
    } else if (layout2List.some((key) => asPath.startsWith(key))) {
        const showMenuDom = (<div className={classes.drawerContainer}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>);
        return <>
            <Sidebar_Layout menuDom={showMenuDom}>
                <>{children}</>
            </Sidebar_Layout>
        </>
    } else return <>
        <>{children}</>
    </>

}

export const LocalLayout = _layout;
