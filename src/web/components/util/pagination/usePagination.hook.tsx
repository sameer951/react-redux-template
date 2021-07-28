
import React, { useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';

const InitialSettings = { offset: 0, perPage: 5, currentPage: 0 };
export const usePaginations = ({ data = [], UIHandler = (pd) => pd }: any) => {

  const [pageSetting, setPageSettings] = useState(InitialSettings);

  const updateConfig = ({ perPage, currentPage }) => {
    let data = {};
    data['perPage'] = perPage ?? pageSetting.perPage;
    data['currentPage'] = currentPage ?? pageSetting.currentPage;
    data['offset'] = data['currentPage'] * pageSetting['perPage'];
    setPageSettings({ ...pageSetting, ...data });
  }
  const handleClick = ({ selected = 0 }) => {
    const offset = selected * pageSetting.perPage;
    setPageSettings({ ...pageSetting, currentPage: selected, offset: offset });
  }
  const viewList = useMemo(() => {
    const slice = data ? data?.slice(pageSetting.offset, pageSetting.offset + pageSetting.perPage) : [];
    return slice.map((pd, ind) => <React.Fragment key={ind}>{UIHandler(pd, ind)}</React.Fragment>);
  }, [pageSetting.currentPage, pageSetting.offset, data])
  const snipedData = data ? data?.slice(pageSetting.offset, pageSetting.offset + pageSetting.perPage) : [];
  const pagination = () => {
    return <>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(data?.length / pageSetting.perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"} />
      <>{loadStyle()}</>
    </>
  }
  return { updateConfig, pagination: pagination(), viewList, snipedData: snipedData }
}


const loadStyle = () => <style jsx global>{`

.pagination {
  margin: 15px auto;
  display: flex;
  list-style: none;
  outline: none;
}
.pagination > .active > a{
  background-color: #47ccde ;
  border-color: #47ccde ;
  color: #fff;
}
.pagination > li > a{
  border: 1px solid #47ccde ;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
}
.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
  background-color: #47ccde ;
  border-color: #47ccde;
  outline: none ;
}
.pagination > li > a, .pagination > li > span{
  color: #47ccde
}
.pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
  border-radius: unset
}
  `}
</style>;