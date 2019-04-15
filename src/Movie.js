//const React = require('react');
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div className='Movie'>
                <h1>Title</h1>
                <img src='http://www.mediasr.co.kr/news/photo/201902/51105_10786_5515.jpg' alt=''/>
            </div>
        );
    }
}

export default Movie;