import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './userSlice';
import { useNavigate } from "react-router-dom";
import { saveState } from '../../app/localStorage';
import { store } from '../../app/store';

export function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const name = useSelector((state) => state.user.name)

  useEffect(() => {
    if (name !== '') {
      navigate("/dashboard")
    }
  })

  function handleSubmit(e) {
    e.preventDefault();
    
    if (input !== '') {
        dispatch(login(input));
        saveState(store.getState())
        navigate("/dashboard");
    }
  }

  return (
    <div id="login">
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
  );
}
