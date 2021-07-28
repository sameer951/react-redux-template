import React, { useEffect, useMemo, useState } from "react";
import ReactPaginate from 'react-paginate';

const InitialSettings = { offset: 0, perPage: 5, currentPage: 0 };
const _paginations = ({ data = [], UIHandler }) => {

    const [pageSetting, setPageSettings] = useState(InitialSettings);
    const handleClick = ({ selected = 0 }) => {
        const offset = selected * pageSetting.perPage;
        setPageSettings({ ...pageSetting, currentPage: selected, offset: offset });
    }
    const viewList = useMemo(() => {
        const slice = data ? data?.slice(pageSetting.offset, pageSetting.offset + pageSetting.perPage) : [];
        return slice.map((pd, ind) => <React.Fragment key={ind}>{UIHandler(pd, ind)}</React.Fragment>);
    }, [pageSetting.currentPage, pageSetting.offset, data])

    useEffect(() => { if (pageSetting.currentPage > 0) handleClick({ selected: 0 }) }, [pageSetting.offset, data]);
    return <>
        {/* <React.Fragment>{children}</React.Fragment> */}
        <>{viewList} </>
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


export const Paginations = _paginations;
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