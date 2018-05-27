import React, { Component } from 'react';
import { connect } from 'react-redux';


import './content.css';
class Content extends Component {

    render() {
        return (
            <div id="hero" className="Hero">
                <div className="content" >
                    <div className="ContentBox1">
                        <img className="logo" height="200" width="200" src={this.props.searchMovieData.Poster} alt="narcos background" />
                    </div>
                    <div className="ContentBox2">
                        <h2>{this.props.searchMovieData.Title}</h2>
                        <h5>{this.props.searchMovieData.Released}</h5>
                        {/* {this.props.rating.map((rating, index) => (
                            <h5>IMDB Reating: {rating.Value}</h5>
                        ))} */}
                        {/* <h5>IMDB Reating: {rating}</h5> */}
                        <h5>IMDB Reating: {this.props.searchMovieData.imdbRating}</h5>
                        <p>{this.props.searchMovieData.Title} Won {this.props.searchMovieData.Awards} directed by {this.props.searchMovieData.Director}
                        {this.props.searchMovieData.Title} available in {this.props.searchMovieData.Language} </p>
                        <div className="button-wrapper">
                            {/* <HeroButton primary={true} text="Watch now" />
                        <HeroButton primary={false} text="+ My list" /> */}
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    if (state) {
        return {
            searchMovieData: state ? state : {},
            rating: state.Ratings
        }
    }
}
export default connect(mapStateToProps)(Content);