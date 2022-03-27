import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from "react-bootstrap"

import './AlbumsList.scss'
import { ALL_PHOTOS_ALBUM_NAME } from '../utility/constants'

export function AlbumsList(props) {
	// current user is only required to get current list of albums
	// TODO: perhaps load current albums into state.user?
  	const user = useSelector(state => state.user.currentUser)
  	const albums = useSelector(state => state.user.userData[user].albums)

  	const albumList = []
  	if (albums)
	  	albumList.push(...Object.keys(albums))
  	const onAlbumSelected = (album) => props.onAlbumSelected(album)
  	const onAlbumDelete = (album) => props.onAlbumDelete(album)

  	const currentAlbum = props.currAlbum

	// If user has albums, returns a header, buttons to navigate to and delete albums
  	const albumButtonList = () => {
    	if (albumList && albumList.length > 0) {
      		return (
	        	<div className="CurrentAlbumButtonsListContainer">

    	      		<div className='CurrentAlbumButtonsListHeader'>
            			<div className='Separator'></div>
        	    		<p>My&nbsp;albums</p>
	          		</div>

          			<div className='CurrentAlbumButtonsList'>
            			{albumList.map((album, index) => (
	              			<div key={index} className='CurrentAlbumButtonGroup'>
                				<Button
	                  				id={`album-${index}`}
    	              				variant={album === currentAlbum ? "primary" : "outline-secondary"}
        	          				value={album}
            	      				onClick={() => onAlbumSelected(album)}
                	  				className="AlbumButton"
                  				>
                  					<p>{album}</p>
                				</Button>
                				<Button className="AlbumCloseButton" variant="outline-danger" onClick={() => onAlbumDelete(album)}>
                  					X
                				</Button>
             				</div>
            			))}
          			</div>
        		</div>
      		)
    	} else {
      		return <></>
    	}
	}
  
  	return <div className="AlbumButtonsListContainer">
    		<Button
    			id={`album-${ALL_PHOTOS_ALBUM_NAME}`}
        		variant={ALL_PHOTOS_ALBUM_NAME === currentAlbum ? "primary" : "outline-secondary"}
        		value={ALL_PHOTOS_ALBUM_NAME}
        		onClick={() => onAlbumSelected(ALL_PHOTOS_ALBUM_NAME)}
        		className="AllPhotosButton"
    			>
				<div className='AllPhotosButtonContents'>
					<img src="/assets/icons/photos.svg" alt="Photos icon." />
		  			<p>Image&nbsp;gallery</p>
				</div>      
    		</Button>
   			<div >
      			{albumButtonList()}
    		</div>
    
    		<Button onClick={props.onAlbumAdd} className="AddAlbumButton" variant="light">
      			<div>
        			<img src="/assets/icons/add.svg" alt="Add icon." />
        			<p>Add new album</p>
      			</div>
    		</Button>
    	<div className='Separator'></div>
  	</div>
}