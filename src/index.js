import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBIeUu4Ib5yGxTRBUMYI-mromjKAKFjTbo';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));