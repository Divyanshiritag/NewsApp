import React, { useEffect,useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props ) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  

  const updateNews= async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=0f1b433b76a249c0a49a1ba1d687aeff&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
    effect 
  }, [])
  

  // const handlePreviousClick = async () => {
  //   setPage(page - 1)
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page + 1)
  //   updateNews();
  // };

  const fetchMoreData = async() => {  
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=0f1b433b76a249c0a49a1ba1d687aeff&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <div className="container my-3">
        <h1 style={{ margin: "35px 0px" }}>NewsMonkey - Top {props.category} Headlines</h1>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={state.articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row"> 
         {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
             
              );
            })}
          </div>
        </div>
        </InfiniteScroll>
        
      </div>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
