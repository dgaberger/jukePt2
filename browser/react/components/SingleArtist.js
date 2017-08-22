import React, { Component } from 'react'
import axios from 'axios'
import { HashRouter, Link , Route } from 'react-router-dom'

import Songs from './Songs'
import DisplayAlbums from './DisplayAlbums'


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
	}

	render () {

	  const artist = this.state.selectedArtist; // or however you've named it
	  const albums = this.state.selectedAlbums //
	  const songs = this.state.selectedSongs

	  return (
	  	<HashRouter>
		    <div>
		      <h3>{ artist.name }</h3>
		      <ul className="nav nav-tabs">
		        <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
		        <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
		      </ul>
		      <Route path="/artists/:artistId/albums" render={() => <DisplayAlbums albums={albums} /> } />
		      <Route path="/artists/:artistId/songs" render={() => <Songs songs={songs} /> } />
		    </div>
		</HashRouter>
	  );
	}
}

