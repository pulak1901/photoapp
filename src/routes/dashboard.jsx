import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/login/userSlice';
import { useNavigate } from "react-router-dom";

import { fetchImageData } from '../services/imageData';
import { ImageGrid } from '../features/imageGrid/ImageGrid';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Col, Row } from 'react-bootstrap';
import { saveState } from '../app/localStorage';
import { store } from '../app/store';

export default function Dashboard() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const name = useSelector(state => state.user.name)
  const [images, setImages] = useState([])
  const [imagesLoaded, setImagesLoaded] = useState(false)

  function button_logout(e) {
    dispatch(logout())
    saveState(store.getState())
    navigate('/')
  }

  useEffect(() => {
    if (name == '') {
      navigate("/")
    }
    (async () => {
      setImagesLoaded(false);

      await new Promise(resolve => setTimeout(resolve, 2000))
      fetchImageData().then((res) => {
        setImages(res.data);
        setImagesLoaded(true);
      })
    })();
  }, []);

  return (
    <div style={{height:"100vh", width:"100%",display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"stretch"}}>
      <div style={{flex: "3"}}>
        <h2>{name}</h2>
        <button onClick={button_logout}>Logout</button>
      </div>

      <div style={{flex:"7", overflow:"hidden"}} display="flex">
        <div style={{ flex: '1 1 auto', height: "100%" }} >
          {imagesLoaded ? (
            <ImageGrid items={images}/>
            ) : (
              <Spinner animation="grow" role="status">
              </Spinner>
            )}
        </div>
      </div>
    </div>    
  )
}