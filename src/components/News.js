import React, { useState, useEffect } from 'react';
import Newsitems from './Newsitems';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalresult, settotalresult] = useState(0);

  const newsupdate = async () => {
    try {
      // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b1ea163584064e1ea5f8677a5f84910b&page=${this.state.page}`;
      props.setprogress(0)
      // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=495b5028b914435bbca6ecfb3e679ee0&page=${page}&pagesize=6`;
      let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`;
      setloading(true);
      let data = await fetch(url);
      props.setprogress(30)
      let parsedata = await data.json();
      setarticles(parsedata.articles);
      setloading(false);
      settotalresult(parsedata.totalResults);
      props.setprogress(100)
    } catch (error) {
      console.log("Somthing went Wrong");
    }
  }
  useEffect(() => {
    newsupdate();
    // eslint-disable-next-line
  }, []);
  const fetchMoreData = async () => {
    //   // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b1ea163584064e1ea5f8677a5f84910b&page=${this.state.page}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=495b5028b914435bbca6ecfb3e679ee0&page=${page + 1}&pagesize=9`;
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`;
    setpage(page + 1);
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(articles.concat(parsedata.articles))
    setloading(false);
    settotalresult(parsedata.totalResults);
  };
  return (
    <>
      <div className='container my-4'>
        <h1 className='text-center' style={{ color: "white", textShadow: "1px 5px 15px blue" }}>{props.newstype} NEWS-Top Headlines</h1>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalresult}
          loader={loading && <Loading />}
        >
          <div className="container">
            <div className="row my-4">
              {articles.map((element) => {
                return (
                  <div className='col-md-4 my-4' key={element.url}>
                    <Newsitems tittle={element.title} discription={element.description} imgurl={element.urlToImage} url={element.url} author={element.author}
                      date={element.publishedAt} source={element.source.name} />
                  </div>)
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default News
