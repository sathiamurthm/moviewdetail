import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {MovieDetail} from './moviedetails'

interface State{
  items: any,
  isLoaded:boolean
}
interface Props{
}


export class App extends React.Component<Props, State> {

  constructor(props){
    super(props);
    this.state = { items: [], isLoaded:false };
  }

    public componentDidMount() {
      console.log('i am called');
    fetch("http://www.omdbapi.com/?apikey=8d13ddf&type=movie&s=bad")
    .then(resp => resp)
    .then(resp => resp.json())
    .then(response => {
        if (response.Response === 'False') {
            
        }
        else {
          console.log('data',response.Search)
          this.setState({items:response.Search});
        }}),
       
        (error) => {
          this.setState({
            isLoaded: false
          });
        }
  
  }
  public render() {
    return (
      <div className="row">
        <h2>Movies</h2>
        <table className="table">
          <tbody>
            {
              this.state.items.map((item) =>
                <MovieDetail title={item.Title} year={item.Year} imdbID={item.imdbID} type={item.Type} poster={item.Poster}/>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
};