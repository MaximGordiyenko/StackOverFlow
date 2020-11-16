import React, { useState } from 'react';
import Pagination from "react-js-pagination";
import useRequest from "../Hooks/useRequest";

require('dotenv').config();

const Main = () => {
  const forksPerPage = 5;
  const [activePage, setCurrentPage] = useState(1);
  const { data, loading, error } = useRequest(`https://api.stackexchange.com/2.2/questions?fromdate=${"1605052800"}&todate=${"1605139200"}&order=desc&sort=activity&site=stackoverflow&key=${process.env.REACT_APP_SOFkey}`);
  
  const indexOfLastPage = activePage * forksPerPage;
  const indexOfFirstPage = indexOfLastPage - forksPerPage;
  
  console.log(data, loading, error);
  
  return (
    <main className={`page-main`}>
      {
        data.data.items &&
        Array.isArray(data.data.items) &&
        !loading ?
          data.data.items.slice(indexOfFirstPage, indexOfLastPage).map(item => (
            <a href={item.link} target="_blank" rel="noreferrer" key={item.question_id} className={`main-container`}>
              <div className={`container-image`}>
                <img src={item.owner.profile_image} alt={item.owner.profile_image}/>
                <span>Name: {item.owner.display_name}</span>
                <span>Reputation: {item.owner.reputation}</span>
              </div>
              <div className={`container-content`}>
                <h3>{item.title}</h3>
                <ul>{item.tags.map((tag, idx) => (<li key={idx}>{tag}</li>))}</ul>
              </div>
            </a>
          ))
          :
          <h1>Loading...</h1>
      }
      
      <Pagination
        totalItemsCount={30}
        onChange={(pageNumber) => setCurrentPage(pageNumber)}
        activePage={activePage}
        innerClass={`pagination`}
        activeClass={`active`}
        itemClass={`pagination-list`}
        itemsCountPerPage={5}
        pageRangeDisplayed={4}
      />
    </main>
  );
};

export default Main;
