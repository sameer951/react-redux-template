import Link from "next/link";
import React from "react";
import { usePaginations } from "../src/web/components/util/pagination/usePagination.hook";
import { axiosInstance } from "../src/web/helper/axios.util";

const Index = ({ posts }) => {
    const { updateConfig, pagination, snipedData } = usePaginations({ data: posts});

    return (
        <>
            <>{pagination}</>
            <>{snipedData.map((pd, index) =>
                <React.Fragment key={index + Math.floor(Math.random())}>
                    <p>{pd.title}</p>
                    <img src={pd.thumbnailUrl} alt="" />
                </React.Fragment>)}</>
            {/* <>{viewList}</> */}
            {/* <Paginations data={posts} UIHandler={viewHandler}></Paginations> */}
            <Link href="/demo/show-redux-state">
                <a>Click to see current Redux State</a>
            </Link>
            <br /> <br />
            <Link href="/next-page">
                <a>Click to see current NextJS Documentation</a>
            </Link>
        </>
    )
}

export async function getStaticProps() {
    let url = '/photos';
    const res = await axiosInstance.get(url)
    // const res = await fetch('https://api.github.com/repos/developit/preact')
    // const json = await res.json()

    return { props: { posts: res }, }
}

export default Index;
