import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Index extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  
  public componentDidMount() {

    fetch("http://www.omdbapi.com/?apikey=8d13ddf&type=movie&s=bad")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  
  }
  public render() {
    return (
      <div className="row">
        <h2>Movies</h2>
        <table className="table">
          <tbody>
            {
              this.state.items.map((item) =>
                <MovieDetail title={item.title} year={item.year} imdbID={item.imdbID} type={item.type} poster={item.poster}/>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
};