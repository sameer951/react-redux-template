import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../src/web/redux/actions/actions'
import Examples from '../src/web/components/examples'
import { axiosInstance } from '../src/web/helper/axios.util'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  useEffect(() => {
    let url = 'typicode/demo/posts';
    axiosInstance.get(url).then(data => { console.log('fetched==>', data); })
  }, [])

  return (
    <>
      <Examples />
    </>
  )
}

export default Index
