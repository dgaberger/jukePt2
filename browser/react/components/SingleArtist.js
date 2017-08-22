import React, { Component } from 'react'
import axios from 'axios'
import Songs from './Songs'
import Artist from './SingleArtist'
import Album from './SingleAlbum'


export default class SingleArtist extends Component {
	constructor( props ) {
		super()
		this.state = {
			selectedArtist: {}, selectedAlbums: [], selectedSongs: []

		}
	}

	componentDidMount() {
		const artistId = this.props.match.params.artistId
		axios.get(`/api/artists/${artistId}`)
			.then(res => res.data)
			.then(artist => this.setState({
				selectedArtist: artist
			}))
		axios.get(`/api/artists/${artistId}/songs`)
			.then(res => res.data)
			.then(songs => this.setState({
				selectedSongs: songs
			}))
		axios.get(`/api/artists/${artistId}/albums`)
			.then(res => res.data)
			.then(albums => this.setState({
				selectedAlbums: albums
			}))
			.then((info) => {
				console.log(info)
				console.log(this.state.selectedSongs,this.state.selectedArtist ,this.state.selectedAlbums)
			})
		this.state.selectedSongs.bind(this)
		this.state.selectedArtist.bind(this)
		this.state.selectedAlbums.bind(this)

	}

	render() {
		const artist = this.state.selectedArtist
		return (
			<div>
				<h3>{artist.name}</h3>
				<h4>ALBUMS</h4>
				<Songs songs={this.state.selectedSongs}/>
				{/*<Artist artist={this.state.selectedArtist}/>*/}
				{/*<Album album={this.state.selectedAlbums}/>*/}
			</div>
		)
	}
}
// this.state.artists.map(artist => {
// 	return (
// 		<div className="list-group-item" key={artist.id}>
// 			{/* determine where to actually Link to later! */}
// 			<Link to={`/artists/${artist.id}`}>{artist.name}</Link>
// 		</div>

