import React from 'react'
import { useSelector } from 'react-redux'

/* 404 page
 */
export default function PageNotFound() {
	const userName = useSelector(state => state.user.currentUser)
	
	return (
		<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
			<img src="/assets/empty.svg" style={{width: "400px"}} alt="No images in this album!"/>
			{
				userName === '' ? 
					<p>Perhaps you meant to go <a href="/">here</a>?</p>
				:
					<p>Head to the <a href="/photos">image gallery</a>?</p>
			}
			
		</div>
	)
}