import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DisplayAlbums = (props) => {
	const albums = props.albums

	return (
		<div>
			<h3>Albums</h3>
			<div className="row">
				{albums.map(album => (
					<div className="col-xs-4" key={album.id}>
						<Link to={`/albums/${album.id}`} className="thumbnail">
							<img src={album.imageUrl}/>
							<div className="caption">
								<h5>
									<span>{album.name}</span>
								</h5>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default DisplayAlbums