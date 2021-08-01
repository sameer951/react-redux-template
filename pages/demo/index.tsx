import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../../src/web/redux/actions/actions'
import Examples from '../../src/web/components/examples';
import { axiosInstance } from '../../src/web/helper/axios.util';
import { Paginations } from '../../src/web/components/util/pagination/pagination.component';
import { usePaginations } from '../../src/web/components/util/pagination/usePagination.hook';

const Index = ({ posts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch]);

  const viewHandler = (pd, index) => {
    return <React.Fragment key={index + Math.floor(Math.random())}>
      <p>{pd.title}</p>
      <img src={pd.thumbnailUrl} alt="" />
    </React.Fragment>
  }

  const { updateConfig, pagination, viewList, snipedData } = usePaginations({ data: posts, UIHandler: viewHandler });

  return (
    <>      
      <>{pagination}</>
      <>{snipedData.map(viewHandler)}</>
      {/* <>{viewList}</> */}
      {/* <Paginations data={posts} UIHandler={viewHandler}></Paginations> */}
      <Examples />
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

export default Index
