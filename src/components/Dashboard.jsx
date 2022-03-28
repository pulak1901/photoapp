import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"

import { AlbumsList } from './AlbumsList'
import { NewAlbumModal } from './NewAlbumModal'
import { userLogout, userRemoveAlbum } from '../services/userService'
import { UserIconModal } from './UserIconModal'
import { GetAvatar } from '../utility/userAvatars'
import { Image } from 'react-bootstrap'

import './Dashboard.scss'

/* Dashboard view. Displays user information, list of albums, and whatever is passed in as a child to this component.
 * Inputs:
 *  - currAlbum => Album name-string
 *  - onAlbumSelected => ('') => {}
 *  - children => <></>
 */
export default function Dashboard(props) {
	let navigate = useNavigate()
	let dispatch = useDispatch()
	const userName = useSelector(state => state.user.currentUser)
	const userIcon = useSelector(state => state.user.userData[userName].icon)
	const [ showUserIconModal, setShowUserIconModal ] = useState(false)
	const [ showNewAlbumModal, setShowNewAlbumModal ] = useState(false)

	const onAlbumSelected = props.onAlbumSelected
	const currAlbum = props.currAlbum

	function button_logout(e) {
		userLogout(dispatch)
		navigate('/')
	}

	function onAlbumDelete(album) {
		userRemoveAlbum(dispatch, album)
	}

	return (<div>
		<div className='DashboardContainer'>
			<div className='DashboardUserPane'>
				<div className='DashboardUserContainer'>
					<Image src={GetAvatar(userIcon)} rounded={true} onClick={() => setShowUserIconModal(true)} className="UserAvatar"/>
					<div className='UserChip'>
						<h2>{userName}</h2>
						<button onClick={button_logout}>
							<img src="/assets/icons/signout.svg" alt="signout icon."/>
						</button>
					</div>
				</div>
			</div>

			<AlbumsList currAlbum={currAlbum} onAlbumSelected={onAlbumSelected} onAlbumAdd={() => setShowNewAlbumModal(true)} onAlbumDelete={onAlbumDelete} />

			<div className='DashboardContentPane'>
				{props.children}
			</div>
		</div>

		<NewAlbumModal showModal={showNewAlbumModal} closeModal={() => setShowNewAlbumModal(false)} />
		<UserIconModal showModal={showUserIconModal} closeModal={() => setShowUserIconModal(false)}/>

		</div>
	)
}