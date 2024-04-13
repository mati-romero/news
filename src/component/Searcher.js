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

        const search = this.state.search.trim();
        const alertCtrlElement = document.getElementById('alertCtrl');

        if(search.length == 0){
            console.log("No hay palabras");
            const inputElement = document.getElementById('searchId');
            alertCtrlElement.classList.remove('d-none');        
            inputElement.focus();
            return;
        }

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

    handleInputChange = (event) => {
        this.setState({ search: event.target.value });
    };

    handleKeyDown = (event) => {
        if(event.key == 'Enter'){
            this.searchNews();
        }
        else {
            document.getElementById('alertCtrl').classList.add('d-none');
        }
    };

    render(){
        return(
            <React.Fragment>
                <div className='row mt-5 justify-content-center align-items-center'>
                    <div className='col-2'>
                        <img src={logo} className="img-fluid" alt="logo" />
                    </div>
                    <div className='col-8'>
                        <input type='text' 
                            id='searchId'
                            className='form-control' 
                            value={this.state.search} 
                            onChange={this.handleInputChange} 
                            onKeyDown={this.handleKeyDown}/>
                    </div>
                    <div className='col-2'>
                        <button type='button' className='btn btn-search-orange' onClick={this.searchNews}>Search</button>
                    </div>
                </div>
                
                <div className='row mt-2'>
                    <div className='col-8 offset-2'>
                        <div id='alertCtrl' className="alert alert-danger d-none" role="alert">
                            Favor de indicar que noticia y/o artículo desea buscar
                        </div>
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