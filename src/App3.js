import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App1 extends Component {
    state = {
    }

    componentWillMount() {
        // request API 호출
        console.log('componentWillMount() called!!');
    }

    componentDidMount() {
        this._getMovies();
    }
    _getMovies = async () => {
        const movies =await this._callApi();
        this.setState({
            movies: movies
        });
    }
    _callApi = async() => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            .then((response) => response.json())
            .then((json) =>  json.data.movies    )
            .catch((err) => console.log(err));
    }
    _renderMovies = () => {
        // const movies = [<Movie/>,<Movie/>,<Movie/>];
        const movies = this.state.movies.map((movie, index) => {
            console.log(movie);
            return <Movie title={movie.title} poster={movie.medium_cover_image} genres={movie.genres} synopsis={movie.synopsis} key={index} />
        });

        return movies;
    }
    render() {
        console.log('render() called!!');
        return (
            <div className="App">
                {
                    (this.state.movies == null) ? 'loading' : this._renderMovies()
                }
            </div>
        );
    }
}

export default App1;