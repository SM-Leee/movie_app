import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App1 extends Component {
    state = {
        greeting : 'Good Morning',
        movies : [{
            title: '생일',
            poster: 'https://movie-phinf.pstatic.net/20190329_223/1553847778414CTAcF_JPEG/movie_image.jpg'
        }, {
            title: '헬보이',
            poster: 'https://movie-phinf.pstatic.net/20190404_205/155434484507891fje_JPEG/movie_image.jpg'
        }, {
            title: '돈',
            poster: 'https://movie-phinf.pstatic.net/20190306_280/1551849045570X4iac_JPEG/movie_image.jpg'
        }, {
            title: '미성년',
            poster: 'https://movie-phinf.pstatic.net/20190411_137/1554973943268Tu8fN_JPEG/movie_image.jpg'
        }, {
            title: '극한직업',
            poster: 'https://movie-phinf.pstatic.net/20190116_206/1547615429111dINWj_JPEG/movie_image.jpg'
        }]
    }
    componentWillMount() {
        // request API 호출
        console.log('componentWillMount() called!!');
    }

    componentDidMount() {
        // request done
        console.log('componentDidMount() called!!');
        setTimeout(()=>{
            this.setState({
                greeting : 'Good Afternoon!!!',
                // movies : this.state.movies.concat([{
                //     title : '덤보',
                //     poster : 'https://movie-phinf.pstatic.net/20190328_112/1553762886182QHDpG_JPEG/movie_image.jpg'
                // }])
                movies : [
                    //...this.state.movies --- > 전에 있던내용 뒤에 붙힌다.
                    ...this.state.movies, {
                        title : '덤보',
                        poster : 'https://movie-phinf.pstatic.net/20190328_112/1553762886182QHDpG_JPEG/movie_image.jpg'
                    }
                ]
            })
        }, 5000);
    }
    render() {
        console.log('render() called!!');
        return (
            <div className="App">
                <h1>{this.state.greeting}</h1>
                {
                    this.state.movies.map((movie, index) => {
                        return <Movie title={movie.title} poster={movie.poster} key={index} />
                    })
                }
            </div>
        );
    }
}

export default App1;