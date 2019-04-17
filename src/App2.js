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
        // request done
        console.log('componentDidMount() called!!');
        
        //ajax
        // $.get('qweqwe', function(response){
        // });

        // fetch()는 promise를 return 한다.
        fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
        .then(   (response)=> response.json()   )
        .then((json)=>{
            console.log(json);
            this.setState({
                movies: json.data.movies
            });
        })
        .catch((err)=> console.log(err) )
        console.log('do something')
    }
    _renderMovies = () =>{
        // const movies = [<Movie/>,<Movie/>,<Movie/>];
        const movies =  this.state.movies.map((movie, index) => {
            console.log(movie);
            return <Movie title={movie.title} poster={movie.medium_cover_image} key={index} />
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