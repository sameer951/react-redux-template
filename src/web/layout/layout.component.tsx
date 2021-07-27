import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const layout1List = ['/next-page'];
const layout2List = ['/show-redux-state'];


function _layout({ children }) {
    const { asPath } = useRouter();
    if (layout1List.some((key) => asPath.startsWith(key))) {
        return <>
            <div>Layout 1</div>
            <>{children}</>
        </>
    } else if (layout2List.some((key) => asPath.startsWith(key))) {
        return <>
            <div>Layout 2</div>
            <>{children}</>
        </>
    } else return <> 
        <>{children}</>
    </>

}

export const LocalLayout = _layout;