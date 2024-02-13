import React, { useState, useEffect } from 'react'
import Navitems from './Navitems'
import Spinner from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'
// import { useEffect } from 'react'
import PropTypes from 'prop-types'

function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1);
    }
    document.title = `${capitalize(props.category)} - News`

    const handleRequest = async () => {
        props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1098163f894c4766887b3c3b375e1ab8&page=${page}&pageSize=6`;
        let data = await fetch(url);
        props.setProgress(45);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        handleRequest();
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1098163f894c4766887b3c3b375e1ab8&page=${page + 1}&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    return (
        <div className='my-4'>
            <h4 className='text-center fw-bolder'>Top - {capitalize(props.category)} Headline </h4>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row my-3 g-5">
                        {articles.map((e) => {
                            return <div className="col-md-4" key={e.url}>
                                <Navitems title={e.title} description={e.description !== null ? e.description.slice(0, 90) : "Click On Read More Details to See Details"} imgUrl={e.urlToImage} url={e.url}
                                    author={e.author} updated={e.publishedAt} source={e.source} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default News
