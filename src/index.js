import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB2tyHm3wBWPUrpcCmHmHpgJ75MGGyAEqo';

const Logo = () => <img className="logo" src="http://plainicon.com/download-icons/41986/plainicon.com-41986-afa5-128px.png" alt=""></img>

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedVideo: null
     };

     this.videoSearch('reactjs facebook');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
