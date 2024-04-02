import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from './Article';
import logo from '../img/logo.png';
import './general.css'

class Searcher extends React.Component {

    state = {
        search: '',
        totalArticles: 0,
        articles: []
    };

    searchNews = async () => {

        const search = this.state.search;

        if(search != '') {
            const token = '4588013a57a1fc2bb9ef42f2bec8f459';
            const url = 'https://gnews.io/api/v4/search?q='+ search +'&apikey='+ token;
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.setState({totalArticles: data.articles.length, articles: data.articles});
            } catch (error) {
                console.error('Error:', error);
            }
        }
        
    }

    handleInputChange = (event) => {
        this.setState({ search: event.target.value });
    };

    render(){
        return(
            <React.Fragment>
                <div className='row mt-5 justify-content-center align-items-center'>
                    <div className='col-2'>
                        <img src={logo} className="img-fluid" alt="logo" />
                    </div>
                    <div className='col-8'>
                        <input type='text' className='form-control' value={this.state.search} onChange={this.handleInputChange}/>
                    </div>
                    <div className='col-2'>
                        <button type='button' className='btn btn-search-orange' onClick={this.searchNews}>Search</button>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <p>Total Articles: {this.state.totalArticles}</p>

                    {this.state.articles.map((article, index) => (
                        <Article key={index} article={article} />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Searcher;