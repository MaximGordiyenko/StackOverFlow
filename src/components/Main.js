import React, { useState } from 'react';
import Pagination from "react-js-pagination";
import useRequest from "../Hooks/useRequest";
import Cards from "./Cards";
import Input from "./Input";
require('dotenv').config();
import { useQueryParam, StringParam } from 'use-query-params';

const Main = ({ order, sort, selectedDateFrom, selectedDateTo }) => {
  const forksPerPage = 25;
  const [search, setSearch] = useQueryParam('search', StringParam);
  
  const [activePage, setCurrentPage] = useState(1);
  const { data, loading } = useRequest(`https://api.stackexchange.com/2.2/questions?fromdate=${toTimestamp(selectedDateFrom)}&todate=${toTimestamp(selectedDateTo)}&order=${order.value}&sort=${sort.value}&tagged=${search?.replace(',',';')}&site=stackoverflow&key=${process.env.REACT_APP_SOFkey}`);
  
  function toTimestamp(strDate) {
    const datum = Date.parse(strDate);
    return datum / 1000;
  }
  
  const indexOfLastPage = activePage * forksPerPage;
  const indexOfFirstPage = indexOfLastPage - forksPerPage;
  
  return (
    <main>
      <Input value={search} setSearch={setSearch}/>
      {
        data.data.items &&
        Array.isArray(data.data.items) &&
        !loading ?
          data.data.items.slice(indexOfFirstPage, indexOfLastPage).map(item => (
            <Cards item={item} key={item.question_id}/>
          ))
          :
          <h1>Loading...</h1>
      }
      <Pagination
        totalItemsCount={25}
        onChange={(pageNumber) => setCurrentPage(pageNumber)}
        activePage={activePage}
        innerClass={`pagination`}
        activeClass={`active`}
        itemClass={`pagination-list`}
        itemsCountPerPage={2}
        pageRangeDisplayed={5}
      />
    </main>
  );
};

export default Main;
