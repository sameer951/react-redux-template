import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PrimarySearchAppBar from "./partial/appbar.component";
import styles from "./layout.module.css";
import { Sidebar_Layout } from "./partial/appbar_sidemenu";

const layout1List = ['/next-page'];
const layout2List = ['/demo/show-redux-state', '/demo'];


function _layout({ children }) {
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
        return <>
            <Sidebar_Layout>
                <>{children}</>
            </Sidebar_Layout>
        </>
    } else return <>
        <>{children}</>
    </>

}

export const LocalLayout = _layout;
