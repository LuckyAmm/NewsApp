import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default function NewsPage(props) {
    const [loading, setLoading] = useState(false);
    const [totalArticles, setTotalArticles] = useState(0);
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([]);

  // const fetchData = async() => {
    
  // }
  const fetchData = async() => {
      setLoading(true);
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        )
        .then((response) => {
          const res = response.data;
          setArticles([...articles, ...res.articles]);
          setTotalArticles(res.totalResults);
          setLoading(false);
        });
    }
    const getMorePost = () => {
      setPage(page + 1);
    }
    
    // const nextPage = () => {setPage(page+1)}
    // const prevPage = () => {setPage(page-1)}

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [page])

    return (
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl mt-3">
          Hello ! Welcome 2 News Point -- Check the Daily News Here -{" "}
          {totalArticles}
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={getMorePost}
          hasMore={totalArticles !== articles.length}
          loader={<div className='flex items-center justify-center'><Spinner /></div>}
          endMessage={<h4>Nothing more to show</h4>}
        >
          <div className="w-fit p-5 grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2 md:p-2 md:gap-x-5 lg:grid-cols-3 ">
            {articles.map((element, i) => {
                return (
                  <NewsItem
                    key={i}
                    title={!element.title ? "No Title" : element.title}
                    urlToImage={element.urlToImage}
                    desc={
                      !element.description
                        ? "No desc"
                        : element.description
                    }
                    url={element.url}
                  />
                );
              })}
          </div>
        </InfiniteScroll>

        <div className="w-full flex justify-between px-10 my-10">
          {/* {loading && <Spinner />} */}
          {/* <button
            disabled={page <= 1}
            onClick={prevPage}
            className="bg-black text-white px-4 py-1 hover:bg-gray-900 active:bg-black rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalArticles / 15)}
            onClick={nextPage}
            className="bg-black text-white px-4 py-1 hover:bg-gray-900 active:bg-black rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Next
          </button> */}
        </div>
      </div>
    );
}
