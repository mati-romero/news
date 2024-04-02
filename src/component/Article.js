import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

class Article extends React.Component {

    render(){

        const { article } = this.props;

        return(
            <React.Fragment>
                <div className="article row mt-3">
                    <div className='col-3'>
                        <img src={article.image} className="img-fluid rounded" alt="article thumbnail"/>
                    </div>
                    <div className='col-9'>
                        <Link to={"/news"} state={article}><h3>{article.title}</h3></Link>
                        <p>{article.description}</p>

                        <div className='text-end'>
                            <p>{article.publishedAt}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Article;