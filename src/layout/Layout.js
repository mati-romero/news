import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from '../component/Article';

function Layout(props) {   
    return(
        <React.Fragment>
            <div className='container'>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Layout;
