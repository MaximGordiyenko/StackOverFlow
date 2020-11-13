import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import axios from 'axios';

const Main = () => {
  const forksPerPage = 5;
  const [activePage, setCurrentPage] = useState(1);
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  
  const getData = () => {
    return dispatch => {
      axios.get(`https://api.stackexchange.com/2.2/questions?fromdate=1605052800&todate=1605139200&order=${"desc"}&sort=${"activity"}&site=stackoverflow`)
        .then(res => dispatch({
            type: "FETCH_DATA",
            data: res.data
          })
        );
    };
  };
  
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  
  console.log(content.data.items);
  
  // const dataLegnth = content.data.items.length;
  const indexOfLastPage = activePage * forksPerPage;
  const indexOfFirstPage = indexOfLastPage - forksPerPage;
  
  return (
    <main className={`page-main`}>
      {content.data.items
      && Array.isArray(content.data.items)
      && content.data.items.length > 0
      && (
        content.data.items.slice(indexOfFirstPage, indexOfLastPage).map(item => (
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
      )}
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
