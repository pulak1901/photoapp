import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { userLogin } from '../services/userService'
import logo from '../logo.svg'
import './login.scss'
import { resetImageData } from '../services/imageDataService'

/* Login page and homepage
 * No input
 * Changes user state
 */
export function Login() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [input, setInput] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		
		if (input !== '') {
			resetImageData(dispatch)
			userLogin(dispatch, input)
			navigate("/photos")
		}
	}
	
	return (
		<div id="login">
			<img src={logo} className="App-logo" alt="logo" />
			<form id="login_form" onSubmit={handleSubmit}>
				<div className="field_container">
					<input type="text" value={input} onInput={e => setInput(e.target.value)} placeholder="Username" />
				</div>
		
				<div className="field_container">
					<input type="Password" placeholder="Password" />
				</div>
					<button id="sign_in_button">
						<span className="button_text">Sign In</span>
					</button>
			</form>
		</div>
	)
}
	