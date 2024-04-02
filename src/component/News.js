import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useLocation } from 'react-router-dom';

 function News () {
    const news = useLocation().state;

    return(
        <React.Fragment>
            <h1>{news.title}</h1>
            <p>{news.description}</p>
            <div className='text-center'>
                <img src={news.image} className="img-fluid " alt="header image"/>
            </div>
            <hr/>
            <p>{news.content}</p>
            <p className='w-100 text-end'>{news.publishedAt}</p>
            <hr/>
            <h5>source: {news.source.name}</h5>
            <a href={news.url} target='_blank'>{news.url}</a>
        </React.Fragment>
    );
}

export default News;