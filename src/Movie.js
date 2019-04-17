//const React = require('react');
import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

const Movie = ({ title, poster, genres, synopsis }) => {
    return (
        <div className='Movie'>
            <div className='Movie__Column'>
                <MoviePoster poster={poster} />
            </div>
            <div className='Movie__Column'>
                <h1>{title}</h1>
                <div className='Movie__Genres'>
                    {genres.map((genre, index) => <MoiveGenre genre={genre} key={index} />)}
                </div>
                <p className='Movie__Synopsis'>
                    {synopsis}
                </p>
            </div>
        </div>
    );

}

const MoviePoster = ({ poster }) => (<img className='Movie__Poster' src={poster} alt='' />)

const MoiveGenre = ({ genre }) => (<span className='Moive__Genre'>{genre}</span>)

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
MoiveGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

export default Movie;