import React from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import Form from "./components/Form";
import Search from "./components/Search";
// import Rating from "./components/Rating";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      movie: "",
      rank: "",
      search: "",
      movies: [
        {
          title: "You",
          src:
            "https://i.pinimg.com/736x/c2/7f/a4/c27fa447b91d34933293f37a0b2f1a89.jpg",
          rank: "5"
        },
        {
          title: "Sonic The Hedgehog",
          src:
            "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1573569638/amc-cdn/production/2/movies/56300/56344/PosterDynamic/96202.jpg",
          rank: "4"
        },
        {
          title: "Harley Quinn: Birds of Prey",
          src:
            "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1576256007/amc-cdn/production/2/movies/54400/54416/PosterDynamic/97309.jpg",
          rank: "3"
        },
        {
          title: "Blumhouse's Fantasy Island",
          src:
            "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1580385753/amc-cdn/production/2/movies/59100/59079/Poster/285307R1.jpg",
          rank: "4"
        },
        {
          title: "The Photograph",
          src:
            "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1578590562/amc-cdn/production/2/movies/59400/59413/PosterDynamic/98365.jpg",
          rank: "5"
        },
        {
          title: "A Turtle's Tale 2: Sammy's Escape From Paradise",
          src:
            "https://images-na.ssl-images-amazon.com/images/I/91iuUHOeQQL._AC_SL1500_.jpg",
          rank: "3"
        },
        {
          title: "Blue My Mind",
          src:
            "https://m.media-amazon.com/images/M/MV5BNmIzZTA4MDYtNTBjYS00MmJhLWE0ZTktNjM1Mjg2NzlhZDg3XkEyXkFqcGdeQXVyMDU5MDEyMA@@._V1_SY1000_SX750_AL_.jpg",
          rank: "3"
        }
      ]
    };
  }

  changeHandlerTitle = e => {
    this.setState({
      title: e.target.value
    });
  };
  changeHandlerMovie = e => {
    this.setState({
      movie: e.target.value
    });
  };
  changeHandlerRank = e => {
    this.setState({
      rank: e.target.value
    });
  };
  changeHandlerSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  addMovie = () => {
    if (this.state.title && this.state.movie && this.state.rank)
      this.setState({
        movies: this.state.movies.concat({
          title: this.state.title,
          src: this.state.movie,
          rank: this.state.rank
        }),
        title: "",
        movie: "",
        rank: ""
      });
  };

  clickRank = i => {
    this.setState({
      rank: i
    });
  };
  render() {
    return (
      <div className="App">
        <Search
          changeHandlerSearch={this.changeHandlerSearch}
          rank={this.state.rank}
          clickRank={this.clickRank}
        />
        {/* <Rating rank={this.state.rank} clickRank={this.clickRank} /> */}
        <hr />
        <MoviesList
          movies={
            this.state.search || this.state.rank
              ? this.state.movies.filter(
                  el =>
                    el.title.includes(this.state.search) &&
                    el.rank >= this.state.rank
                )
              : this.state.movies
          }
        />
        <Form
          onSubmit={this.addMovie}
          changeHandlerTitle={this.changeHandlerTitle}
          changeHandlerMovie={this.changeHandlerMovie}
          changeHandlerRank={this.changeHandlerRank}
          title={this.state.title}
          src={this.state.movie}
          rank={this.state.rank}
        />
      </div>
    );
  }
}

export default App;
