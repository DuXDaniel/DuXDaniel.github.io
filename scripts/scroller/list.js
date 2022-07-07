import React, { useState } from 'react';
import useInfiniteScroll from "./useInfiniteScroll";

const List = () => {
  const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 2000);
  }

  return (
    <>
      <div className="photoSec">
        {listItems.map(listItem => <img src={srcListItem} classname="photoImg"></img>)}
        // use array of sources --> srcListItem(listItem)
      </div>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default List;