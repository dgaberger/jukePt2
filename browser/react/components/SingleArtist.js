import React, {Component} from 'react';
import axios from 'axios';
import Songs from './Songs'


export default class SingleArtist extends Component {
	constructor(props) {
		super();
		this.state = {
			selectedArtist: {},
			selectedAlbums: [],
			selectedSongs: []

		}
	}

		componentDidMount () {
			const artistId = this.props.match.params.artistId

			const promise1 = axios.get(`/api/artists/${artistId}`)
				.then(res => res.data)
				.then(artist => this.setState({
					selectedArtist: artist
				}))

			const promise2 = axios.get(`/api/artists/${artistId}/songs`)
				.then(res => res.data)
				.then(songs => this.setState({
					selectedSongs: songs
				}))


			const promise3 = axios.get(`/api/artists/${artistId}/albums`)
				.then(res => res.data)
				.then(albums => this.setState({
					selectedAlbums: albums
				}))

			Promise.all([promise1,promise2,promise3]);

		}

		render()
		{
			const artist = this.state.selectedArtist
			return (
				<div>
					<h3>{artist.name}</h3>
					<h4>ALBUMS</h4>
					<Songs songs={this.selectedSongs}/>
				</div>
			);
		}
}
// this.state.artists.map(artist => {
// 	return (
// 		<div className="list-group-item" key={artist.id}>
// 			{/* determine where to actually Link to later! */}
// 			<Link to={`/artists/${artist.id}`}>{artist.name}</Link>
// 		</div>

